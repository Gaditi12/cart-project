import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/productsActions";
import { deleteCart } from "../redux/actions/productsActions";
export default function Cart() {
  const state = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  // const getProduct = (state) => {
  //   state.pr;
  // };
  const handleProduct = (product) => {
    dispatch(addCart(product));
  };
  const removeProduct = (product) => {
    dispatch(deleteCart(product));
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-4">
            {state.cart.map((product) => {
              return (
                <>
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                  <h3>{product.title}</h3>

                  <p className="lead fw-bold">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button onClick={handleProduct}>
                    <i className="fa fa-plus"></i>
                  </button>
                  <button onClick={removeProduct}>
                    <i className="fa fa-minus"></i>
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
