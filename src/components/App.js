import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//My components
import { Navbar } from './Nav';
import { Home } from './Home';
import { Proj } from './Projects';
import { Stuff } from './Stuff';

//Functional app component
function App() {

  //Props that specify route names and paths for the Navbar component
  const navProps = [
    {name: "Frank", path: "/"},
    {name: "Projects", path: "/projects/"},
    {name: "Stuff", path:"/stuff/"}
  ]

  //Router setup
  return (
    <div className="App">
      <Router>
        <Navbar items={navProps} />
        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Proj}/>
        <Route path="/stuff/" component={Stuff}/>
      </Router>
    </div>
  );
}

export default App;
