import React from 'react';
import Header from './components/Header/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Footer from '';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/Professional-Portfolio'>
            {Home}
          </Route>
          <Route exact path='/Professional-Portfolio/about'>
            {About}
          </Route>
          <Route exact path='/Professional-Portfolio/projects'>
            {Projects}
          </Route>
          <Route exact path='/Professional-Portfolio/contact'>
            {Contact}
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
