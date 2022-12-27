import * as React from 'react'
import { grouped } from './config/grouped';

import * as enu from 'ka-table/enums';

import { fields } from './config/fields';

import { APIdata } from "./config/APIdata";


import KataTable from './KataTable'

export default {
  title: "Components/KataTable",
  component: KataTable,
}

export function Default(args) {
  return <KataTable {...args}/>
}

Default.args = {
  columnResizing: true,
  groupedColumns: grouped,

  // CAMPOS
  columns: fields,

  // DADOS
  data: APIdata,
  rowKeyField: 'id',
  sortingMode: enu.SortingMode.Single,
}