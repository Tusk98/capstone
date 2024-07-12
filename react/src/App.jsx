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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Router>

      <div>
        <h1>Enterprise Directory </h1>
        <hr></hr>
       </div>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Employees" element={<Employees />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
