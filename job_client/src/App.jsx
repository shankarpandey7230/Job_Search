import './App.css';
import NavBar from './components/shared/NavBar';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
