import React, { useState, useEffect } from "react";
import Busybinder from "../../Images/Busybinder-logo.png";
import classes from "./Header.module.css";
import CartIcon from "../Cart/CartIcon";
import Hamburguer from "./HamburguerIcon";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Header = (props) => {
  const [desktop, setDesktop] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // open menu and cart and close it
  const MenuisVisible = useSelector((state) => state.cart.menuIsVisible);
  const toggleCartHandler = () => {};

  const togglemenuHandler = () => {};
  // end

  return (
    <header>
      <div className={classes.header}>
        <img
          src={Busybinder}
          className={classes.busybinder}
          alt="Busybinder logo"
        />
        {!desktop && (
          <div className={classes.icon}>
            <Hamburguer />
          </div>
        )}
        {desktop && (
          <div className={classes.options}>
            <p>Albums</p>
            <p>About us</p>
            <p>Contacts</p>
          </div>
        )}
        {desktop && (
          <div className={classes.cartContainer}>
            <CartIcon size="30px" />
            <p className={classes.number}>2</p>
          </div>
        )}
        <AnimatePresence>{MenuisVisible && <Menu />}</AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
