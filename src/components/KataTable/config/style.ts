import styled from "styled-components";


export const StyleTableConfig = styled.div`

div.ka {

  background-color: ${props => props.theme.colors.primary.main};
  border-radius: 20px;
  div.ka-table-wrapper {
    /* TABLE */
    padding: 10px 2px 30px 2px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    table.ka-table {
      /* THEAD */
      
      overflow: hidden;
      border: 4px solid ${props => props.theme.colors.primary.main};
      /* border-collapse: collapse; */
      
      thead.ka-thead {
        /* border: 2px solid #000; */
        background-color: ${props => props.theme.colors.primary.main};
        color: #fff;

        th.ka-thead-cell {
          /* padding: 0.5rem; */
          /* border: 1px solid #000; */
        }
        tr:nth-child(even) {
          background-color: #fff;
          color: #000 ;
        }
      }
      
      td.ka-cell {
        padding: 1rem;
        text-align: center;
        border: 1px solid #000;
      }
      /* TBODY */
      tbody.ka-tbody {
        background-color: #E2F5FF;
        align-items: center;
        border: 1px solid red;
        tr:nth-child(even) {
          background-color: #fff;  
        }
      }
      tfoot.ka-tfoot{
        background-color: #1E80C7;
      }
    }
  }
}
`


