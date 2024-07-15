import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Employees from './components/Employees';
import EmployeeCard from './components/EmployeeCard';
import RequireAuth from './components/RequireAuth';
import Predictor from './components/Predictor';
import { AuthProvider } from './hooks/AuthContext';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
          <h1>Enterprise Directory </h1>
          <hr></hr>
        
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route path="/employees" element={<RequireAuth><Employees /></RequireAuth>} />
            <Route path="/employees/:id" element={<EmployeeCard />} />
            <Route path="/predictor" element = {<Predictor />} />
          </Routes>
        </AuthProvider>
      </Router></>
  )
}

export default App
