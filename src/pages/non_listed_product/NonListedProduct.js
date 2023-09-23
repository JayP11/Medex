import React from "react";
import "./NonListedProduct.css";

const NonListedProduct = () => {
  return (
    <div>
      <div className="pro_heading">Request a Non listed product</div>
      <div className="form_main">
        <div>
          <label>Medicine name</label>
          <input
            className="form-control"
            type="text"
            autoFocus="true"
            required
          />
        </div>
        <div>
          <label>Manufacturing</label>
          <input
            className="form-control"
            type="text"
            autoFocus="true"
            required
          />
        </div>
        <div>
          <label>M.R.P</label>
          <input className="form-control" type="number" required />
        </div>
        <div>
          <label>Description</label>
          <textarea className="form-control" required />
        </div>
        <button className="tic_btn" type="submit" style={{marginTop:"35px"}}>
          Submit
        </button>
        {/* <form className="form_style">
          <div>
            <label style={{ fontWeight: "500" }}>Order no.</label>
            <input
              className="form-control"
              type="text"
              autoFocus="true"
              required
            />
          </div>
          <div>
            <label style={{ fontWeight: "500" }}>Product name</label>
            <input className="form-control" type="Product name" required />
          </div>
          <div>
            <label style={{ fontWeight: "500" }}>Subject</label>
            <input className="form-control" required />
          </div>
          <div>
            <label style={{ fontWeight: "500" }}>Product description</label>
            <textarea className="form-control" required />
          </div>
         
          <br />
          <button className="tic_btn" type="submit">
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default NonListedProduct;
