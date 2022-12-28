import React from "react";
import { Conteiner } from "./style";

interface ChildrenProps {
   children?: React.ReactNode;
}

interface ISelectInputProps {
   options: {
      value: string | number;
      label: string | number;
   }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
   return (
      <Conteiner >
         <select>
            {options.map(op => (<option
               key={op.value}
               value={op.value}>{op.label}</option>))}
         </select>
      </Conteiner >
   )
}

export default SelectInput