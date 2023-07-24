import { useState } from 'react'

function AppForm() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState(0)

  const [user, setUser] = useState({});


  return (
    <div >
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br />
        <input
          placeholder='Digite seu nome:'
          value={nome}
          onChange={(e) => setNome(e.target.value)} /><br />
        <label>e-mail:</label><br />
        <input
          placeholder='Digite seu e-mail:'
          value={email}
          onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Idade:</label><br />
        <input
          placeholder='Digite seu idade:'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br />
        <button type='submit'> Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <span>Bem Vindo: {user.nome}</span><br />
        <span>Idade: {user.email}</span><br />
        <span>e-mail: {user.idade}</span><br />
      </div>
    </div>
  );

  function handleRegister(e) {
    e.preventDefault();
    setUser({
      nome,
      idade,
      email
    })
  }
}

export default AppForm;
