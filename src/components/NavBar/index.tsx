import { Images } from "../../config";
import "./styles.css";

export const NavBar = () => {
  return (
    <div className="Navbar-Container">
      <img className="Navbar-Logo" src={Images.snubesLogoCloud}></img>
      <img className="Navbar-Logo-Phone" src={Images.snubesLogo}></img>
      <img className="Navbar-Buttons" src={Images.navBar}></img>
      <img className="Navbar-Menu-Logo" src={Images.menu}></img>
    </div>
  );
};
