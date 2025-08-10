// src/components/Documentation.tsx
import React from 'react';
import './Documentation.css';

const Documentation = () => {
  return (
    <div className="documentation-wrapper">
      <aside className="sidebar">
        <img src="/public/logo2.png" alt="Logo Scout" className="sidebar-logo" />
        <h3>Índice</h3>
        <ul>
          <li><a href="#golondrinas">Golondrinas</a></li>
          <li><a href="#lobatos">Lobatos</a></li>
          <li><a href="#compania">Compañía</a></li>
          <li><a href="#tropa">Tropa</a></li>
          <li><a href="#ruta">Ruta</a></li>
        </ul>
      </aside>

      <main className="documentation-container">
        <h1>Documentación de Uso – Editor/Viewer de Mangas</h1>

        <h2 id="golondrinas">Golondrinas</h2>
        <p>Al ingresar a la aplicación se presentan dos opciones:</p>
        <p>
          <strong>Editor:</strong> Accede al editor de mangas.  
          <br />
          <strong>Viewer:</strong> Visualiza los mangas disponibles.
        </p>

        <h2 id="lobatos">Lobatos</h2>
        <p>El editor de Mangify es una herramienta avanzada que permite crear cómics interactivos donde cada viñeta puede ser sincronizada con una pista de audio específica. El proceso de edición se divide en varias secciones interconectadas que permiten al usuario trabajar de manera visual e intuitiva.</p>

        <h2 id="lobatos">Lobatos</h2>
        <p>El editor de Mangify es una herramienta avanzada que permite crear cómics interactivos donde cada viñeta puede ser sincronizada con una pista de audio específica. El proceso de edición se divide en varias secciones interconectadas que permiten al usuario trabajar de manera visual e intuitiva.</p>

        <h2 id="compania">Compañía</h2>
        <p>La compañía detrás de Mangify se dedica a la innovación en la creación de contenido digital, ofreciendo herramientas que facilitan la producción de cómics y mangas interactivos.</p>

        <h2 id="tropa">Tropa</h2>
        <p>La tropa de desarrollo de Mangify está compuesta por un equipo multidisciplinario de expertos en diseño, programación y narrativa visual.</p>

        <h2 id="ruta">Ruta</h2>
        <p>La ruta de desarrollo de Mangify se basa en la retroalimentación constante de los usuarios, lo que permite iterar y mejorar la plataforma de manera ágil.</p>
      </main>
    </div>
  );
};

export default Documentation;
