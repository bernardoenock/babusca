import React, { useContext, useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { DispatchFunc } from 'ka-table/types';

import { StyleTableConfig } from './config/style';
import {tablePropsInit} from "./config/tablePropsInit"

const KataTable: React.FC = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  // useContext()
  return (

    <StyleTableConfig>
      <Table
      {...tableProps}
      dispatch={dispatch}

      // ******ORDENAÇÃO com icon arrow******
      // childComponents={{
      //   sortIcon: {
      //     content: ({ column }) => {
      //       if (column.key) {
      //         const up = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjI1NS45ODksMTY5LjQ3OCAxNjUuNjg1LDMyMC4wMDYgMzQ2LjMxNSwzMjAuMDA2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjYuNjY3LDBIODUuMzMzQzM4LjI3MiwwLDAsMzguMjkzLDAsODUuMzMzdjM0MS4zMzNDMCw0NzMuNzI4LDM4LjI3Miw1MTIsODUuMzMzLDUxMmgzNDEuMzMzDQoJCQlDNDczLjcyOCw1MTIsNTEyLDQ3My43MjgsNTEyLDQyNi42NjdWODUuMzMzQzUxMiwzOC4yOTMsNDczLjcyOCwwLDQyNi42NjcsMHogTTQwMi41NiwzNTEuODUxDQoJCQljLTMuNzk3LDYuNjc3LTEwLjg4LDEwLjgxNi0xOC41NiwxMC44MTZIMTI4Yy03LjY4LDAtMTQuNzg0LTQuMTM5LTE4LjU2LTEwLjgxNmMtMy43OTctNi42NzctMy42OTEtMTQuODkxLDAuMjU2LTIxLjQ4Mw0KCQkJbDEyOC0yMTMuMzMzYzcuNzIzLTEyLjg2NCwyOC44ODUtMTIuODY0LDM2LjU4NywwbDEyOCwyMTMuMzMzQzQwNi4yNTEsMzM2Ljk2LDQwNi4zNTcsMzQ1LjE3Myw0MDIuNTYsMzUxLjg1MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
      //         const down = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDI2LjY2NywwSDg1LjMzM0MzOC4yNzIsMCwwLDM4LjI5MywwLDg1LjMzM3YzNDEuMzMzQzAsNDczLjcyOCwzOC4yNzIsNTEyLDg1LjMzMyw1MTJoMzQxLjMzMw0KCQkJQzQ3My43MjgsNTEyLDUxMiw0NzMuNzI4LDUxMiw0MjYuNjY3Vjg1LjMzM0M1MTIsMzguMjkzLDQ3My43MjgsMCw0MjYuNjY3LDB6IE00MDIuMjgzLDE4MS42NTNsLTEyOCwyMTMuMzMzDQoJCQljLTMuODYxLDYuNDIxLTEwLjc5NSwxMC4zNDctMTguMjgzLDEwLjM0N2MtNy41MDksMC0xNC40NDMtMy45MjUtMTguMzA0LTEwLjM0N2wtMTI4LTIxMy4zMzMNCgkJCWMtMy45NDctNi41OTItNC4wNTMtMTQuODA1LTAuMjc3LTIxLjQ4M2MzLjc5Ny02LjY5OSwxMC44OC0xMC44MzcsMTguNTgxLTEwLjgzN2gyNTZjNy42OCwwLDE0Ljc2Myw0LjEzOSwxOC41NiwxMC44MzcNCgkJCUM0MDYuMzM2LDE2Ni44NDgsNDA2LjI1MSwxNzUuMDYxLDQwMi4yODMsMTgxLjY1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIxNjUuNjg3LDE5Mi4wMTMgMjU1Ljk5MSwzNDIuNTQxIDM0Ni4yOTUsMTkyLjAxMyAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
      //         // Propriedade que ordena a direção dos dados
      //         return <img src={column.sortDirection === SortDirection.Ascend ? up : down} style={{width: 12, position: 'relative', top: 1}} alt='sort direction' />;
      //       }
      //     }
      //   }
      // }}
      />
    </StyleTableConfig>
   
  );
};

export default KataTable;
