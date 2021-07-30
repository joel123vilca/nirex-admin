import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./dashboard.scss";

export default function Resume() {
  const valor = "50%";
  const valor2 = 20;
  return (
    <div style={{ margin: "20px" }}>
      <div className="resume">
        <h2>Linea de tiempo</h2>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Card className="resume__card">
            <h4>Pedidos recogidos</h4>
            <p style={{ marginLeft: valor }}>| {valor}</p>
            <div className="progress">
              <div
                role="progressbar"
                style={{
                  width: valor,
                  color: "green",
                  backgroundColor: "green",
                }}
              >
                green
              </div>
              <div
                role="progressbar"
                style={{
                  width: "10%",
                  color: "orange",
                  backgroundColor: "orange",
                }}
              >
                orange
              </div>
              <div
                role="progressbar"
                style={{
                  width: "40%",
                  backgroundColor: "gray",
                  color: "gray",
                }}
              >
                gray
              </div>
            </div>
            <p style={{ marginLeft: valor, marginTop: "3px" }}>
              <AccessTimeIcon />
              <span style={{ marginTop: "3px", position: "absolute" }}>
                8:00 pm
              </span>
            </p>
            <div className="card__footer">
              <div> Total 40</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="resume__card">
            <h4>Pedidos completados</h4>
            <p style={{ marginLeft: valor }}>| {valor}</p>
            <div className="progress">
              <div
                role="progressbar"
                style={{
                  width: valor,
                  color: "green",
                  backgroundColor: "green",
                }}
              >
                green
              </div>
              <div
                role="progressbar"
                style={{
                  width: "10%",
                  color: "orange",
                  backgroundColor: "orange",
                }}
              >
                orange
              </div>
              <div
                role="progressbar"
                style={{
                  width: "40%",
                  backgroundColor: "gray",
                  color: "gray",
                }}
              >
                gray
              </div>
            </div>
            <div className="card__footer">
              <div> Total 40</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="resume__card">
            <h4>Despachos completados</h4>
            <p style={{ marginLeft: valor }}>| {valor}</p>
            <div className="progress">
              <div
                role="progressbar"
                style={{
                  width: valor,
                  color: "green",
                  backgroundColor: "green",
                }}
              >
                green
              </div>
              <div
                role="progressbar"
                style={{
                  width: "10%",
                  color: "orange",
                  backgroundColor: "orange",
                }}
              >
                orange
              </div>
              <div
                role="progressbar"
                style={{
                  width: "40%",
                  backgroundColor: "gray",
                  color: "gray",
                }}
              >
                gray
              </div>
            </div>
            <p style={{ marginLeft: valor, marginTop: "3px" }}>
              <AccessTimeIcon />
              <span style={{ marginTop: "3px", position: "absolute" }}>
                8:00 pm
              </span>
            </p>
            <div className="card__footer">
              <div> Total 40</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
