import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { mockData } from "../../data/data";

const Principal = (hideHeader) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "Aplicativo",
      headerName: "Aplicatvo",
      flex: 1,
      cellClassName: "name-column--cell",

    },
    {
      field: "Contato Financeiro",
      headerName: "Contato Financeiro",
      headerAlign: "left",
      align: "left",
      width: 150, minWidth: 175, maxWidth: 225,
    },
    {
      field: "Telefone",
      headerName: "Telefone",
      flex: 1,
      cellClassName: "name-column--cell",
      width: 70, minWidth: 70, maxWidth: 110
    },
    {
      field: "Data de Ativação",
      headerName: "Ativação",
      width: 70, minWidth: 70, maxWidth: 110,
      flex: 1,
    },
    {
      field: "CNPJ",
      headerName: "CNPJ",
      flex: 1,
    }, {
      field: "Status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
<div
                      style={{
                        display: "inline-flex",
                        VerticalAlign: "text-bottom",
                        BoxSizing: "inherit",
                        textAlign: "center",
                        AlignItems: "center",
                      }}
                    >
                      <Button
                        sx={{ marginLeft: 2 }}
                        aria-label="Add"
                        edge="end"
                        color="error"
                        variant="outlined"
                      >
                        APAGAR
                      </Button>
                      <Button
                        sx={{ marginLeft: 2 }}
                        aria-label="Add"
                        edge="end"
                        color="secondary"
                        variant="outlined"
                      >
                        EDITAR
                      </Button>
                    </div>
        );
      },
    },
  ];

  let showHeader;
  if (hideHeader.hideHeader){
    showHeader="";
  }else{
    showHeader=<Header title="Principal" subtitle="Resumo de Clientes"  />;
  }
  return (
    <Box m="20px">
      {showHeader}
      <Box
        m={hideHeader.hideHeader ? "0" : "40px 0 0 0"}
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        
        <DataGrid checkboxSelection rows={mockData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Principal;
