import { Images } from "../../config";
import "./styles.css";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="Content-Container">
      <div className="Content-TopContainer">
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.signUpLogo}
          ></img>
          <span className="Content-TopContainer-Title">Sign up for free</span>
          <span className="Content-TopContainer-Desc">
            Signing up and setting up your project takes less than 5 minutes
          </span>
        </div>
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.sourceLogo}
          ></img>
          <span className="Content-TopContainer-Title">Source smarter</span>
          <span className="Content-TopContainer-Desc">
            Our data-based AI and our experts will help you find exactly what
            you are looking for
          </span>
        </div>
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.offersLogo}
          ></img>
          <span className="Content-TopContainer-Title">Receive offers</span>
          <span className="Content-TopContainer-Desc">
            With our insights you always receive high-quality proposals at the
            best price
          </span>
        </div>
      </div>
      <div className="Content-TopContainer-Phone">
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.signUpLogo}
          ></img>
          <div className="Content-TopContainer-TextWrapper">
            <span className="Content-TopContainer-Title">Sign up for free</span>
            <span className="Content-TopContainer-Desc">
              Signing up and setting up your project takes less than 5 minutes
            </span>
          </div>
        </div>
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.sourceLogo}
          ></img>
          <div className="Content-TopContainer-TextWrapper">
            <span className="Content-TopContainer-Title">Source smarter</span>
            <span className="Content-TopContainer-Desc">
              Our data-based AI and our experts will help you find exactly what
              you are looking for
            </span>
          </div>
        </div>
        <div className="Content-TopContainer-Outer-Wrapper">
          <img
            className="Content-TopContainer-Logo"
            src={Images.offersLogo}
          ></img>
          <div className="Content-TopContainer-TextWrapper">
            <span className="Content-TopContainer-Title">Receive offers</span>
            <span className="Content-TopContainer-Desc">
              With our insights you always receive high-quality proposals at the
              best price
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Images.shutterstockFooter})` }}
        className="Content-Background-Image"
      >
        <span className="Content-BottomContainer-Title">Why Snubes?</span>
        <span className="Content-BottomContainer-LittleTitle">
          Trusted Know-How
        </span>
        <span className="Content-BottomContainer-Desc">
          We have more than 20 years of experience and continuously check call
          centers for their quality and capabilities. Customers like Allianz
          trust Snubes industry knowledge.
        </span>
        <span className="Content-BottomContainer-LittleTitle">
          Time and cost savings
        </span>
        <span className="Content-BottomContainer-Desc">
          With Snubes you can easily compare prices, quality and availability,
          and find more potential suppliers. Reach your goal faster and save
          resources.
        </span>
        <span className="Content-BottomContainer-LittleTitle">
          Satisfaction guaranteed
        </span>
        <span className="Content-BottomContainer-Desc">
          We offer a validated data-based approach to procurement, rather than
          awarding contracts only based on the lowest price, an existing
          relationship or "gut feeling".
        </span>
      </div>
    </div>
  );
};
