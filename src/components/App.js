import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//My components
import { Navbar } from './Nav';
import { Home } from './pages/Home';
import { Proj } from './pages/Projects';
import { Stewie } from './pages/Stewie';
import { Footer } from './Footer';
import { Resume } from './pages/Resume'; 

//Functional app component
function App() {

  //Props that specify route names and paths for the Navbar component
  const navProps = [
    {name: "Frank", path: "/"},
    {name: "Projects", path: "/projects/"},
    {name: "Stewie", path:"/stewie/"},
    {name: "Resume", path:"/resume/"}
  ]

  //Router setup
  return (
    <div className="App">
      <Router>
        <Navbar items={navProps} />
        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Proj}/>
        <Route path="/stewie/" component={Stewie}/>
        <Route path="/resume/" component={Resume}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
