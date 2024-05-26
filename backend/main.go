package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/gorilla/mux"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/clientcredentials"

	"github.com/joho/godotenv"
	openai "github.com/sashabaranov/go-openai"
)

// if setelah tulis "go run main.go", ga muncul apa-apa lagi di terminalnya, its ok, udah di test di postman, API nya tetep udah jalan & aktif

var client *firestore.Client

// untuk entity beasiswa
type Beasiswa struct {
	Nama          string `json:"namaBeasiswa"`
	Lingkup       string `json:"lingkupBeasiswa"`
	Tingkat       string `json:"tingkatPendidikanBeasiswa"`
	Penyelenggara string `json:"penyelenggaraBeasiswa"`
	Deskripsi     string `json:"deskripsiBeasiswa"`
	Manfaat       string `json:"manfaatBeasiswa"`
	Syarat        string `json:"syaratDanKetentuanBeasiswa"`
	Tautan        string `json:"tautanPendaftaranBeasiswa"`
}

// untuk entity dokumen
type Dokumen struct {
	JenisDokumen        string `json:"jenisDokumen"`
	LingkupDokumen      string `json:"lingkupBeasiswa"`
	TingkatDokumen      string `json:"tingkatPendidikanBeasiswa"`
	JenisAnalisa        string `json:"jenisAnalisa"`
	LinkDokumen         string `json:"linkDokumen"`
	HasilAnalisa        string `json:"hasilAnalisa"`
	HalYangBisaDirevisi string `json:"halYangBisaDirevisi"`
	CatatanTambahan     string `json:"catatanTambahan"`
}

// untuk entity expert
type Expert struct {
	Nama                     string `json:"nama"`
	TingkatPendidikan        string `json:"tingkatPendidikan"`
	UniversitasAtauAlmamater string `json:"universitasAtauAlmamater"`
	LinkCV                   string `json:"linkCV"`
	LinkFotoKTP              string `json:"linkFotoKTP"`
	LinkEssay                string `json:"linkEssay"`
	LinkFotoDiri             string `json:"linkFotoDiri"`
}

// untuk entity interview
type Interview struct {
	Nama                     string    `json:"nama"`
	TingkatBeasiswa          string    `json:"tingkatBeasiswa"`
	LingkupBeasiswa          string    `json:"lingkupBeasiswa"`
	JenisInterview           string    `json:"jenisInterview"`
	DeskripsiDiri            string    `json:"deskripsiDiri"`
	WaktuInterview           time.Time `json:"waktuInterview"`
	ZoomMeetingId            string    `json:"zoomMeetingId,omitempty"`
	ZoomMeetingPassword      string    `json:"zoomMeetingPassword,omitempty"`
	ZoomJoinUrl              string    `json:"zoomJoinUrl,omitempty"`
	ZoomStartUrl             string    `json:"zoomStartUrl,omitempty"`
	CreatedAt                time.Time `json:"createdAt,omitempty"`
	UpdatedAt                time.Time `json:"updatedAt,omitempty"`
	MasukanPositif           string    `json:"masukanPositif"`
	HalYangPerluDitingkatkan string    `json:"halYangPerluDitingkatkan"`
	CatatanTambahan          string    `json:"catatanTambahan"`
}

// For analysis request
type AnalysisRequest struct {
	Text       string `json:"text"`
	PromptType string `json:"promptType"`
}

// untuk Zoom API
type ZoomMeeting struct {
	Topic     string `json:"topic"`
	Type      int    `json:"type"`
	StartTime string `json:"start_time"`
	Duration  int    `json:"duration"`
	Timezone  string `json:"timezone"`
	Password  string `json:"password"`
	Agenda    string `json:"agenda"`
}

// untuk Zoom API juga
type ZoomMeetingResponse struct {
	ID        string `json:"id"`
	JoinURL   string `json:"join_url"`
	StartURL  string `json:"start_url"`
	MeetingID string `json:"id"`
	Password  string `json:"password"`
	StartTime string `json:"start_time"`
}

func main() {
	// Set the environment variable for Google Application Credentials
	os.Setenv("GOOGLE_APPLICATION_CREDENTIALS", "./service_account_key/beascholar-d26c0-e17b1788e2b2.json")

	ctx := context.Background()
	var err error

	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	// Initialize Firestore client
	// client, err = firestore.NewClient(ctx, "FIREBASE_PROJECT_ID")
	// Use the service account key file for authentication
	client, err = firestore.NewClient(ctx, "beascholar-d26c0", option.WithCredentialsFile(os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")))
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	// Initialize OpenAI client
	openaiClient := openai.NewClient(os.Getenv("OPENAI_API_KEY"))

	// Create a new router
	r := mux.NewRouter()

	// Route Handlers (backend API CRUD, openai API, etc)
	r.HandleFunc("/beasiswa", createBeasiswa).Methods("POST")
	r.HandleFunc("/beasiswa", getBeasiswa).Methods("GET")
	r.HandleFunc("/beasiswa/{id}", updateBeasiswa).Methods("PUT")
	r.HandleFunc("/beasiswa/{id}", deleteBeasiswa).Methods("DELETE")

	r.HandleFunc("/dokumen", createDokumen).Methods("POST")
	r.HandleFunc("/dokumen", getDokumen).Methods("GET")
	r.HandleFunc("/dokumen/{id}", updateDokumen).Methods("PUT")
	r.HandleFunc("/dokumen/{id}", deleteDokumen).Methods("DELETE")

	r.HandleFunc("/expert", createExpert).Methods("POST")
	r.HandleFunc("/expert", getExpert).Methods("GET")
	r.HandleFunc("/expert/{id}", updateExpert).Methods("PUT")
	r.HandleFunc("/expert/{id}", deleteExpert).Methods("DELETE")

	r.HandleFunc("/interview", createInterview).Methods("POST")
	r.HandleFunc("/interview", getInterview).Methods("GET")
	r.HandleFunc("/interview/{id}", updateInterview).Methods("PUT")
	r.HandleFunc("/interview/{id}", deleteInterview).Methods("DELETE")

	r.HandleFunc("/generate-feedback", func(w http.ResponseWriter, r *http.Request) {
		generateFeedback(w, r, openaiClient)
	}).Methods("POST")

	// to enable CORS, ini tu supaya bisa diakses backend nya di frontend
	http.Handle("/", enableCORS(r))

	// Start the server
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// POST - create new Beasiswa item
func createBeasiswa(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var beasiswa Beasiswa
	json.NewDecoder(r.Body).Decode(&beasiswa)
	_, _, err := client.Collection("beasiswa").Add(ctx, beasiswa)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Beasiswa created")
}

// GET - get Beasiswa item
func getBeasiswa(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var beasiswa []Beasiswa
	iter := client.Collection("beasiswa").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		var b Beasiswa
		doc.DataTo(&b)
		beasiswa = append(beasiswa, b)
	}
	json.NewEncoder(w).Encode(beasiswa)
}

// UPDATE - beasiswa item
func updateBeasiswa(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	var beasiswa Beasiswa
	json.NewDecoder(r.Body).Decode(&beasiswa)
	_, err := client.Collection("beasiswa").Doc(id).Set(ctx, beasiswa)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Beasiswa updated")
}

// DELETE - beasiswa item
func deleteBeasiswa(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	_, err := client.Collection("beasiswa").Doc(id).Delete(ctx)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Beasiswa deleted")
}

// POST - create new Dokumen item
func createDokumen(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var dokumen Dokumen
	json.NewDecoder(r.Body).Decode(&dokumen)
	_, _, err := client.Collection("dokumen").Add(ctx, dokumen)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Dokumen created")
}

// GET - get Dokumen item
func getDokumen(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var dokumen []Dokumen
	iter := client.Collection("dokumen").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		var d Dokumen
		doc.DataTo(&d)
		dokumen = append(dokumen, d)
	}
	json.NewEncoder(w).Encode(dokumen)
}

// UPDATE - dokumen item
func updateDokumen(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	var dokumen Dokumen
	json.NewDecoder(r.Body).Decode(&dokumen)
	_, err := client.Collection("dokumen").Doc(id).Set(ctx, dokumen)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Dokumen updated")
}

// DELETE - dokumen item
func deleteDokumen(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	_, err := client.Collection("dokumen").Doc(id).Delete(ctx)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Dokumen deleted")
}

// POST - create new Expert item
func createExpert(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var expert Expert
	json.NewDecoder(r.Body).Decode(&expert)
	_, _, err := client.Collection("expert").Add(ctx, expert)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Expert created")
}

// GET - get Expert item
func getExpert(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var expert []Expert
	iter := client.Collection("expert").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		var e Expert
		doc.DataTo(&e)
		expert = append(expert, e)
	}
	json.NewEncoder(w).Encode(expert)
}

// UPDATE - expert item
func updateExpert(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	var expert Expert
	json.NewDecoder(r.Body).Decode(&expert)
	_, err := client.Collection("expert").Doc(id).Set(ctx, expert)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Expert updated")
}

// DELETE - expert item
func deleteExpert(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	_, err := client.Collection("expert").Doc(id).Delete(ctx)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Expert deleted")
}

// POST - create new Interview item & NEW ZOOM MEETING
func createInterview(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var interview Interview
	if err := json.NewDecoder(r.Body).Decode(&interview); err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid request body"})
		return
	}

	log.Printf("Received interview creation request: %+v", interview)

	zoomResponse, err := createZoomMeeting(interview)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"error": "Failed to create Zoom meeting: " + err.Error()})
		return
	}

	// Fill Zoom-related attributes to the Interview entity
	interview.ZoomMeetingId = zoomResponse.MeetingID
	interview.ZoomMeetingPassword = zoomResponse.Password
	interview.ZoomJoinUrl = zoomResponse.JoinURL
	interview.ZoomStartUrl = zoomResponse.StartURL
	interview.CreatedAt = time.Now()
	interview.UpdatedAt = time.Now()

	// Add interview to Firestore
	_, _, err = client.Collection("interview").Add(ctx, interview)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"error": "Failed to create interview: " + err.Error()})
		return
	}

	// Prepare response
	response := map[string]string{
		"message":             "Interview and Zoom meeting created successfully",
		"zoomMeetingId":       interview.ZoomMeetingId,
		"zoomMeetingPassword": interview.ZoomMeetingPassword,
		"zoomJoinUrl":         interview.ZoomJoinUrl,
		"zoomStartUrl":        interview.ZoomStartUrl,
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// GET - get Interview item
func getInterview(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var interview []Interview
	iter := client.Collection("interview").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		var i Interview
		doc.DataTo(&i)
		interview = append(interview, i)
	}
	json.NewEncoder(w).Encode(interview)
}

// UPDATE - interview item
func updateInterview(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	var interview Interview
	json.NewDecoder(r.Body).Decode(&interview)
	_, err := client.Collection("interview").Doc(id).Set(ctx, interview)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Interview updated")
}

// DELETE - interview item
func deleteInterview(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	vars := mux.Vars(r)
	id := vars["id"]
	_, err := client.Collection("interview").Doc(id).Delete(ctx)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintln(w, "Interview deleted")
}

// Function to generate feedback using OpenAI API
func generateFeedback(w http.ResponseWriter, r *http.Request, openaiClient *openai.Client) {
	var analysisRequest AnalysisRequest
	if err := json.NewDecoder(r.Body).Decode(&analysisRequest); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	log.Printf("Received request for analysis with prompt type: %s", analysisRequest.PromptType)
	log.Printf("Received request text: %s", analysisRequest.Text)

	var prompt string
	switch analysisRequest.PromptType {
	case "hasilAnalisa":
		prompt = "Analisa text dokumen ini dan berikan hasil analisa anda, maksimal 1 paragraf:\n\n" + analysisRequest.Text
	case "halYangBisaDirevisi":
		prompt = "Analisa text dokumen ini dan tuliskan hal apa yang bisa direvisi, maksimal 2 paragraf:\n\n" + analysisRequest.Text
	case "catatanTambahan":
		prompt = "Analisa text dokumen ini dan tuliskan catatan tambahan (jika ada), maksimal 2 paragraf:\n\n" + analysisRequest.Text
	default:
		http.Error(w, "Invalid prompt type", http.StatusBadRequest)
		return
	}

	log.Printf("Generated prompt: %s", prompt)

	resp, err := openaiClient.CreateChatCompletion(context.Background(), openai.ChatCompletionRequest{
		Model: "gpt-4",
		Messages: []openai.ChatCompletionMessage{
			{
				Role:    "system",
				Content: "You are an AI trained to analyze academic documents.",
			},
			{
				Role:    "user",
				Content: prompt,
			},
		},
	})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"result": resp.Choices[0].Message.Content})
}

// CORS middleware
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle preflight request
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// BELOW THIS IS FOR THE ZOOM FUNCTIONALITY
func getZoomOAuthToken() (*oauth2.Token, error) {
	conf := &clientcredentials.Config{
		ClientID:     os.Getenv("ZOOM_CLIENT_ID"),
		ClientSecret: os.Getenv("ZOOM_CLIENT_SECRET"),
		TokenURL:     "https://zoom.us/oauth/token",
		EndpointParams: map[string][]string{
			"grant_type": {"account_credentials"},
			"account_id": {os.Getenv("ZOOM_ACCOUNT_ID")},
		},
		Scopes: []string{"meeting:write:admin", "meeting:write"},
	}

	token, err := conf.Token(context.Background())
	if err != nil {
		log.Printf("Error retrieving OAuth token: %v", err)
		return nil, err
	}
	log.Printf("Successfully retrieved OAuth token: %v", token)
	return token, nil
}

// to create zoom meeting
func createZoomMeeting(interview Interview) (*ZoomMeetingResponse, error) {
	token, err := getZoomOAuthToken()
	if err != nil {
		return nil, err
	}

	zoomMeeting := ZoomMeeting{
		Topic:     "Interview with " + interview.Nama,
		Type:      2,
		StartTime: interview.WaktuInterview.Format(time.RFC3339),
		Duration:  60,
		Timezone:  "Asia/Jakarta",
		Password:  "123456",
		Agenda:    "Interview",
	}

	zoomMeetingData, err := json.Marshal(zoomMeeting)
	if err != nil {
		log.Printf("Error marshalling Zoom meeting data: %v", err)
		return nil, err
	}

	req, err := http.NewRequest("POST", "https://api.zoom.us/v2/users/"+os.Getenv("ZOOM_USER_ID")+"/meetings", bytes.NewBuffer(zoomMeetingData))
	if err != nil {
		log.Printf("Error creating Zoom meeting request: %v", err)
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer "+token.AccessToken)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Printf("Error sending Zoom meeting request: %v", err)
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusCreated {
		log.Printf("Zoom API responded with status code: %d", resp.StatusCode)
		var zoomErr map[string]interface{}
		if err := json.NewDecoder(resp.Body).Decode(&zoomErr); err == nil {
			log.Printf("Zoom API error: %v", zoomErr)
		}
		return nil, fmt.Errorf("failed to create Zoom meeting, status code: %d", resp.StatusCode)
	}

	var zoomResponse ZoomMeetingResponse
	if err := json.NewDecoder(resp.Body).Decode(&zoomResponse); err != nil {
		log.Printf("Error decoding Zoom meeting response: %v", err)
		return nil, err
	}

	log.Printf("Successfully created Zoom meeting: %+v", zoomResponse)
	return &zoomResponse, nil
}

/*
// dibawah ini semua contoh code dari dokumentasinya, terkait contoh cara bikin backend api di golang
// https://go.dev/doc/tutorial/web-service-gin
// untuk test jalan ato ngga, send api url (GET/POST/PUT/DELETE) nya di postman (ex : localhost:8080/albums) -> ini untuk get album

// album represents data about a record album.
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

// albums slice to seed record album data.
var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

func main() {
	router := gin.Default()
	router.GET("/albums", getAlbums)
	router.GET("/albums/:id", getAlbumByID)
	router.POST("/albums", postAlbums)

	router.Run("localhost:8080")
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
	var newAlbum album

	// Call BindJSON to bind the received JSON to
	// newAlbum.
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// Add the new album to the slice.
	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumByID(c *gin.Context) {
	id := c.Param("id")

	// Loop through the list of albums, looking for
	// an album whose ID value matches the parameter.
	for _, a := range albums {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}

*/
