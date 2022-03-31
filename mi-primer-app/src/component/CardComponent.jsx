import { useState } from "react";

const CardComponent = ({title, img, agregarCarrito}) => {

  return (
    <div className="card col-4">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary" onClick={(event) => {agregarCarrito(event, 'Dave')}}>Comprar</button>
      </div>
    </div>
  );
};
export default CardComponent;
