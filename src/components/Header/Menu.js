import React from "react";
import classes from "./Menu.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { motion } from "framer-motion";
import Hamburguer from "./HamburguerIcon";

const Menu = () => {
  const dispatch = useDispatch();
  const handleHamburguerClick = () => {
    dispatch(cartActions.toggleMenu());
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
        <div className={classes.hamburguer}>
          <Hamburguer />
        </div>
        <div className={classes.links}>
          <p>Albums</p>
          <p>About us</p>
          <p>Contacts</p>
        </div>
      </motion.div>
    </>
  );
};
export default Menu;
