import React, { useEffect, useState } from "react";
import "./NonListedProduct.css";
import axios from "axios";
import { accept_header, create_nonlisted } from "../../Utils/constatns";

const NonListedProduct = () => {
  const [name, setName] = useState();
  const [manufacture, setManufacture] = useState();
  const [mrp, setMrp] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);

  const NonListedProApi = async () => {
    setLoading(true);
    let userid = localStorage.getItem("token");
    // console.log("user id", userid);

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("manufacturer", manufacture);
    formdata.append("mrp", mrp);
    formdata.append("description", description);

    // console.log("non lis  pro", formdata);

    axios
      .post(create_nonlisted, formdata, {
        headers: {
          Accept: accept_header,
          Authorization: "Bearer " + JSON.parse(userid),
        },
      })
      .then((res) => {
        console.log("pro data", res.data);
        if (res.data.success == 1) {
          setLoading(false);
        } else {
          null;
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });

    // if (res.data.success == 1) {
    //   setName("");
    //   setManufacture("");
    //   setMrp("");
    //   setDescription("");
    //   setLoading("");

    //   Notification(
    //     "success",
    //     "Success!",
    //     "form has been successfully submitted"
    //   );
    //   return;
    // } else {
    //   Notification("error", "Error!", "please enter valid data!");
    //   return;
    // }
  };

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
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Manufacturing</label>
          <input
            className="form-control"
            type="text"
            autoFocus="true"
            onChange={(e) => setManufacture(e.target.value)}
            required
          />
        </div>
        <div>
          <label>M.R.P</label>
          <input
            className="form-control"
            onChange={(e) => setMrp(e.target.value)}
            type="number"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button
          className="tic_btn"
          type="submit"
          onClick={() => NonListedProApi()}
          style={{ marginTop: "35px" }}
        >
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
