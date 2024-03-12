// Third Party Imports
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// App Imports
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div style={{backgroundColor : "#2C3220"}}>
      <GoogleOAuthProvider clientId='<GOOGLE-DEV-CLIENT-ID>'>
      <Router>
        <AppNavbar/>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path="/home" Component={Home}/>
          <Route path="/about" Component={About}/>
        </Routes>
      </Router>
      </GoogleOAuthProvider>
    </div>    
  );
}

export default App;
