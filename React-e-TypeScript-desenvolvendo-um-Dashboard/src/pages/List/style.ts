import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.div``

export const Filters = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 30px;

   .tag-filter{
      font-size: 18px;
      font-weight: 500;
      background:none;
      color:${props => props.theme.colors.white};
      margin: 0 10px;
      transition: opacity .3s;
      
      &:hover{
         opacity:.7;
      }

   }

   .tag-filter-recorrent{
      &::after{
         content: '';
         display: block;
         width: 55px;
         border-bottom: 10px solid ${props => props.theme.colors.warning};
      }
   }

   .tag-filter-event{
      &::after{
         content: '';
         display: block;
         width: 55px;
         border-bottom: 10px solid ${props => props.theme.colors.sucess};
      }
   }
`

