import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Product() {
  const item = useSelector((state) => state.allProducts.products);
  const renderList = item.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-lg-4">
        <Link to={`/product/${id}`}>
          <div style={{ width: "18rem" }} className="card card-box ">
            <div className=" col-md-4 ">
              <img src={image} alt={title} className="card-img-top image" />
            </div>
            <div className="card-body mt-3">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}
//style={{ width: "18rem" }} className=" mx-2 mt-4 "
