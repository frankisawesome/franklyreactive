import React from 'react';
import '../css/App.css';
import { Navbar } from './Nav';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const navProps = [
    {name: "Home", path: "/"},
    {name: "Projects", path: "/"},
    {name: "About", path:"/"}
  ]

  return (
    <div className="App">
      <Router>
        <Navbar items={navProps} />
      </Router>
    </div>
  );
}

export default App;
