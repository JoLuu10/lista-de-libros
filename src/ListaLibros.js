import React, { useEffect, useState } from 'react';

function ListaLibros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://openlibrary.org/search.json?q=harry+potter')
        .then((res) => res.json())
        .then((data) => console.log(data));
    }, []);

  return (
    <div>
      <h1>Lista de Libros</h1>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaLibros;
