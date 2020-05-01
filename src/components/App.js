import React from 'react';
import Header from './Header.js';
import TapControl from './TapControl.js';
import Footer from './Footer.js';

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
  }

  return (
    <div style={appStyles}>
      <Header />
      <TapControl className="tap-control" />
      <Footer />
    </div>
  );
}

export default App;
