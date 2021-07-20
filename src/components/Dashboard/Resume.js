import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./dashboard.scss";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "red",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "green",
  },
}))(LinearProgress);

export default function Resume() {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Estados de entrega</h2>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Card className="card">
            <h4>Pedidos recogidos</h4>
            <BorderLinearProgress variant="determinate" value={90} />
            <div className="card__footer">
              <div>5 recojos fuera de hora</div>
              <div>Hasta 8:00 am</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <h4>Pedidos completados</h4>
            <BorderLinearProgress variant="determinate" value={90} />
            <div className="card__footer">
              <div>10 recojos con retraso</div>
              <div>Hasta 7:00 pm</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <h4>Despachos completados</h4>
            <BorderLinearProgress variant="determinate" value={90} />
            <div className="card__footer">
              <div>Hasta 7:00 pm</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
