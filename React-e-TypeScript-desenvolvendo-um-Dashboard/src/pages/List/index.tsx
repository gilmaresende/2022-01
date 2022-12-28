import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./style";
import { useParams } from "react-router-dom";

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'


interface IRouteParams {
   match: {
      params: {
         type: string
      }
   }
}

interface IData {
   description: string,
   amountFomarted: string,
   frequency: string,
   dataFormated: string,
   tagColor: string
}

const List: React.FC = () => {

   const [data, setData] = useState<IData[]>([])

   let params = useParams();

   const title = params.type === 'entry-balance' ? 'Entrada' : 'Saída'

   const lineColor = params.type === 'entry-balance' ? '#F7931B' : '#E44C4E'

   const listData = params.type === 'entry-balance' ? gains : expenses

   useEffect(() => {
      const res = listData.map(i => {
         return {
            description: i.description,
            amountFomarted: i.amount,
            frequency: i.frequency,
            dataFormated: i.date,
            tagColor: i.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E'
         }
      })
      setData(res)
   }, [])



   const months = [
      { value: 7, label: "Julho" },
      { value: 8, label: "Agosto" },
      { value: 9, label: "Setembro" },
      { value: 10, label: "Outubro" },
      { value: 11, label: "Novembro" },
      { value: 12, label: "Dezembro" },
   ]

   const years = [
      { value: 2018, label: 2018 },
      { value: 2019, label: 2019 },
      { value: 2020, label: 2020 },
      { value: 2021, label: 2021 },
      { value: 2022, label: 2022 },
      { value: 2023, label: 2023 },
   ]

   return (
      <Container>
         <ContentHeader
            title={title}
            lineColor={lineColor}
         >
            <SelectInput options={months} />
            <SelectInput options={years} />
         </ContentHeader>

         <Filters>
            <button
               type="button"
               className="tag-filter tag-filter-recorrent"
            >Recorrentes</button>
            <button
               type="button"
               className="tag-filter tag-filter-event"
            >Eventuais</button>
         </Filters>

         <Content>
            {data.map((i, index) => (<HistoryFinanceCard
               key={index}
               tagColor={i.tagColor}
               title={i.description}
               subTitle={i.dataFormated}
               amont={i.amountFomarted} />))}
         </Content>
      </Container>)
}

export default List
