import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/actions/productsActions";
import { product } from "./Product";
export default function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);
  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err : ", err);
      });
    dispatch(selectProducts(response.data));
  };
  useEffect(() => {
    fetchSelectedProduct();
  }, [productId]);
  return (
    <div>
      <h1>product details</h1>
    </div>
  );
}
