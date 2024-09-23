// home.js
import React from 'react';
import './Home.css'; // Assurez-vous de créer ce fichier pour le style CSS
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="contact-info">
          <p>Email: nouira_houda@yahoo.fr</p>
          <p>Tel: +216-21382481</p>
        </div>
      </header>
      <main className="main-content">
        <h1>Bureau d'etude M&H Consulting</h1>
        
      
      </main>
      <Link  to="/app" className='client-button'>Client</Link>
      
      <footer className="footer">
      <div className="contact-info">
          <p>Email: nouira_houda@yahoo.fr</p>
          <p>Tel: +216-21382481</p>
        </div>
        
      </footer>
    </div>
  );
};

export default Home;
