import React from 'react';
import Header from './components/Header/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Background from './assets/images/background.jpg';
import Footer from './components/Footer';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='App-main min-vh-100' style={{ backgroundImage: `url(${Background})`}}>
          <Switch>
            <Route exact path='/Professional-Portfolio'>
              {Home}
            </Route>
            <Route exact path='/Professional-Portfolio/about'>
              {About}
            </Route>
            <Route exact path='/Professional-Portfolio/projects' render={(repos) => (
              <Projects {...repos} isAuthed={true} />
            )} />
            <Route exact path='/Professional-Portfolio/contact'>
              {Contact}
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
