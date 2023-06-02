import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/actions/productsActions";
//import { product } from "./Product";
export default function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price } = product;
  const dispatch = useDispatch();
  console.log(product);
  const fetchSelectedProduct = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err : ", err);
      });
    dispatch(selectProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchSelectedProduct(productId);
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="">
            <img src={image} alt={title} />
          </div>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
      )}
    </div>
  );
}
