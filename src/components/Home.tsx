import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="home-left">
          <h1>¿Qué es Mangify?</h1>
          <p>
            Revolucionar la experiencia de lectura de mangas en un viaje inmersivo, donde la música ambiental se integra armónicamente con la narrativa visual para potenciar la conexión emocional de los lectores. Aspiramos a convertirnos en el estándar para plataformas de mangas globales, ofreciendo una ventaja competitiva frente a otras plataformas, redefiniendo la experiencia de lectura del manga.

          </p>
        </div>

        <div className="home-right">
          <div className="image-panel">
            <a href="#feature-music">
              <img src="/src/assets/music.png" alt="Música ambiental" className="rotated rotated-1" />
            </a>
            <a href="#feature-spoiler">
              <img src="/src/assets/spoiler.png" alt="Bloqueo de spoilers" className="rotated rotated-2" />
            </a>
            <a href="#feature-ui">
              <img src="/src/assets/ui.png" alt="Personalización" className="rotated rotated-3" />
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-detail">
          <div className="feature-text">
            <div className="bubble-container">
              <p className="bubble-text">
                <h2>Música Ambiental</h2>
                Música ambiental que se adapta al tono emocional de cada escena, intensificando tu experiencia de lectura.
              </p>
            </div>
          </div>
          <div className="feature-image">
            <img src="/src/assets/music.png" alt="Música contextual" />
          </div>
        </div>

  <div className="feature-detail reverse">
    <div className="feature-text">
      <div className="bubble-container reverse">
        <p className="bubble-text reverse">
          <h2 >Bloqueo de Spoilers</h2>
          Bloqueo de viñetas futuras para evitar spoilers no deseados, permitiéndote disfrutar de la historia sin interrupciones.
      </p>
    </div>
    </div>
    <div className="feature-image">
      <img src="/src/assets/spoiler.png" alt="Bloqueo de spoilers" />
    </div>
  </div>

  <div className="feature-detail">
          <div className="feature-text">
            <div className="bubble-container">
              <p className="bubble-text">
                <h2>Interfaz personalizable</h2>
                Herramienta interactiva para editores de manga digital que permite sincronizar viñetas con música y aplicar censura temporal. Facilita la organización visual de eventos clave mediante una línea de tiempo editable.
              </p>
            </div>
          </div>
          <div className="feature-image">
            <img src="/src/assets/ui.png" alt="Música contextual" />
          </div>
        </div>
</section>

    </>
  );
};

export default Home;
