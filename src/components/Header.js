import React from 'react';

function Header(){
  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: '3px solid rgb(70,108,82)',
    color:  '#f6f6f2',
    fontSize: '2rem',
    fontFamily: "'Oswald', sans-serif"
  }

  return (
    <div className="header" style={headerStyles}>
      <h1>REACT ON TAP</h1>
    </div>
  );
}

export default Header;