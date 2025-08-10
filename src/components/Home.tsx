import React from 'react';
import './Home.css';
import { productos } from '../productos';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          {productos.map((producto) => (
            <div className="product-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3 className="product-name">{producto.nombre}</h3>
              <p className="product-description">{producto.descripcion}</p>
              <p className="product-price">${producto.precio.toFixed(2)}</p>
              <button className="product-button">Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
