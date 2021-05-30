import { Images } from "../../config";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryPrefix } from "../../actions/";

export const NavBar: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const prefix = useSelector((state: any) => state.prefix);

  useEffect(() => {
    if (prefix == "" || prefix == undefined) {
      fetch("https://ipapi.co/json/")
        .then((response: any) => response.json())
        .then((response: any) => {
          dispatch(setCountryPrefix(response.country_calling_code));
        });
    }
  }, []);

  return (
    <div className="Navbar-Container">
      <img className="Navbar-Logo" src={Images.snubesLogoCloud}></img>
      <img className="Navbar-Logo-Phone" src={Images.snubesLogo}></img>
      <img className="Navbar-Buttons" src={Images.navButtons}></img>
      <img className="Navbar-Menu-Logo" src={Images.menu}></img>
    </div>
  );
};
