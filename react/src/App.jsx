import { useState } from 'react'
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
import { AuthProvider } from './hooks/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <div>
        <h1>Enterprise Directory </h1>
        <hr></hr>
       </div>
       <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
        
            <Route path="/employees" element={<RequireAuth><Employees /></RequireAuth>} />
            <Route path="/employees/:id" element = {<EmployeeCard />} />
          </Routes>
          </AuthProvider>
      </Router>
  )
}

export default App
