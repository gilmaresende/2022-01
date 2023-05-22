import { useState } from 'react'

function App() {

  const [aluno, setAluno] = useState('Sujeito Dev')
  return (
    <div >
      <h1>Component App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangerName()}>Mudar Nome</button>
    </div>
  );

  function handleChangerName() {
    setAluno("Dev Super")
  }
}

export default App;
