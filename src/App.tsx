import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './pages/About';
import WhereToBuy from './pages/WhereToBuy';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/whereToBuy" component={WhereToBuy} />
      <Footer/>
    </Router>
  );
}

export default App;
