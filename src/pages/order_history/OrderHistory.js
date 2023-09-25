import React from "react";
import "./OrderHistory.css";
import { IoTicket } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { useOrderContext } from "../../context/place_order_context";
import {
  MdOutlineEditNote,
  MdOutlineDelete,
  MdDownloadForOffline,
} from "react-icons/md";
import { MdAddCircle, MdCancel } from "react-icons/md";
import { useUserContext } from "../../context/user_context";

const OrderHistory = () => {
  const {
    getAddress,
    address_list,
    deleteAddress,
    getOrdersList,
    downloadInvocie,
    my_order_list,
    getSingleOrderDetails,
    cancelOrder,
  } = useOrderContext();
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
        <p>My Orders</p>
      </div>
      <div className="db_orders orderhistorymain">
      <div className="db_title">
            {/* <p>Dashboard</p> */}
            <lable className="acc_lable">
              Name :{" "}
              <lable className="acc_lable_val">{logindata.company_name}</lable>
            </lable>
          </div>
        {/* <div className="metadata_lbl">My Orders</div>
              <div className="metadata_divider"></div> */}

        <span>
          <table className="order_table order_hist_tbl">
            <tr>
              <th>Order Date</th>
              <th>Order Id</th>
              <th>Order Total</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
            {my_order_list && my_order_list.length > 0
              ? my_order_list.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.order_date}</td>
                      <td>{item.order_number}</td>
                      <td>{item.price}</td>
                      <td>
                        {item.order_status_id == "1"
                          ? "WAITING"
                          : item.order_status_id == "2"
                          ? "PREPARING"
                          : item.order_status_id == "3"
                          ? "ON THE WAY"
                          : item.order_status_id == "4"
                          ? "COMPLETED"
                          : item.order_status_id == "5"
                          ? "CANCELLED"
                          : item.order_status_id == "6"
                          ? "RETURNED"
                          : null}
                      </td>
                      <td className="action_val_cell">
                        <button
                          className="ticket_details_btn"
                          onClick={() => {
                            setTicket_modal(true);
                            getSingleOrderDetails(item.id, logintoken);
                            setId(item.id);
                          }}
                        >
                          <IoTicket className="ticket_details_btn" />
                        </button>

                        <button
                          className="action_view_btn"
                          onClick={() => {
                            setOrder_modal(true);
                            getSingleOrderDetails(item.id, logintoken);
                          }}
                        >
                          <FaFileAlt className="action_view_btn" />
                        </button>

                        <a
                          href="javasript:void(0);"
                          title="Download Invoice"
                          className="action_val_btn"
                          onClick={() => mDownloadInvoice(item.id)}
                        >
                          <MdDownloadForOffline className="action_download_btn" />
                        </a>
                        {item.order_status_id == "1" ? (
                          <button
                            onClick={() => {
                              cancel_Order(item.id);
                            }}
                            className="action_val_btn"
                          >
                            <MdCancel className="action_cancel_btn" />
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </span>
      </div>
    </div>
  );
};

export default OrderHistory;
