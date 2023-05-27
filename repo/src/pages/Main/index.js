
import { useState, useCallback, useEffect } from 'react'
import { Container, DeleteButton, Form, List, SubmitButton } from "./styles";
import { Link } from 'react-router-dom'
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import api from '../../services/api';

export default function Main() {

   const [newRepo, setNewRepo] = useState('')
   const [repositorios, setRepositorios] = useState([])
   const [loading, setLoading] = useState(false)
   const [alert, setAlert] = useState(null)

   useEffect(() => {
      const repoStorage = localStorage.getItem('repos');
      if (repoStorage) {
         setRepositorios(JSON.parse(repoStorage))
      }
   }, [])


   // save changes
   useEffect(() => {
      localStorage.setItem('repos', JSON.stringify(repositorios))
   }, [repositorios])

   const handleSubmit = useCallback((e) => {
      e.preventDefault()

      async function submit() {
         setLoading(true)
         setAlert(null)
         try {

            if (newRepo === '') {
               throw new Error('Repositório deve ser informado!')
            } else if (repositorios.find(repo => repo.name === newRepo)) {
               throw new Error('Repositório já esta na lista!')
            }

            const response = await api.get(`repos/${newRepo}`)
            const data = { name: response.data.full_name }
            setRepositorios([...repositorios, data])
            setNewRepo('')
         } catch (error) {
            setAlert(error)
            console.log(error)
         } finally {
            setLoading(false)
         }
      }
      submit()
   }, [newRepo, repositorios])

   const handleDelete = useCallback((repo) => {
      const find = repositorios.filter(r => r.name !== repo)
      setRepositorios(find)
   }, [])

   return <Container>
      <h1>
         <FaGithub size={25} />
         Meus Repositorios
      </h1>
      <Form onSubmit={handleSubmit} error={alert}>
         <input
            type="text"
            placeholder="Adicionar Repositorio"
            value={newRepo}
            onChange={(e) => {
               setNewRepo(e.target.value)
               setAlert(null)
            }}
         />
         <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
               <FaSpinner color="#fff" size={14}></FaSpinner>) : (
               <FaPlus color="#fff" size={14} ></FaPlus>
            )}
         </SubmitButton>


      </Form>
      <List>
         {repositorios.map(rep => (
            <li key={rep.name}>
               <span>
                  <DeleteButton onClick={() => { handleDelete(rep.name) }}>
                     <FaTrash size={14} />
                  </DeleteButton>
                  {rep.name}</span>
               <Link to={`/repositorio/${encodeURIComponent(rep.name)}`} >
                  <FaBars size={20} />
               </Link>
            </li>
         ))}
      </List>
   </Container >
}