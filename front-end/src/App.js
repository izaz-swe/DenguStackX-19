import React from 'react';
import './styles/globals.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Research from './components/Research/Research';
import Models from './components/Models/Models';
import TestModel from './components/TestModel/TestModel';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Research />
      <Models />
      <TestModel />
      <Team />
      <Footer />
    </div>
  );
}

export default App;