import { Images } from "../../config";
import "./styles.css";
import { Form } from "../";

export const Header = () => {
  return (
    <div className="Header-Container">
      <div className="Header-Image-Wrapper">
        <img className="Header-Image" src={Images.shutterstockHeader}></img>
        <img className="Header-Overlay" src={Images.rectangle}></img>
        <div className="Header-Inner">
          <Form></Form>
          <div>
            <span>Welcome to Europe’s largest call center database</span>
            <div>
              <div>
                <span>500+</span>
                <span>Tenders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
