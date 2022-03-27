import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard  from './components/dashboard'
import Home from './components/home'
import Navbar from './components/shared/navbar'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard"element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
