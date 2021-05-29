import { Images } from "../../config";
import "./styles.css";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="Content-Container">
      <div className="Content-TopContainer"></div>
      <div className="Content-BottomContainer">
        <img
          className="Content-Background-Image"
          src={Images.shutterstockFooter}
        ></img>
      </div>
    </div>
  );
};
