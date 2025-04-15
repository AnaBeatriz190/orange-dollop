import React, { useState } from 'react';

const ComponenteInterativo = () => {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  return (
    <div>
      <input value={texto} onChange={e => setTexto(e.target.value)} />
      <button onClick={() => { setLista([...lista, texto]); setTexto(''); }}>Adicionar</button>
      <button onClick={() => setLista([])}>Resetar Lista</button> {}
      <ul>{lista.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}

export default ComponenteInterativo;
