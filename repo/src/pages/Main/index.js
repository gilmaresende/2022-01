
import { useState, useCallback } from 'react'
import { Container, DeleteButton, Form, List, SubmitButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import api from '../../services/api';

export default function Main() {

   const [newRepo, setNewRepo] = useState('')
   const [repositorios, setRepositorios] = useState([])
   const [loading, setLoading] = useState(false)

   const handleSubmit = useCallback((e) => {
      e.preventDefault()

      async function submit() {
         setLoading(true)
         try {
            const response = await api.get(`repos/${newRepo}`)
            const data = { name: response.data.full_name }
            setRepositorios([...repositorios, data])
            setNewRepo('')
         } catch (error) {
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
      <Form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Adicionar Repositorio"
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
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
               <a href=''>
                  <FaBars size={20} />
               </a>
            </li>
         ))}
      </List>
   </Container >
}