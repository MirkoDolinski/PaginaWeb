import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boxeadores, setBoxeadores] = useState([]); 
  const [detalles, setDetalles] = useState(null); 

  useEffect(() => {
    const obtenerBoxeadores = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/boxeadores'); 
        const data = await response.json();
        setBoxeadores(data);
      } catch (error) {
        console.error('Error al obtener los boxeadores:', error);
      }
    };
    

    obtenerBoxeadores(); 
  }, []);

  const mostrarDetalles = (boxeador) => {
    setDetalles(boxeador.detalles); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Los mejores boxeadores de Argentina</h1>
      </header>
      <main>
        <ul className="lista-boxeadores">
          {boxeadores.map((boxeador) => (
            <li key={boxeador.id} className="boxeador-item" onClick={() => mostrarDetalles(boxeador)}>
              <h2>{boxeador.nombre}</h2>
              <p><strong>Apodo:</strong> {boxeador.apodo}</p>
              <p><strong>Peso:</strong> {boxeador.peso}</p>
              <p><strong>Campeonatos:</strong> {boxeador.campeonatos}</p>
            </li>
          ))}
        </ul>

        {detalles && (
          <div className="detalles">
            <h3>Detalles:</h3>
            <p>{detalles}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
