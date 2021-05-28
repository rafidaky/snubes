import { Images } from "../../config";
import "./styles.css";

export const NavBar = () => {
  return (
    <div className="Navbar-Container">
      <img className="Navbar-Logo" src={Images.snubesLogo}></img>
      <img className="Navbar-Buttons" src={Images.navBar}></img>
    </div>
  );
};
