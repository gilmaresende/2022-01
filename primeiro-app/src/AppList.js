import { useState, useEffect } from 'react'

function AppList() {

  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([
    'Pagar conta de Luz',
    'Estudar Js'
  ])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa')
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

  return (
    <div >
      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa:</label><br />
        <input
          placeholder='Digite uma Tarefa:'
          value={input}
          onChange={(e) => setInput(e.target.value)} /><br />
        <button type='submit'> Registrar</button>
      </form>
      <br />
      <br />
      <ul>
        {tarefas.map(tarefa => <li key={tarefa}>{tarefa}</li>)}
      </ul>
    </div>
  );

  function handleRegister(e) {
    e.preventDefault();
    setTarefas([...tarefas, input])
    setInput('')
  }
}

export default AppList;
