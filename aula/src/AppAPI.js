//https://sujeitoprogramador.com/rn-api/?api=posts

import React, { useEffect, useState } from 'react'
import './style.css'
function App() {

  const [nutri, setNutri] = useState([])

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url).then((r) => r.json()).then((json) => {
        console.log(json)
        setNutri(json)
      })
    }
    loadApi();

  }, [])

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map(m => {
        return (
          <article key={m.id} className='post'>
            <strong className='title'>{m.title}</strong>
            <img src={m.capa} alt={m.tile} className='capa' />
            <p className='subtitulo'>{m.subtitulo}</p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
