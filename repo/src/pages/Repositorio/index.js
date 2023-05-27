import api from "../../services/api";
import { Cantainer } from "./style";
import { useEffect, useState } from "react";

export default function Repositorio({ match }) {

   const [repositorio, setRepositorio] = useState({})
   const [issues, setUssues] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      async function load() {
         setLoading(true)
         const nomeRepo = decodeURIComponent(match.params.repositorio)

         const [repositorioData, issuesData] = await Promise.all([
            api.get(`repos/${nomeRepo}`),
            api.get(`repos/${nomeRepo}/issues`)
         ])

         setRepositorio(repositorioData.data)
         setUssues(issuesData.data)
         setLoading(false)
      }

      load()
   }, [])

   return <Cantainer>dev</Cantainer>
}