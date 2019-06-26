import React from 'react';
import '../css/App.css';
import { Navbar } from './Nav';
import { BrowserRouter as Router } from 'react-router-dom'

//Functional app component
function App() {

  //Props that specify route names and paths for the Navbar component
  const navProps = [
    {name: "Frank", path: "/"},
    {name: "Projects", path: "/"},
    {name: "Stuff", path:"/"}
  ]

  //Router setup
  return (
    <div className="App">
      <Router>
        <Navbar items={navProps} />
      </Router>
    </div>
  );
}

export default App;
