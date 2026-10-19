import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Componente personalizado
function UsarEstados() {

  //    VARIABLE   ESTADO
  const [clicks, setClicks] = useState(0)

      return (
      <section className="card">

              <h2>⚡ Motor de Renderizado Reactivo</h2>
              <p>
                React no recarga la página para actualizar la vista: calcula los cambios en el <em>Virtual DOM</em> y
                modifica de forma eficiente y fluida únicamente los elementos necesarios en pantalla.
              </p>

              <div className="interactive-box">
                <p>Demostración de estado (<span className="code-pill">useState</span>):</p>
                <div className="counter-num">{clicks}</div>
                <div className="button-group">
                  <button 
                    type="button" 
                    className="btn-primary" 
                    onClick={() => setClicks((prev) => prev + 1)}
                  >
                    Incrementar contador
                  </button>
                  <button 
                    type="button" 
                    className="btn-secondary" 
                    onClick={() => setClicks(0)}
                  >
                    Reiniciar
                  </button>
                </div>
              </div>
        </section>
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
        <p>Proyecto didáctico con <strong>NPM</strong> y componentes <strong>JSX</strong></p>
        <div className="badge-row">
          <span className="badge">NPM & package.json</span>
          <span className="badge">Archivos .jsx</span>
          <span className="badge">Vite</span>
        </div>
      </header>

      {/* Contenido Principal requerido */}
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

        {/* Nuestro componentes son etiquetas html personalizadas */}
        <UsarEstados></UsarEstados>

        {/* Guía didáctica de la estructura con NPM */}
        <section className="info-banner">
          <h4>🎓 ¿Qué hemos aprendido en este paso con NPM?</h4>
          <ul>
            <li>
              <strong>Gestor de paquetes (NPM):</strong> Usamos <span className="code-pill">package.json</span> para declarar dependencias como <code>react</code> y <code>react-dom</code>.
            </li>
            <li>
              <strong>Archivos JSX:</strong> El código de interfaz se encuentra separado en componentes con extensión <span className="code-pill">.jsx</span> (como <code>src/App.jsx</code> y <code>src/main.jsx</code>).
            </li>
            <li>
              <strong>Control de versiones:</strong> Se incluye el archivo <span className="code-pill">.gitignore</span> para no subir la carpeta <code>node_modules</code> a Git.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
