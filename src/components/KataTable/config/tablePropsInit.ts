import { grouped } from './grouped';
import { ITableProps } from "ka-table";
import * as enu from 'ka-table/enums';

import { fields } from './fields';

import { APIdata } from "./APIdata";


export const tablePropsInit: ITableProps = {

  // GRUPAMENTO
  columnResizing: true,
  groupedColumns: grouped,

  // CAMPOS
  columns: fields,

  // DADOS
  data: APIdata,
  rowKeyField: 'id',
  sortingMode: enu.SortingMode.Single,

  // FILTRO AUTOMATICO DE ACORDO COM O TIPO
  // filteringMode: enu.FilteringMode.FilterRow
}
