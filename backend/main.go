package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/gorilla/mux"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option" 

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

// For analysis request
type AnalysisRequest struct {
    Text       string `json:"text"`
    PromptType string `json:"promptType"`
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

	r.HandleFunc("/generate-feedback", func(w http.ResponseWriter, r *http.Request) {
        generateFeedback(w, r, openaiClient)
    }).Methods("POST")

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
