import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Router from './Router';


import './App.css';

class App extends Component{ 
  render(){ 
  return (
    <div>

      <Header/>
      <Router/>
      <Footer/>

    </div>  

  );
 }
}

export default App;
