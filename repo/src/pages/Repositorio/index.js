import api from "../../services/api";
import { Cantainer, Owner, Loadin, BackButton, IssuesList, PageActions, Filter } from "./style";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa'


export default function Repositorio({ match }) {

   const [repo, setRepo] = useState({})
   const [issues, setUssues] = useState([])
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [filterState, setFilterState] = useState('all')

   useEffect(() => {
      async function load() {
         setLoading(true)
         const nomeRepo = decodeURIComponent(match.params.repositorio)

         const [repositorioData, issuesData] = await Promise.all([
            api.get(`repos/${nomeRepo}`),
            api.get(`repos/${nomeRepo}/issues`,
               {
                  params: {
                     state: filterState,
                     per_page: 5,

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

   useEffect(() => {
      async function loadIssue() {
         setLoading(true)
         const nomeRepo = decodeURIComponent(match.params.repositorio)
         const reposnse = await api.get(`repos/${nomeRepo}/issues`,
            {
               params: {
                  page,
                  per_page: 5,
               }
            }
         )
         setUssues(reposnse.data)
         setLoading(false)
      }

      loadIssue()
   }, [page])

   function handlePage(action) {
      setPage(action === 'back' ? page - 1 : page + 1)
   }

   useEffect(() => {
      async function filterAply() {
         setLoading(true)
         const nomeRepo = decodeURIComponent(match.params.repositorio)
         const reposnse = await api.get(`repos/${nomeRepo}/issues`,
            {
               params: {
                  state: filterState,
                  per_page: 5,
               }
            }
         )
         setUssues(reposnse.data)
         setLoading(false)
      }

      filterAply()
   }, [filterState])

   function handleFilter(stateParan) {
      setFilterState(stateParan)
   }

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
         <Filter>
            <div><input checked={filterState === 'all'} selected={true} type="radio" name="state" onChange={() => handleFilter('all')} /><label>All</label></div>
            <div><input checked={filterState === 'open'} type="radio" name="state" onChange={() => handleFilter('open')} /><label>Open</label></div>
            <div><input checked={filterState === 'closed'} type="radio" name="state" onChange={() => handleFilter('closed')} /><label>Close</label></div>
         </Filter>
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
      <PageActions>
         <button
            type="button"
            onClick={() => handlePage('back')}
            disabled={page < 2}
         >Voltar</button>
         <button type="button" onClick={() => handlePage('next')}>Proxima</button>
      </PageActions>
   </Cantainer >
}