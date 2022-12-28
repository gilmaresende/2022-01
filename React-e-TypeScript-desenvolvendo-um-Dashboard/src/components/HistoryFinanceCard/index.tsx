import React from "react";
import { Conteiner, Tag } from "./style";

interface IHistoryFinanceCardProps {
   tagColor: string,
   title: string,
   subTitle: string,
   amont: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = (props: IHistoryFinanceCardProps) => {
   return (
      <Conteiner>
         <Tag color={props.tagColor} />
         <div>
            <span>{props.title}</span>
            <small>{props.subTitle}</small>
         </div>
         <h3>{props.amont}</h3>
      </Conteiner >)
}

export default HistoryFinanceCard