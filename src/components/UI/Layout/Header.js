import classes from "./Header.module.css";
import tfilImage from "../../../assets/tfil.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Buy a Mitzvah!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={tfilImage} alt="A pair of Tefilin" />
      </div>
    </>
  );
};

export default Header;
