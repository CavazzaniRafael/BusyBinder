import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./HamburguerIcon.module.css";
import { cartActions } from "../../store/cart-slice";

const Hamburguer = () => {
  const [open, setOpen] = useState(false);
  const showMenu = useSelector((state) => state.cart.menuIsVisible);
  const dispatch = useDispatch();

  const handleHamburguerClick = () => {
    dispatch(cartActions.toggleMenu());
  };
  return (
    <div>
      <div
        onClick={handleHamburguerClick}
        className={`${classes.Hamburguer} ${showMenu ? classes.open : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburguer;
