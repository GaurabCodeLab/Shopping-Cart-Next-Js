"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, addToCart } from '@/redux/productSlice';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setAllProducts(products);
    }
  }, [products]);

  return (
    <>
    <NavBar />
      {
        allProducts.length ? <MDBRow className="container my-5">
        {allProducts.map((value) => (
          <MDBCol key={value._id}>
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage src={value.img} fluid alt="..." />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{value.title}</MDBCardTitle>
                <MDBCardText>{value.price}</MDBCardText>
                <MDBBtn href="#" onClick={() => dispatch(addToCart(value))}>
                  ADD TO CART
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow> : <h1 className="text-center pt-3 text-primary">Loading products...</h1>
      }
    </>
  );
}
