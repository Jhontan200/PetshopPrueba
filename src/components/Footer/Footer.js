import React from 'react';
import './Footer.css'; // Asegúrate de que este archivo exista en la misma carpeta

function Footer() {
  return (
    <footer className="parent">
      {/* Campo 1 */}
      <div className="div1">
        <p>Enlace 1</p>
      </div>
      {/* Campo 2 */}
      <div className="div2">
        <p>Enlace 2</p>
      </div>
      {/* Campo 3 */}
      <div className="div3">
        <p>Enlace 3</p>
      </div>
      {/* Campo 4 */}
      <div className="div4">
        <p>Enlace 4</p>
      </div>
      {/* Campo 5 */}
      <div className="div5">
        <p>© Pet Shop - 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
