import React from "react";
import Conteiner from "./style";

interface ChildrenProps {
   children?: React.ReactNode;
}

const Content: React.FC<ChildrenProps> = ({ children }) => {
   return (
      <>
         <Conteiner >
            {children}
         </Conteiner >
      </>)
}

export default Content