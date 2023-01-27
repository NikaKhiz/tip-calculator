import React from "react";
import dollar from "../assets/images/icon-dollar.svg";

const Totals = () => {
  return (
    <div className="totals">
      <div className="totalsInnerCont">
        <div className="tipAmountCont">
          <div className="totalsHeadingCont">
            <p className="totalsHeading">tip amount</p>
            <p className="totalsSubHeading">/ person</p>
          </div>
          <div className="total">
            <div className="dollarImgCont">
              <img src={dollar} alt="dollarImg" />
            </div>
            <span className="price">0.00</span>
          </div>
        </div>
        <div className="totalsPriceCont">
          <div className="totalsHeadingCont">
            <p className="totalsHeading">total</p>
            <p className="totalsSubHeading">/ person</p>
          </div>
          <div className="total">
            <div className="dollarImgCont">
              <img src={dollar} alt="dollarImg" />
            </div>
            <span className="price">0.00</span>
          </div>
        </div>
      </div>
      <button type="button" className="resetBtn">
        reset
      </button>
    </div>
  );
};

export default Totals;
