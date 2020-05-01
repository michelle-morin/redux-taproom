import React from 'react';

function Footer(){
  const footerStyles = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100vw',
    backgroundColor: '#6C4660',
    color: '#f6f6f2',
    padding: '0.5%',
    paddingLeft: '2%'
  }

  return(
    <div style={footerStyles}>
      <p>&copy; 2020 - Michelle Morin</p>
    </div>
  );
}

export default Footer;