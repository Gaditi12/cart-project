import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsInfo from "./CardsInfo";
import "./style.css";
export default function Cards() {
  const [data, setData] = useState(CardsInfo);
  // console.log(data);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ${element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center"></div>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
