import { useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { ChildComponents } from 'ka-table/models';
import { DispatchFunc } from 'ka-table/types';

import { StyleTableConfig } from './config/style';
// import {tablePropsInit} from "./config/tablePropsInit"

import { grouped } from './config/grouped';

import * as enu from 'ka-table/enums';

import { fields } from './config/fields';

import { APIdata } from "./config/APIdata";


export interface IKataTable extends ITableProps {
  childComponents?: ChildComponents;
}

export default function KataTable(
  { 
    columnReordering,
    columnResizing,
    columns,
    groupedColumns,
    data,
    detailsRows,
    editableCells,
    editingMode,
    extendedFilter,
    filter,
    filteringMode,
    focused,
    format,
    groups,
    groupsExpanded,
    height,
    loading,
    paging,
    rowKeyField,
    treeGroupKeyField,
    treeGroupsExpanded,
    rowReordering,
    search,
    searchText,
    selectedRows,
    singleAction,
    sort,
    sortingMode,
    validation,
    virtualScrolling,
    width,
}: IKataTable){

  const tablePropsInit: ITableProps = {

    // GRUPAMENTO
    columnResizing: columnResizing,
    groupedColumns: groupedColumns,
  
    // CAMPOS
    columns: columns,
  
    // DADOS
    data: data,
    rowKeyField: rowKeyField,
    sortingMode: sortingMode,
  
    // FILTRO AUTOMATICO DE ACORDO COM O TIPO
    // filteringMode: enu.FilteringMode.FilterRow
  }

  const [tableProps, setTableProps] = useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    setTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
  return (

    <StyleTableConfig>
       <Table
      {...tableProps}
      dispatch={dispatch}
    />
    </StyleTableConfig>
   
  );
};

// Seta values default
// KataTable.defaultProps = {
//   columnResizing: true,
//   groupedColumns: grouped,

//   // CAMPOS
//   columns: fields,

//   // DADOS
//   data: APIdata,
//   rowKeyField: 'id',
//   sortingMode: enu.SortingMode.Single,
// }
