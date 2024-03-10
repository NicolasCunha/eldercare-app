// Third Party Imports
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// App Imports
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div style={{backgroundColor : "#2C3220"}}>
      <Router>
        <AppNavbar/>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path="/home" Component={Home}/>
          <Route path="/about" Component={About}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
