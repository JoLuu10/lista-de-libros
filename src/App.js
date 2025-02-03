import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaLibros from './ListaLibros';
import DetallesLibro from './DetallesLibro';

function App() {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const manejarSeleccionLibro = (id) => {
    setLibroSeleccionado(id);
  };

  return (
    <div className="App">
      <h1>Mi Aplicación de Libros</h1>

      {/* Si no hay un libro seleccionado, muestra la lista */}
      {!libroSeleccionado ? (
        <ListaLibros onSeleccionarLibro={manejarSeleccionLibro} />
      ) : (
        <DetallesLibro libroId={libroSeleccionado} />
      )}
    </div>
  );
}

export default App;
