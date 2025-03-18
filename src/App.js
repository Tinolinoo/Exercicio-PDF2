import { useState } from 'react';

function Cadastro({ onNomeChange }) {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      onNomeChange(nome); 
      setNome(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Salvar Nome</button>
    </form>
  );
}

export default Cadastro;