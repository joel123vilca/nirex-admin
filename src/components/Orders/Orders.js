import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import "./Order.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";

const top100Films = [
  { title: "Pediente", year: 1994 },
  { title: "Confirmado", year: 1972 },
  { title: "Completado", year: 1974 },
];
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.white,
    },
  },
}))(TableRow);

function createData(state, order, client, orders, service, vehicle, partner) {
  return { state, order, client, orders, service, vehicle, partner };
}

const rows = [
  createData("Pendiente", 159, "Carlos vilca", 24, "Next Day", "Moto", "?"),
  createData("En ruta", 237, "Juan Vilca", 37, "Next Day", "Moto", "?"),
  createData("Asignado", 262, "Ana vilca", 24, "Next Day", "Moto", "?"),
  createData("Rechazado", 305, "andres vilca", 67, "Next Day", "Moto", "?"),
  createData("Finalizado", 356, "Carlos", 49, "Next Day", "Moto", "?"),
  createData("En ruta", 237, "Juan Vilca", 37, "Next Day", "Moto", "?"),
  createData("Asignado", 262, "Ana vilca", 24, "Next Day", "Moto", "?"),
  createData("Rechazado", 305, "andres vilca", 67, "Next Day", "Moto", "?"),
  createData("Finalizado", 356, "Carlos", 49, "Next Day", "Moto", "?"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Orders = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const status = {
    Pediente: "#C4C4C4",
    "En ruta": "#00F8F8",
    Asignado: "#1976d2",
    Rechazado: "red",
    Finalizado: "green",
  };
  const [age, setAge] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <div className="header__titles">
        <h2>Lista de Pedidos</h2>
        <p className="order__date">Sabado, 28 julio</p>
      </div>
      <div className="header">
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          style={{ width: 150 }}
          renderInput={(params) => (
            <TextField {...params} label="Estados" variant="outlined" />
          )}
        />
        <TextField
          id="date"
          label="Fecha"
          type="date"
          variant="outlined"
          size="small"
          defaultValue="2017-05-24"
          className="header__picker"
          style={{ width: 150, marginLeft: 20 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          size="small"
          style={{ width: 220, marginLeft: 20 }}
        />
        <Button
          variant="contained"
          size="small"
          style={{
            backgroundColor: "#084c71",
            color: "white",
            marginLeft: -10,
          }}
        >
          Buscar
        </Button>
        {/* <div className="export__btn">
            <Button variant="contained" size="small">
              Exportar
            </Button>
          </div> */}
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell align="right">Orden</StyledTableCell>
              <StyledTableCell align="right">Cliente</StyledTableCell>
              <StyledTableCell align="right">Pedidos</StyledTableCell>
              <StyledTableCell align="right">Servicio</StyledTableCell>
              <StyledTableCell align="right">|</StyledTableCell>
              <StyledTableCell align="right">Vehiculo</StyledTableCell>
              <StyledTableCell align="right">Mensajero</StyledTableCell>
              <StyledTableCell align="right">Detalle</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <Chip
                    label={row.state}
                    style={{ backgroundColor: status[row.state], width: 100 }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.order}</StyledTableCell>
                <StyledTableCell align="right">{row.client}</StyledTableCell>
                <StyledTableCell align="right">{row.orders}</StyledTableCell>
                <StyledTableCell align="right">{row.services}</StyledTableCell>
                <StyledTableCell align="right">|</StyledTableCell>
                <StyledTableCell align="right">{row.vehicle}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.partner}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <ArrowRightIcon />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Orders;
