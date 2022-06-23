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
    if (orders.includes(Number(id))) {
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
      return (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Item #</th>
                <th scope="col"></th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {menudata.map((item) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{item.menu_id}</th>
                    <td>
                      <img
                        src={item.menu_image}
                        style={{ width: 80, height: 80 }}
                        alt="menu"
                      />
                    </td>
                    <td>{item.menu_name}</td>
                    <td>Rs.{item.menu_price}</td>
                    <td>
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
                    </td>
                    <hr />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };
  return (
    <>
      <div className="menu-container container">
        {console.log("orders", orders)}
        {orders.length > 0 ? (
          <div className="col-12 my-2">
            <h1>Items in the cart</h1>
            Item Number {renderCart(orders)} Added
          </div>
        ) : (
          <div className="col-12 my-2">
            <h1>No item in the cart</h1>
          </div>
        )}
        <div className="col-12 bg-info">{renderMenu(menudata)}</div>
      </div>
    </>
  );
};

export default Menu;
