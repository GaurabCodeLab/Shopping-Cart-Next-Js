"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "@/components/NavBar";
import CartSection from "@/components/CartSection";
import CartSummary from "@/components/CartSummary";

function Cart() {
  const [items, setItems] = useState(0);
  const [price, setPrice] = useState(0);
  let cart = useSelector((state) => state.cart);
  useEffect(() => {
    setItems(totalItems());
    setPrice(totalPrice());
  }, [cart]);

  function totalItems() {
    if (cart.length === 0) {
      return 0;
    } else {
      return cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      }, 0);
    }
  }

  function totalPrice() {
    if (cart.length === 0) {
      return 0;
    } else {
      return cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.price;
      }, 0);
    }
  }

  return (
    <>
      <NavBar />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <CartSection cart={cart} />
            <CartSummary price={price} items={items} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;