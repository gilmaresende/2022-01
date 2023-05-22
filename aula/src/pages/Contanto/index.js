import { Link } from 'react-router-dom'

function Contanto() {

   return (
      <div>
         <h2>Contatos</h2>
         <Link to="/sobre">Sobre</Link><br />
         <Link to="/">Home</Link>
      </div>
   );
}

export default Contanto;
