import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridColumns
} from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

import * as S from "./style"

import {rows} from "./mookData"

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ bgcolor: '#035' }}>
      <GridToolbarColumnsButton sx={{ color: '#000' }} />
      {/* <GridToolbarFilterButton /> */}
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}





function testandoColumn() {
  return (
    <>
      <S.ContainerTitleColumns>
          <p>Titulo 01</p> 
        

          <p>Titulo 02</p>  
          <p>Titulo 03</p>
      </S.ContainerTitleColumns>
      <S.ContainerTitleColumns>
        <p>Titulo 01</p> 
      

        <p>Titulo 02</p>  
        <p>Titulo 03</p>
      </S.ContainerTitleColumns>
    </>
    
        
     
      
    
        
  )
}

export default function DataTable() {
  const columns: GridColumns = [
    {
      field: 'date',
      // headerAlign: 'center',
      // minWidth: 140,
      flex: 1,
      // renderHeader: testandoColumn,
      
    },
    {
      field: 'min_c',
      flex: 1,
    },
    {
      field: 'max_c',
      flex: 1,
    },
    {
      field: 'hour_hot',
      flex: 1,
    },
    {
      field: 'hour_could',
      flex: 1,
    },
    {
      field: 'icon_morning',
      flex: 1,
    },
    {
      field: 'icon_afternoon',
      flex: 1,
    },
    {
      field: 'icon_night',
      flex: 1,
    },
    {
      field: 'precipitacao',
      flex: 1,
    },
    {
      field: 'probabilidade',
      flex: 1,
    },
    {
      field: 'intensidade',
      flex: 1,
    },
    {
      field: 'direcao',
      flex: 1,
    },
    {
      field: 'min',
      flex: 1,
    },
    {
      field: 'max',
      flex: 1,
    },
    {
      field: 'distancia',
      flex: 1,
    },
    {
      field: 'hPa',
      flex: 1,
    },
  ];


  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        // {...data}
        columns={columns}
        rows={rows}
        rowHeight={20}
        headerHeight={40}
        autoPageSize
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
