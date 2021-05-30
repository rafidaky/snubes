import { Images } from "../../config";
import "./styles.css";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-TopContainer">
        <img className="Footer-TopContainer-Logo" src={Images.footerLogo}></img>
        <div className="Footer-TopContainer-Button-Wrapper">
          <span className="Footer-TopContainer-Button-Text">About us</span>
          <span className="Footer-TopContainer-Button-Text">
            Become a Partner
          </span>
          <span className="Footer-TopContainer-Button-Text">FAQ</span>
        </div>
        <div className="Footer-TopContainer-Button-Wrapper">
          <span className="Footer-TopContainer-Button-Text">Imprint</span>
          <span className="Footer-TopContainer-Button-Text">
            Terms & Conditions
          </span>
          <span className="Footer-TopContainer-Button-Text">
            Privacy Policy
          </span>
        </div>
        <div className="Footer-TopContainer-Button-Wrapper">
          <span className="Footer-TopContainer-Button-Text">
            support@snubes.com
          </span>
          <span className="Footer-TopContainer-Button-Text">
            +49 (0) 305 5645327
          </span>
          <img
            className="Footer-TopContainer-Socials"
            src={Images.socials}
          ></img>
        </div>
      </div>
      <div className="Footer-TopContainer-Phone">
        <img className="Footer-TopContainer-Logo" src={Images.footerLogo}></img>
        <span className="Footer-TopContainer-Button-Text">About us</span>
        <span className="Footer-TopContainer-Button-Text">
          Become a Partner
        </span>
        <span className="Footer-TopContainer-Button-Text">FAQ</span>
        <span className="Footer-TopContainer-Button-Text">Imprint</span>
        <span className="Footer-TopContainer-Button-Text">
          Terms & Conditions
        </span>
        <span className="Footer-TopContainer-Button-Text">Privacy Policy</span>
        <span className="Footer-TopContainer-Button-Text">
          support@snubes.com
        </span>
        <span className="Footer-TopContainer-Button-Text">
          +49 (0) 305 5645327
        </span>
        <img className="Footer-TopContainer-Socials" src={Images.socials}></img>
      </div>
      <div className="Footer-BottomContainer">
        <span className="Footer-BottomContainer-Text">
          © 2019 Snubes GmbH All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
