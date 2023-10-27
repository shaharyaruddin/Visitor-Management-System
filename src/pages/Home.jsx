import React from 'react';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#007BFF',
  color: 'white',
  fontSize: '2rem',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

function Home() {
  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Our Page</h1>
      <p>We're glad you're here. Explore our amazing features!</p>
    </div>
  );
}

export default Home;
