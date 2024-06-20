import { gridClasses } from "@mui/material"
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridClasses } from "@mui/x-data-grid"

function CustomToolbar(){
  return(
    <GridToolbarContainer
      className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default CustomToolbar