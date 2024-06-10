import React from "react";
import classes from "./Menu.module.css";
import CartIcon from "../Cart/CartIcon";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { motion } from "framer-motion";
import Hamburguer from "./HamburguerIcon";

const Menu = () => {
  const dispatch = useDispatch();
  const handleHamburguerClick = () => {
    dispatch(cartActions.toggleMenu(false));
  };
  const handleCartClick = () => {
    dispatch(cartActions.toggleMenu(false));
    dispatch(cartActions.toggleCart(true));
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleHamburguerClick}></div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        open
        className={classes.menu}
      >
        <div className={classes.hamburguer} onClick={handleHamburguerClick}>
          <Hamburguer />
        </div>
        <div className={classes.links}>
          <p>Albums</p>
          <p>About us</p>
          <p>Contacts</p>
          <div onClick={handleCartClick} className={classes.cartContainer}>
            <CartIcon size="40px" />
            <p className={classes.number}>2</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Menu;
