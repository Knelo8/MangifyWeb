// src/components/Documentation.tsx
import React from 'react';
import './Documentation.css';

const Documentation = () => {
  return (
    <div className="documentation-wrapper">
      <aside className="sidebar">
        <img src="/public/logo2.png" alt="Logo Mangify" className="sidebar-logo" />
        <h3>Índice</h3>
        <ul>
          <li><a href="#principal">Demo</a></li>
          <li><a href="#editor">Editor de Mangas</a></li>
          <li><a href="#Interfaz">Interfaz y estructura general</a></li>
          <li><a href="#viñetas">Creación de Viñetas</a></li>
          <li><a href="#Nodos">Nodos Musicales</a></li>
          <li><a href="#linea-interactiva">Línea de Tiempo Interactiva</a></li>
          <li><a href="#linea">Sincronización con Música</a></li>
          <li><a href="#separador">Herramientas del Editor</a></li>
          <li><a href="#exportacion">Exportación del cómic</a></li>
          <li><a href="#viewer">Viewer de Mangas</a></li>
        </ul>
      </aside>

      <main className="documentation-container">
        <h1>Documentación de Uso – Editor/Viewer de Mangas</h1>

        <h2 id="principal">Demo</h2>
        <p>Al ingresar a la aplicación se presentan dos opciones:</p>
        <p>
          <strong>Editor:</strong> Accede al editor de mangas.  
          <br />
          <strong>Viewer:</strong> Visualiza los mangas disponibles.
        </p>

        <h2 id="editor">Editor de Mangas</h2>
        <p>El editor de Mangify es una herramienta avanzada que permite crear cómics interactivos donde cada viñeta puede ser sincronizada con una pista de audio específica. El proceso de edición se divide en varias secciones interconectadas que permiten al usuario trabajar de manera visual e intuitiva.</p>

        <ol>
          <li id="Interfaz"><strong>Interfaz y estructura general</strong></li>
          <p>La interfaz del editor está organizada mediante paneles redimensionables que permiten distribuir el espacio según las preferencias del usuario. Esta estructura modular incluye:</p>
          <ul>
            <li>Selector de páginas (izquierda): permite navegar entre las páginas del PDF del manga cargado.</li>
            <li>Área de edición principal (centro): muestra la página actual del manga y permite crear formas (viñetas) sobre ella.</li>
            <li>Herramientas de creación (derecha): contiene botones para añadir nodos musicales, agregar viñetas, eliminar puntos o formas, y exportar el proyecto.</li>
            <li>Línea de tiempo (abajo): permite visualizar los nodos musicales y organizar las viñetas que serán reproducidas durante la lectura del cómic.</li>
          </ul>

          <li id="viñetas"><strong>Creación de viñetas</strong></li>
          <p>Las viñetas se crean manualmente haciendo clic en puntos sucesivos sobre la página del manga. Cuando el usuario cierra la figura (haciendo clic cerca del punto inicial), se genera una viñeta completamente definida.</p>
          <p>Cada viñeta tiene metadatos asociados:</p>
          <ul>
            <li>Número de capítulo</li>
            <li>Número de página</li>
            <li>Orden de creación</li>
            <li>Identificador único</li>
            <li>Fecha de creación</li>
          </ul>
          <p>Las viñetas se renderizan con bordes negros y color de fondo opaco. También es posible visualizar los puntos mientras se está dibujando la figura, con coordenadas de ayuda.</p>

          <li id="Nodos"><strong>Nodos musicales</strong></li>
          <p>Mangify permite agrupar viñetas dentro de nodos, los cuales representan fragmentos musicales (con atributos como color y estado de ánimo). Estos nodos son editables y se pueden reorganizar mediante un sistema drag-and-drop (arrastrar y soltar).</p>
          <p>Cada nodo incluye:</p>
          <ul>
            <li>Tipo de música (feliz/triste)</li>
            <li>Viñetas asociadas</li>
            <li>Orden de aparición</li>
            <li>Color representativo</li>
          </ul>
          <p>Esto permite personalizar la narrativa del manga con música que acompaña emocionalmente cada escena.</p>

          <li id="linea-interactiva"><strong>Línea de tiempo interactiva</strong></li>
          <p>La parte inferior del editor muestra la línea de tiempo del cómic. Aquí, el usuario puede:</p>
          <ul>
            <li>Reordenar nodos musicales horizontalmente.</li>
            <li>Arrastrar y soltar viñetas entre nodos.</li>
            <li>Visualizar el orden narrativo del contenido.</li>
            <li>Acceder a un panel de eliminación para descartar elementos.</li>
          </ul>

          <li id="linea"><strong>Sincronización con Música</strong></li>
          <p>Sincroniza viñetas con la música:</p>
          <p>
            Cada nodo representa una pista musical.  
            <br />
            Dentro de cada nodo hay bullets que puedes mover.  
            <br />
            Asigna la música a las viñetas correspondientes.
          </p>

          <li id="separador"><strong>Herramientas del Editor</strong></li>
          <p>Incluye los siguientes botones:</p>
          <ul>
            <li>Finalizar forma: Cierra la figura actual.</li>
            <li>Eliminar último punto: Borra el último punto agregado.</li>
            <li>Eliminar última forma: Elimina la última figura completa.</li>
            <li>Exportar cómic: Guarda la página editada como JSON.</li>
          </ul>
        </ol>

        <h2 id="exportacion">Exportación del cómic</h2>
        <p>
          El botón <strong>Exportar cómic</strong> permite generar un archivo <code>.json</code> que contiene toda la metadata del proyecto creado. Este archivo incluye:
        </p>
        <ul>
          <li>Título del cómic, autor y fecha de creación.</li>
          <li>Capítulo y páginas.</li>
          <li>Lista de viñetas con sus puntos, forma y color.</li>
          <li>Nodos musicales con sus atributos y viñetas asociadas.</li>
        </ul>
        <p>
          Este archivo puede ser descargado o copiado al portapapeles, y luego será utilizado por el Viewer para reproducir el cómic con ambientación sonora.
        </p>

        <h2 id="viewer">Viewer de Mangas</h2>
        <p>
          El visor de Mangify es una herramienta interactiva que permite recorrer el manga exportado desde el editor, añadiendo ambientación musical y animaciones progresivas en la lectura.
        </p>

        <h3>1. Visualización de páginas y viñetas</h3>
        <p>
          Cada página del manga se muestra como una imagen PDF. Sobre esta, se superponen las viñetas definidas en el editor, que se dibujan en orden con animaciones suaves. El usuario avanza viñeta a viñeta con el botón "Siguiente", lo cual genera una experiencia narrativa controlada.
        </p>

        <h3>2. Transición y navegación</h3>
        <p>
          Cuando el lector ha avanzado todas las viñetas de una página, el botón "Siguiente" lo lleva automáticamente a la siguiente. También puede volver a la anterior con el botón "Anterior".
        </p>

        <h3>3. Reproducción de audio</h3>
        <p>
          Cada página puede tener asociada una pista de audio, definida en el archivo de configuración. El visor incluye controles para:
        </p>
        <ul>
          <li>Reproducir o pausar el audio.</li>
          <li>Controlar el volumen mediante un deslizador.</li>
          <li>Mostrar/ocultar el panel de audio de forma flotante.</li>
        </ul>

        <h3>4. Sincronización</h3>
        <p>
          Las viñetas están asociadas a nodos musicales exportados desde el editor. Durante la lectura, estas viñetas se muestran secuencialmente, creando una experiencia coherente entre el contenido visual y sonoro.
        </p>

        <h3>5. Escalado y adaptación</h3>
        <p>
          Las coordenadas de las viñetas se adaptan al tamaño de pantalla del usuario, permitiendo una visualización correcta sin importar el dispositivo. La conversión de coordenadas asegura que las figuras se dibujen proporcionalmente sobre el PDF original.
        </p>
      </main>
    </div>
  );
};

export default Documentation;
