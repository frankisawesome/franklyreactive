import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//My components
import { Navbar } from './Nav';
import { Home } from './Home';
import { Proj } from './Projects';
import { Stewie } from './Stewie';

//Functional app component
function App() {

  //Props that specify route names and paths for the Navbar component
  const navProps = [
    {name: "Frank", path: "/"},
    {name: "Projects", path: "/projects/"},
    {name: "Stewie", path:"/stewie/"}
  ]

  //Router setup
  return (
    <div className="App">
      <Router>
        <Navbar items={navProps} />
        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Proj}/>
        <Route path="/stewie/" component={Stewie}/>
      </Router>
    </div>
  );
}

export default App;
