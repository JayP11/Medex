import React from "react";
import "./MyWallet.css";
import { GiWallet } from "react-icons/gi";
import { useUserContext } from "../../context/user_context";
import { Link } from "react-router-dom";
const MyWallet = () => {
  const {
    logintoken,
    isLogin,
    logindata,

    getUserDetails,
    wallet_data,
    getWallet,
  } = useUserContext();

  return (
    <div>
      <div className="db_title1">
        <p>My Wallet</p>
      </div>
      <div className="db_wallet  mywallet_main">
        {/* <div className="metadata_lbl">My Wallet</div>
              <div className="metadata_divider"></div> */}

        <span>
          <div className="wallet_card">
            <div>
              <GiWallet className="wallet_icn" />
            </div>
            <div className="wallet_content">
              <div>
                <p>
                  <h5>My Wallet Balance</h5>
                </p>
              </div>
              <div>
                <p>
                  <h3>Rs. {logindata ? logindata.wallet : 0}</h3>
                </p>
              </div>
              <div>
                <Link
                  className="tandc"
                  to={{
                    pathname: `/TermsConditions`,
                  }}
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
            <div>
              {/* <button className="add_wallet_btn">
                  <h4>+</h4>
                </button> */}
            </div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <table className="wall_hist_tbl">
              <tr>
                <th>Order Id</th>
                <th>Customer Name</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Status</th>{" "}
              </tr>
              {wallet_data && wallet_data.length > 0
                ? wallet_data.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.order_number}</td>
                        <td>{item.customer_name}</td>
                        <td>
                          {item.is_status == "1"
                            ? item.amount
                            : item.is_status == "2"
                            ? "-"
                            : item.is_status == "3"
                            ? "-"
                            : null}
                        </td>
                        <td>
                          {" "}
                          {item.is_status == "1"
                            ? "-"
                            : item.is_status == "2"
                            ? item.amount
                            : item.is_status == "3"
                            ? "-"
                            : null}
                        </td>
                        <td>
                          {item.is_status == "1"
                            ? "Converted"
                            : item.is_status == "2"
                            ? "Used"
                            : item.is_status == "3"
                            ? "Return"
                            : null}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </table>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MyWallet;
