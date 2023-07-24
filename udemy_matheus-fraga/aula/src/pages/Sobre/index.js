import { Link } from 'react-router-dom'

function Sobre() {

   return (
      <div>
         <h2>Sobre o curso JS...</h2>
         <Link to="/">Home</Link><br />
         <Link to="/contato">Contato</Link><br />
      </div>
   );
}

export default Sobre;
