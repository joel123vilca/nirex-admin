import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statisticsSelector } from "../../selectors/StatisticsSelectors";
import * as statisticsActions from "../../actions/StatisticsActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import { Doughnut } from "react-chartjs-2";
import "./dashboard.scss";

export default function Statistics() {
  const dispatch = useDispatch();
  const example = useSelector(statisticsSelector);
  const data = {
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["rgb(54, 162, 235)", "#DCDCDC"],
        hoverOffset: 2,
      },
    ],
  };

  useEffect(() => {
    dispatch(statisticsActions.getStatistics());
  }, [dispatch]);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ margin: "20px" }}>
      <h2>Estadisticas de los pedidos</h2>
      <p>Lunes, 10 de {example}</p>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Card className="card">
            <div className="card__content">
              <h4>Pedidos Pendientes</h4>
              <Divider
                variant="middle"
                style={{ color: "black", backgroundColor: "black" }}
              />
              <Doughnut data={data} />
              <p>90 de 100</p>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card">
            <div className="card__content">
              <h4>2dos Intentos Pendientes</h4>
              <Divider />
              <Fab aria-label="save">
                <h2 className="fab__title">90</h2>
              </Fab>
              <p>90 de 100</p>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card">
            <div className="card__content">
              <h4>Despachos Pendientes</h4>
              <Divider />
              <Fab aria-label="save">
                <h2 className="fab__title">90</h2>
              </Fab>
              <p>90 de 100</p>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card">
            <div className="card__content">
              <h4>Devoluciones pendientes</h4>
              <Divider variant="middle" />

              <Fab aria-label="save">
                <h2 className="fab__title">90</h2>
              </Fab>
              <p>90 de 100</p>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
