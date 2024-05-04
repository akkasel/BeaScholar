import './App.css';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import ExpertSignIn from './components/expert/expertAuth/ExpertSignIn';
import ExpertSignUp from './components/expert/expertAuth/ExpertSignUp';
import AdminSignIn from './components/admin/adminAuth/AdminSignIn';
import AdminSignUp from './components/admin/adminAuth/AdminSignUp';
import HomePage from './components/user/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InterviewPage from './components/user/interview/InterviewPage';
import DaftarJadwalInterviewPage from './components/user/interview/DaftarJadwalInterviewPage';
import FeedbackInterviewPage from './components/user/interview/FeedbackInterviewPage';
import DocumentPage from './components/user/document/DocumentPage';
import DaftarHasilAnalisisDokumenPage from './components/user/document/DaftarHasilAnalisisDokumenPage';
import FeedbackDokumenPage from './components/user/document/FeedbackDokumenPage';
import ProfilePage from './components/user/profile/ProfilePage';
import AdminHomePage from './components/admin/adminHome/AdminHomePage';
import AdminVerifikasiPage from './components/admin/adminVerifikasi/AdminVerifikasiPage';
import AdminVerifikasiDetailPengajuanPage from './components/admin/adminVerifikasi/AdminVerifikasiDetailPengajuanPage';
import UploadBeasiswaPage from './components/admin/adminBeasiswa/UploadBeasiswaPage';
import AdminProfilePage from './components/admin/adminProfile/AdminProfilePage';
import ExpertHomePage from './components/expert/expertHome/ExpertHomePage';
import ExpertDaftarJadwalInterviewPage from './components/expert/expertInterview/ExpertDaftarJadwalInterviewPage';
import ExpertFeedbackInterviewPage from './components/expert/expertInterview/ExpertFeedbackInterviewPage';
import ExpertDaftarHasilAnalisisDokumenPage from './components/expert/expertDocument/ExpertDaftarHasilAnalisisDokumenPage';
import ExpertFeedbackDokumenPage from './components/expert/expertDocument/ExpertFeedbackDokumenPage';
import ExpertProfilePage from './components/expert/expertProfile/ExpertProfilePage';
import ScholarshipDetailItemPage from './components/ScholarshipDetailItemPage';
import ScholarshipDetailItemPageForAdmin from './components/ScholarshipDetailItemPageForAdmin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Route yang berkaitan dengan role User */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth-details" element={<AuthDetails />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/scholarship-detail-item" element={<ScholarshipDetailItemPage />} />

          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/daftar-jadwal-interview" element={<DaftarJadwalInterviewPage />} />
          <Route path="/feedback-interview" element={<FeedbackInterviewPage />} />

          <Route path="/document" element={<DocumentPage />} />
          <Route path="/daftar-hasil-analisis-dokumen" element={<DaftarHasilAnalisisDokumenPage />} />
          <Route path="/feedback-dokumen" element={<FeedbackDokumenPage />} />

          <Route path="/profile" element={<ProfilePage />} />


          {/* Route yang berkaitan dengan role Expert simpan dibawah sini */}
          <Route path="/expert-signin" element={<ExpertSignIn />} />
          <Route path="/expert-signup" element={<ExpertSignUp />} />

          <Route path="/expert-home" element={<ExpertHomePage />} />

          <Route path="/expert-daftar-jadwal-interview" element={<ExpertDaftarJadwalInterviewPage />} />
          <Route path="/expert-feedback-interview" element={<ExpertFeedbackInterviewPage />} />

          <Route path="/expert-daftar-hasil-analisis-dokumen" element={<ExpertDaftarHasilAnalisisDokumenPage />} />
          <Route path="/expert-feedback-dokumen" element={<ExpertFeedbackDokumenPage />} />

          <Route path="/expert-profile" element={<ExpertProfilePage />} />

          {/* Route yang berkaitan dengan role Admin simpan dibawah sini */}
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/admin-signup" element={<AdminSignUp />} />

          <Route path="/admin-home" element={<AdminHomePage />} />
          <Route path="/admin-scholarship-detail-item" element={<ScholarshipDetailItemPageForAdmin />} />

          <Route path="/admin-verifikasi" element={<AdminVerifikasiPage />} />
          <Route path="/admin-verifikasi-detail-pengajuan" element={<AdminVerifikasiDetailPengajuanPage />} />

          <Route path="/admin-upload-beasiswa" element={<UploadBeasiswaPage />} />

          <Route path="/admin-profile" element={<AdminProfilePage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;