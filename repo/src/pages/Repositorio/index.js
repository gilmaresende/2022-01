import api from "../../services/api";
import { Cantainer, Owner, Loadin, BackButton } from "./style";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa'


export default function Repositorio({ match }) {

   const [repo, setRepo] = useState({})
   const [issues, setUssues] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      async function load() {
         setLoading(true)
         const nomeRepo = decodeURIComponent(match.params.repositorio)

         const [repositorioData, issuesData] = await Promise.all([
            api.get(`repos/${nomeRepo}`),
            api.get(`repos/${nomeRepo}/issues`)
         ])
         setRepo(repositorioData.data)
         setUssues(issuesData.data)
         setLoading(false)
      }

      load()
   }, [])

   if (loading) {
      return (<Loadin>
         <h1>Carregando...</h1>
      </Loadin>)
   }
   return <Cantainer>
      <BackButton to="/">
         <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
         <img src={repo.owner.avatar_url} alt={repo.owner.log} />
         <h1>{repo.name}</h1>
         <p>{repo.description}</p>
      </Owner>
   </Cantainer>
}