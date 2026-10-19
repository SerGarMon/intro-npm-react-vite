import { useState } from 'react';
import './TopWikipedia.css'; // Opcional si quieres añadirle estilos

export default function TopWikipedia() {
  // Estado que controla qué se muestra: "Menu", "Prado" o "Elefante"
  const [estado, setEstado] = useState('Menu');

  // Datos de las imágenes
  const prado = {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Horses_grazing_at_Trunkol_meadow,_Jammu_and_Kashmir,_India_(crop).jpg",
    descripcion: "Horses grazing at Trunkol meadow, Jammu and Kashmir, India"
  };

  const elefante = {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Desert_elephant_(Loxodonta_africana)_spraying_sand.jpg",
    descripcion: "Desert elephant (Loxodonta africana) spraying sand"
  };

  // 1. Vista si el estado es "Prado"
  if (estado === 'Prado') {
    return (
      <div className="wiki-container">
        <button className="btn-volver" onClick={() => setEstado('Menu')}>
          ← Volver atrás
        </button>
        <div className="wiki-split">
          <img src={prado.url} alt="Prado" className="wiki-image" />
          <div className="wiki-info">
            <p>{prado.descripcion}</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Vista si el estado es "Elefante"
  if (estado === 'Elefante') {
    return (
      <div className="wiki-container">
        <button className="btn-volver" onClick={() => setEstado('Menu')}>
          ← Volver atrás
        </button>
        <div className="wiki-split">
          <img src={elefante.url} alt="Elefante" className="wiki-image" />
          <div className="wiki-info">
            <p>{elefante.descripcion}</p>
          </div>
        </div>
      </div>
    );
  }

  // 3. Vista por defecto: "Menu"
  return (
    <div className="wiki-container">
      <h1 className="wiki-main-title">Top imágenes de Wikipedia esta semana</h1>
      
      <div className="wiki-grid">
        <div className="wiki-card" onClick={() => setEstado('Prado')}>
          <img src={prado.url} alt="Prado" />
        </div>
        
        <div className="wiki-card" onClick={() => setEstado('Elefante')}>
          <img src={elefante.url} alt="Elefante" />
        </div>
      </div>
    </div>
  );
}