import React from "react";

class App extends React.Component {
  render() {
    const animais = [
      "Cachorro",
      "Gato",
      "Peixe",
    ]

    return (<div>
      <h1>Lista de Animais:</h1>
      <ul>{
        animais.map((animal, index) => {
          return <li key={index}>{animal}</li>
        })
      }
      </ul>
    </div>)
  }
}
export default App