import { Images } from "../../config";
import "./styles.css";
import { Form } from "../";

export const Header: React.FunctionComponent = () => {
  return (
    <div className="Header-Container">
      <div
        style={{ backgroundImage: `url(${Images.shutterstockHeader})` }}
        className="Header-Inner"
      >
        <Form></Form>
        <div className="Header-Desktop-Wrapper">
          <span className="Header-Phone-Welcome-To-Europes-Text">
            Welcome to Europe’s largest call center database
          </span>
          <div className="Header-Phone-Welcome-To-Europes-Outer-Container">
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">500+</span>
              <span className="Header-Phone-Desc-Text">Tenders</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">200+</span>
              <span className="Header-Phone-Desc-Text">Callcenter</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">375.000</span>
              <span className="Header-Phone-Desc-Text">Agents available</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">85%</span>
              <span className="Header-Phone-Desc-Text">Faster sourcing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Header-Image-Wrapper-Phone">
        <Form></Form>
        <div
          style={{ backgroundImage: `url(${Images.shutterstockPhone})` }}
          className="Header-Phone-Image-Container"
        >
          <span className="Header-Phone-Welcome-To-Europes-Text">
            Welcome to Europe’s largest call center database
          </span>
          <div className="Header-Phone-Welcome-To-Europes-Outer-Container">
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">500+</span>
              <span className="Header-Phone-Desc-Text">Tenders</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">200+</span>
              <span className="Header-Phone-Desc-Text">Callcenter</span>
            </div>
          </div>
          <div className="Header-Phone-Welcome-To-Europes-Outer-Container">
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">375.000</span>
              <span className="Header-Phone-Desc-Text">Agents available</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">85%</span>
              <span className="Header-Phone-Desc-Text">Faster sourcing</span>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Images.shutterstockTablet})` }}
          className="Header-Tablet-Image-Container"
        >
          <span className="Header-Phone-Welcome-To-Europes-Text">
            Welcome to Europe’s largest call center database
          </span>
          <div className="Header-Phone-Welcome-To-Europes-Outer-Container">
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">500+</span>
              <span className="Header-Phone-Desc-Text">Tenders</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">200+</span>
              <span className="Header-Phone-Desc-Text">Callcenter</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">375.000</span>
              <span className="Header-Phone-Desc-Text">Agents available</span>
            </div>
            <div className="Header-Phone-Welcome-To-Europes-Inner-Container">
              <span className="Header-Phone-Title-Text">85%</span>
              <span className="Header-Phone-Desc-Text">Faster sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
