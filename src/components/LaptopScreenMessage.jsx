import React from 'react';

function LaptopScreenMessage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Important Message</h1>
      <p style={styles.message}>Please note that it is recommended to open this on a laptop screen for the best viewing experience.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20vh',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  message: {
    fontSize: '18px',
    color: '#666',
  }
};

export default LaptopScreenMessage;