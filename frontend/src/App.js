import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import ExpertSignIn from './components/auth/ExpertSignIn';
import ExpertSignUp from './components/auth/ExpertSignUp';
import AdminSignIn from './components/auth/AdminSignIn';
import AdminSignUp from './components/auth/AdminSignUp';
import HomePage from './components/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth-details" element={<AuthDetails />} />
          <Route path="/expert-signin" element={<ExpertSignIn />} />
          <Route path="/expert-signup" element={<ExpertSignUp />} />
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/admin-signup" element={<AdminSignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;