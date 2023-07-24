import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Produto() {

   const { id } = useParams()

   return (
      <div>
         <h2>Produto : {id}</h2><br />
      </div>
   );
}

export default Produto;
