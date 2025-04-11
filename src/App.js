import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'; // Archivo con los estilos de la aplicación

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header className="header-custom" />

      {/* Contenido principal */}
      <div className="content-grid">
        <div className="column">
          <p className="text">
            ¡Explora nuestros productos para tus mascotas!
          </p>
        </div>
        <div className="column">
          <img
            src="/mascotas.jpg"
            alt="Productos para mascotas"
            className="image"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
