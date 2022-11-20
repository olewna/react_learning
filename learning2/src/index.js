import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(<App />)