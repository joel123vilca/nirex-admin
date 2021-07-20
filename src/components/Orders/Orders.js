import React from "react";
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
  createData("Confirm", 237, "Juan Vilca", 37, "Next Day", "Moto", "?"),
  createData("Completo", 262, "Ana vilca", 24, "Next Day", "Moto", "?"),
  createData("Enviado", 305, "andres vilca", 67, "Next Day", "Moto", "?"),
  createData("Enviado", 356, "Carlos", 49, "Next Day", "Moto", "?"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Orders = () => {
  const classes = useStyles();
  return (
    <div style={{ margin: "20px" }}>
      <h2>Pedidos</h2>
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
                    style={{ backgroundColor: "#7fffd4" }}
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
