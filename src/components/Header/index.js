import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const history = useHistory();

  const routes = {
    dashboard: "/",
    orders: "/pedidos",
    realTime: "/real-time",
    partners: "/mensajeros",
    clientes: "/clientes",
  };
  const historyRoute = (route) => () => {
    history.push(routes[route]);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Button
            color="inherit"
            onClick={historyRoute("dashboard")}
            className="button"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            onClick={historyRoute("orders")}
            className="button"
          >
            Pedidos
          </Button>
          <Button
            color="inherit"
            onClick={historyRoute("realTime")}
            className="button"
          >
            Tiempo Real
          </Button>
          <Button
            color="inherit"
            onClick={historyRoute("partners")}
            className="button"
          >
            Mensajeros
          </Button>
          <Button
            color="inherit"
            onClick={historyRoute("clientes")}
            className="button"
          >
            Clientes
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
