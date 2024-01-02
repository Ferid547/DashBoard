import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const DataTable = ({ columns, rows, url }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: 400, height: 0, width: "100%" }}>
      <DataGrid
        rows={rows || []}
        columns={columns || []}
        idField="id"
        pagination
        pageSize={5}
        onCellClick={(params) => {
          if (url) {
            navigate(`${url}/${params.id}`);
          }
        }}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;