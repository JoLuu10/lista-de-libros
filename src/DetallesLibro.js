import React, { useState, useEffect } from 'react';


function DetallesLibro({ libroId }) {
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=harry+potter")
  .then((res) => res.json())
  .then((data) => console.log(data));
    }, [libroId]);

  if (!detalle) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{detalle.titulo}</h2>
      <p>{detalle.descripcion}</p>
    </div>
  );
}

export default DetallesLibro;
