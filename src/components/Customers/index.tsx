import { Images } from "../../config";
import "./styles.css";

export const Customers: React.FunctionComponent = () => {
  return (
    <div className="Customers-Container">
      <div className="Customer-Top-Title">
        <img className="Customer-Top-Logo" src={Images.talixoBlack}></img>
      </div>
      <div className="Customer-Middle-Container">
        <span className="Customer-Middle-Text">
          “Finding a suitable outsourcing service provider through Snubes was
          very easy and our personal consultant helped us every step of the way.
          After a short time we had good offers on the table. An on-site visit
          confirmed the positive impression and we have now found a matching
          partner. Thank you for your great support, which has helped us a lot
          in the selection process.”
        </span>
      </div>
      <p>
        <span className="Customer-Middle-Footer-Text-Bold">Jan Brenneke, </span>
        <span className="Customer-Middle-Footer-Text">VP Operations</span>
      </p>
      <img className="Customer-Bottom-Pagination" src={Images.pagination}></img>
      <img className="Customer-Bottom-Pagination-Phone" src={Images.paginationPhone}></img>
      <div className="Customer-Bottom-Logo-Container">
        <img className="Customer-Bottom-Logo" src={Images.allianz}></img>
        <img className="Customer-Bottom-Logo" src={Images.creditshelf}></img>
        <img className="Customer-Bottom-Logo-Usercentrics" src={Images.usercentrics}></img>
        <img className="Customer-Bottom-Logo" src={Images.laserhub}></img>
        <img className="Customer-Bottom-Logo" src={Images.talixoGray}></img>
      </div>
    </div>
  );
};
