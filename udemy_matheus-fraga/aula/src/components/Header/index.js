import { Link } from 'react-router-dom'
function Header() {

   return (
      <header>
         <h2>Header</h2><br />
         <Link to="contato">Contatos</Link>
      </header>
   );
}

export default Header;
