import React from "react"


import Button from "../src/components/Button/Button"
import DataTable from "../src/components/DataTable/DataTable"
import KataTable from "../src/components/KataTable/KataTable"


import ThemeProvider from "../src/theme/ThemeProvider"

export default function HomeScreen() {
    return (
      <ThemeProvider>
        <div>
            <h1>Babusca - Design System</h1>
            {/* variant='accent' */}
            <Button variant='primary'>
                Apenas Um Botão
            </Button>
        </div>
        <br />
        <br />
        <div>
          {/* <DataTable/> */}
          <KataTable/>
        </div>
      </ThemeProvider>
        
    )
}
