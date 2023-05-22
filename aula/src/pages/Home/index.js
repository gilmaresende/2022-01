import { Link } from 'react-router-dom'
function Home() {

   return (
      <div>
         Bem vindo ao Home<br />
         <Link to="/sobre">Sobre</Link><br />
         <Link to="/contato">Contato</Link><br />
      </div>
   );
}

export default Home;
