import React from "react";
import Drawer from "./Drawer";
import "./Detail.scss";

const Detail = () => {
  return (
    <>
      <div className="detail__header">
        <h2>Detalle del pedido</h2>
        <p className="detail__date">julio, 30</p>
      </div>
      <Drawer />
    </>
  );
};

export default Detail;
