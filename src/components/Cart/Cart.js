import React from "react";
import classes from "./Cart.module.css";
import { motion } from "framer-motion";
import Hamburguer from "../Header/HamburguerIcon";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartClickHandle = () => {
    dispatch(cartActions.toggleCart(false));
  };
  const windowSize = useSelector((state) => state.ui.screenSize);

  return (
    <>
      <div className={classes.backdrop} onClick={cartClickHandle}></div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        open
        className={classes.menu}
        style={{ width: windowSize ? "50%" : "100%" }}
      >
        <div className={classes.hamburguer} onClick={cartClickHandle}>
          <Hamburguer />
        </div>
        <div className={classes.links}>
          <p>cart</p>
          <p>cart</p>
          <p>Contacts</p>
        </div>
      </motion.div>
    </>
  );
};
export default Cart;
