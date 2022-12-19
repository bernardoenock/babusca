import styled from "styled-components";


export const StyleTableConfig = styled.div`

div.ka {
  div.ka-table-wrapper {
    /* TABLE */
    table.ka-table {
      /* THEAD */
      thead.ka-thead {
        border: 2px solid #000;
        padding: 10px;
        background-color: #5290FF;
      }
      /* TBODY */
      tbody.ka-tbody {
        border: 2px solid #000;
        padding: 10px;
        background-color: ${props => props.theme.colors.primary.main};
      }
    }

   
  }
}
`


