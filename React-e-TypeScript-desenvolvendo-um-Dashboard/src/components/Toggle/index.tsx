import React, { useState } from 'react'
import { Conteiner, ToggleLabel, ToggleSelector } from './style'

export const Toggle: React.FC = () => {
   const [online, setOnline] = useState(false);
   return <Conteiner>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
         checked={online}
         uncheckedIcon={false}
         checkedIcon={false}
         onChange={() => {
            setOnline(!online)
            console.log("mudou")
         }} />
      <ToggleLabel>Dark</ToggleLabel>
   </Conteiner>
}


