import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Un componente personalizado esta en otro archivo.
import TopWikipedia from './components/TopWikipedia';

// Otro componente personalizado
function ComponenteBasico() {

  //    VARIABLE   MODIFICADOR
  const [clicks, setClicks] = useState(0)

  return (

          <div className="interactive-box">
            <p>Demostración de estado (<span className="code-pill">useState</span>):</p>
            <div className="counter-num">{clicks}</div>
            <div className="button-group">
              <button className="btn-primary" 

                // Al hacer click usamos el modificador. También describimos el siguiente modificador
                onClick={() => setClicks((prev) => prev + 1)}
              
              >
                Incrementar contador
              </button>
              <button className="btn-secondary" 

                onClick={() => setClicks(0)}
              
              >
                Reiniciar
              </button>
            </div>
          </div>
  );
}

function App() {

  return (
    <div className="app-container">
      {/* Cabecera */}
      <header className="hero-section">
        <div className="logos">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1 className="title">Introducción a React</h1>
        <p>Proyecto con <strong>NPM</strong>. <strong>Vite</strong> como servidor.</p>

      </header>

      {/* Contenido Principal*/}
      <main>
        <section className="card">
          <h2>📌 Definición de React</h2>
          <blockquote className="quote-highlight">
            Esto es <strong>React</strong>. Aunque ellos se autodenominan librería de renderizado, 
            en clase lo consideraremos un <strong>framework</strong>. Es de los frameworks de JavaScript 
            más populares en desarrollo web, aunque tiene opciones para multiplataforma. 
            Consiste en un <strong>motor de renderizado</strong> que da una experiencia muy fluida al usuario.
          </blockquote>

          <div className="columns">
            <div className="subcard">
              <h3>🧩 Librería vs Framework en clase</h3>
              <p>
                Oficialmente es una biblioteca para interfaces de usuario, pero el ecosistema moderno
                (enrutado, estado, empaquetadores) y su estructura modular hacen que en nuestra asignatura
                lo abordemos como un framework completo.
              </p>
            </div>
            <div className="subcard">
              <h3>📱 Enfoque Multiplataforma</h3>
              <p>
                Los mismos principios y la sintaxis JSX de React se extienden al desarrollo móvil
                nativo con <strong>React Native</strong> y aplicaciones de escritorio.
              </p>
            </div>
          </div>
        </section>

        <section className="card">

              <h2>⚡ Motor de Renderizado Reactivo</h2>
              <p>
                React no recarga la página para actualizar la vista: calcula los cambios en el <em>Virtual DOM</em> y
                modifica de forma eficiente y fluida únicamente los elementos necesarios en pantalla.
              </p>

              {/* Nuestro componentes son etiquetas html personalizadas */}
              <ComponenteBasico></ComponenteBasico>
        </section>

        {/* Abril y cerral a la vez*/}
        <TopWikipedia />

        {/* Guía didáctica de la estructura con NPM */}
        <section className="info-banner">
          <h4>¿QUÉ SETUP HEMOS HECHO?</h4>
          <ul>
            <li>
              Para iniciar un proyecto de react con vite usamos <code>npm create vite@latest</code>.
              Se crea un archivo llamado <span className="code-pill">package.json</span> que <b> declara </b> las dependencias (escribe su nombre). 
            </li>
            <li>
              <strong>Gestor de paquetes (NPM):</strong> Usamos <code>npm install</code> para que se instalen las dependencias como <code>react</code> y <code>react-dom</code>.
            </li>
            <li>
              <strong>Archivos JSX:</strong> El código de interfaz se encuentra separado en componentes con extensión <span className="code-pill">.jsx</span> (como <code>src/App.jsx</code> y <code>src/main.jsx</code>). Es un lenguaje que combina javascript y html.
            </li>
            <li>
              Leete el archivo <span className="code-pill">.gitignore</span>. Este es importante para no subir la carpeta <code>node_modules</code> a Git.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
