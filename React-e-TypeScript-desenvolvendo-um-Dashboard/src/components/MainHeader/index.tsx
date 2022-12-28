import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Toggle } from "../Toggle";
import { Conteiner, Profile, Welcome, UserName } from "./style";

const MainHeader: React.FC = () => {

   const emoji = useMemo(() => {
      const indice = Math.floor(Math.random() * emojis.length)
      return emojis[indice]
   }, [])
   return (
      <>
         <Conteiner >
            <Toggle />
            <Profile>
               <Welcome>Olá, {emoji}</Welcome>
               <UserName>Gilmar Fabiano</UserName>
            </Profile>
         </Conteiner >
      </>)
}

export default MainHeader