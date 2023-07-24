import './index.css'
import { BemVindo, Container, Head, Titulo } from './style';

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Style</Titulo>
      </Head>
      <BemVindo cor="0f0" tm="50">Bem vindo ao Sistema</BemVindo>
    </Container>
  );
}
export default App;


/*


 <div className="container" >
      <header className="header">
        <a className="titulo">Projeto Style</a>
      </header>
      <h1>Bem vindo ao Sistema</h1>
    </div>

*/