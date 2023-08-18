import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
    setShowCard(false);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
    setShowCard(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validations
    if (input1.trim().length < 3 || input1.trim() !== input1) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
      return;
    }

    setError('');
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>completa la siguiente encuesta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>tu nombre:</label>
          <input type="text" value={input1} onChange={handleInput1Change} />
        </div>
        <div>
          <label>tu animal favorito:</label>
          <input type="text" value={input2} onChange={handleInput2Change} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;