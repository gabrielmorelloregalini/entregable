
import React from 'react';

function Card({ input1, input2 }) {
  return (
    <div>
      <h2>Return</h2>
      <h4>Gracias por completar!!!. Tu informacion es la siguiente:</h4>
      <p>nombre: {input1}</p>
      <p>animal favorito: {input2}</p>
    </div>
  );
}


export default Card;