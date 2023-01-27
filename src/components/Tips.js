import React from "react";

const Tips = () => {
  return (
    <div className="tips">
      <form>
        <div className="input-cont">
          <label htmlFor="bill">bill</label>
          <div className="dollarImg">
            <input
              type="text"
              id="bill"
              name="bill"
              className="bill"
              placeholder="0"
            />
          </div>
        </div>
        <div className="tips-btns-cont">
          <p className="headline">select tip's %</p>
          <div className="tips-btns">
            <button type="button">5%</button>
            <button type="button">10%</button>
            <button type="button">15%</button>
            <button type="button">25%</button>
            <button type="button">55%</button>
            <input type="text" className="customBtn" placeholder="Custom" />
          </div>
        </div>
        <div className="input-cont">
          <label htmlFor="numOfPpl">number of people</label>
          <div className="personImg">
            <input
              type="text"
              id="numOfPpl"
              name="numOfPpl"
              className="numOfPpl"
              placeholder="0"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tips;
