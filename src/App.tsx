import React from 'react';
import './App.scss';
import { BrowseSection } from './components/BrowseSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <>
      <HeroSection />
      <BrowseSection />
      <Footer />
    </>
  );
}

export default App;
