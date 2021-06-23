import React from 'react';
import Header from './components/Header/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Footer from '';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/Professional-Portfolio' component={Home} />
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
