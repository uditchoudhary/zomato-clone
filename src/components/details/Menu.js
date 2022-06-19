import { useState } from "react";

const Menu = ({ menudata, finalOrder, userItems }) => {
  const [orders, setOrders] = useState([]);
  const placeOrder = (id) => {
    let updatedOrders = orders;
    if (!orders.includes(id)) {
      updatedOrders = [...orders, id];
      setOrders(updatedOrders);
    }
    finalOrder(updatedOrders);
  };

  const removeOrder = (id) => {
    let updatedOrders = orders;
    if (!orders.includes(id)) {
      updatedOrders = orders.filter((item) => item !== id);
      setOrders(updatedOrders);
    }
    finalOrder(updatedOrders);
  };
  const renderCart = (orders) => {
    if (orders) {
      return orders.map((item, index) => {
        return <b key={index}>{item}&nbsp;</b>;
      });
    }
  };
  const renderMenu = (menudata) => {
    if (menudata) {
      return menudata.map((item) => {
        return (
          <>
            <div key={item._id} className="row justify-content-end">
              <div className="col">
                <b>{item.menu_id}</b> &nbsp;
                <img
                  src={item.menu_image}
                  style={{ width: 80, height: 80 }}
                  alt="menu"
                />
                &nbsp;
                {item.menu_name}- Rs.{item.menu_price}
              </div>
              <div className="col-3">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    placeOrder(item.menu_id);
                  }}
                >
                  <span>+</span>
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeOrder(item.menu_id);
                  }}
                >
                  <span>-</span>
                </button>
              </div>
            </div>
            <hr />
          </>
        );
      });
    }
  };

  return (
    <>
      <div>
        <div className="col-12 bg-success">
          <h1>Item Added</h1>
          Item Number {renderCart(orders)} Added
        </div>
        <div className="col-12 bg-info">{renderMenu(menudata)}</div>
      </div>
    </>
  );
};

export default Menu;
