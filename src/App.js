import React from 'react';
// import Header from '';
import { Router, Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Footer from '';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
