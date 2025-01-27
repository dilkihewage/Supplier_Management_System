import React from 'react';

export default function HomePage() {
  return (
    <main style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Supplier Management System</h1>
        <p style={styles.subtitle}>Streamline your supplier operations efficiently.</p>
        <nav style={styles.ctaButtons}>
          <a href="/login" style={styles.ctaButton}>Login</a>
          <a href="/register" style={styles.ctaButton}>Register</a>
         
        </nav>
      </header>
    </main>
  );
}

const styles = {
  pageContainer: {
    background: 'linear-gradient(to right, rgba(76, 122, 175, 0.7), rgba(33, 150, 243, 0.7)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HgEnTfquePZBRqJ1Fi7h-5EBMSvreCXEzw&s")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '95vh', // Full viewport height
    width:'210vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
  header: {
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  ctaButtons: {
    marginTop: '20px',
  },
  ctaButton: {
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '5px',
    display: 'inline-block',
    background: '#191970',
    color: 'white',
  },
};
