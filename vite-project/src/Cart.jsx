import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./redux/action";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h1 className="text-center  p-2">Shopping Cart - Using Redux</h1>
      <div className="text-center fs-1 m-3">
        <h2>
          <b>Total Cart Amount :</b> ${totalAmount.toFixed(2)}
        </h2>
        <h2>
          {" "}
          <b>Total Cart Quantity :</b> {totalQuantity}
        </h2>
      </div>
      {cart.map((item) => (
        <Card key={item.id} className="m-5 bs">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img src={item.thumbnail} className="img-fluid m-3" />
            </div>
            <div className="col-md-7 d-flex justify-content-center">
              <ul className="fs-1">
                <br />
                <li>
                  <h2>
                    <b>Product Name : {item.title}</b>
                  </h2>
                </li>
                <br />
                <li>
                  <h2>
                    <b> Quantity :</b>{" "}
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>
                    <span> {item.quantity} </span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                  </h2>
                </li>
                <br />
                <li>
                  <h2>
                    <b>Rate :</b> $ {item.price}
                  </h2>
                </li>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  size="large"
                  readOnly
                />
                <br />
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cart;