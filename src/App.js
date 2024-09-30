import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import EmailForm from './Component/EmailForm';
import OtpForm from './Component/OtpForm'
import RegistrationForm from './Component/RegistrationForm';
import LoginForm from './Component/LoginForm';
import Sidebar from './Component/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
            </>
          } 
        />
        <Route path="/email" element={<EmailForm />}/>
        <Route path="/otp" element={<OtpForm />}/>
        <Route path="/register" element={<RegistrationForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path='/sidebar' element={<Sidebar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;