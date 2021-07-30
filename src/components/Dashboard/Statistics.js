import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statisticsSelector } from "../../selectors/StatisticsSelectors";
import * as statisticsActions from "../../actions/StatisticsActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import "./dashboard.scss";
import { DriveEtaSharp } from "@material-ui/icons";

function CircularProgressWithLabel(props) {
  return (
    <Box
      position="relative"
      display="inline-flex"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        marginLeft: "-60px",
        marginBottom: "30px",
      }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ width: 100, color: "green", primaryColor: "gray" }}
      />
      <Box
        top={5}
        left={50}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="fab__title">{`${Math.round(props.value)}%`}</div>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Statistics() {
  const dispatch = useDispatch();
  const example = useSelector(statisticsSelector);

  useEffect(() => {
    dispatch(statisticsActions.getStatistics());
  }, [dispatch]);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ margin: "20px" }}>
      <div className="statistics__header">
        <h2>Estadisticas de los pedidos</h2>
        <p className="statistics__date">Lunes, 10 de {example}</p>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <div className="card">
            <div className="card__content">
              <h4>Pedidos Pendientes</h4>
              <hr className="divider"></hr>
              {/* <div className="fab">
                <h2 className="fab__title">25</h2>
              </div> */}
              <CircularProgressWithLabel value={90}></CircularProgressWithLabel>
              <p>25 de 100</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="card__content">
              <h4>2dos Intentos Pendientes</h4>
              <hr className="divider"></hr>

              <div className="fab">
                <h2 className="fab__title">90</h2>
              </div>
              <p>90 de 100</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="card__content">
              <h4>Despachos Pendientes</h4>
              <hr className="divider"></hr>
              <div className="fab">
                <h2 className="fab__title">90</h2>
              </div>
              <p>90 de 100</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="card__content">
              <h4>Devoluciones pendientes</h4>
              <hr className="divider"></hr>
              <div className="fab">
                <h2 className="fab__title">90</h2>
              </div>
              <p>90 de 100</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
