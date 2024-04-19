import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Forms from './components/Forms';
import Footer from './components/Footer';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import DirectorPage from './components/pages/DirectorPage';

export default function App() {
  const [formData, setFormData] = useState({
    
    username: '',
    email: '',
    password: '',
    imdb_rating: '',
    first_name: '',
    last_name: ''
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Router>
      <Container fluid className='app'>
        <Routes> 
          <Route path='/' element={<LandingPage />} /> 
          <Route path='/login' element={<LoginPage />} />
          <Route path='/director' element={<DirectorPage formData={formData} />} /> 
        </Routes>

        <NavBar />
        <Landing />
        <Forms onFormSubmit={handleFormSubmit} /> 
        <Footer />
      </Container>
    </Router>
  );
}
