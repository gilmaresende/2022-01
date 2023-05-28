import api from "../../services/api";
import { Cantainer, Owner, Loadin, BackButton, IssuesList } from "./style";
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
            api.get(`repos/${nomeRepo}/issues`,
               {
                  params: {
                     state: 'open',
                     per_page: 5
                  }
               }
            )
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
      <IssuesList>
         {issues.map(m => (
            <li key={String(m.id)}>
               <img src={m.user.avatar_url} alt={m.user.login}></img>
               <div>
                  <strong>
                     <a href={m.html_url}>{m.title}</a>
                     {m.labels.map(label => (<span key={String(label.id)}> {label.name} </span>))}
                  </strong>
                  <p>{m.user.login}</p>
               </div>
            </li>
         ))}
      </IssuesList>
   </Cantainer >
}