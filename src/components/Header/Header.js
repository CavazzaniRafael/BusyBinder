import React, { useState, useEffect } from "react";
import Busybinder from "../../Images/Busybinder-logo.png";
import classes from "./Header.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import Hamburguer from "./HamburguerIcon";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
const Header = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(uiActions.checkScreenSize(window.innerWidth > 1024));
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // open menu and cart and close it
  const windowSize = useSelector((state) => state.ui.screenSize);

  const MenuisVisible = useSelector((state) => state.cart.menuIsVisible);
  const cartisVisible = useSelector((state) => state.cart.cartIsVisible);
  const handleHamburguerClick = () => {
    dispatch(cartActions.toggleMenu(true));
  };

  const cartClickHandle = () => {
    dispatch(cartActions.toggleCart(true));
  };

  // end

  return (
    <header>
      <div className={classes.header}>
        <img
          src={Busybinder}
          className={classes.busybinder}
          alt="Busybinder logo"
        />
        {!windowSize && (
          <div className={classes.icon} onClick={handleHamburguerClick}>
            <Hamburguer />
          </div>
        )}
        {windowSize && (
          <div className={classes.options}>
            <p>Albums</p>
            <p>About us</p>
            <p>Contacts</p>
          </div>
        )}
        {windowSize && (
          <div className={classes.cartContainer} onClick={cartClickHandle}>
            <CartIcon size="30px" />
            <p className={classes.number}>2</p>
          </div>
        )}
        <AnimatePresence>{MenuisVisible && <Menu />}</AnimatePresence>
        <AnimatePresence>{cartisVisible && <Cart />}</AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
