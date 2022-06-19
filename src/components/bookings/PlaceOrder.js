import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance as API } from "../../services/axiosConfig";
import { useState } from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const params = useParams();

  const state = {
    id: Math.floor(Math.random() * 100000),
    hotel_name: params.restName,
    name: sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")[0]
      : "",
    email: sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")[1]
      : "",
    cost: 0,
    phone: sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")[2]
      : "",
    address: "Hon 23",
    menuItem: "",
  };
  const [menu, setMenu] = useState();
  const [cost, setCost] = useState();

  useEffect(() => {
    let menuItem = sessionStorage.getItem("menu");
    console.log(menuItem);

    let orderId = [];
    menuItem.split(",").map((item) => {
        console.log(item)
      orderId.push(parseInt(item));
      return "ok";
    });

    API.post("/menuItem", orderId)
      .then((res) => {
        console.log(res);
        let totalPrice = 0;
        totalPrice = res.data.reduce(
          (total, item) => total + parseFloat(item.menu_price),
          0
        );
        setMenu(res.data);
        setCost(totalPrice);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {};
  const renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="orderItems row align-items-center" key={item.menu_id}>
            <img
              className="col item_image"
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h3 className="col text-left">{item.menu_name}</h3>
            <h4 className="col text-end">Rs. {item.menu_price}</h4>
          </div>
        );
      });
    }
  };
  const checkout = () => {};
  //   if (!sessionStorage.getItem("loginStatus")) {
  //     return (
  //       <div>
  //         {/* <Header /> */}
  //         <center>
  //           <h2>Login First To Place Order</h2>
  //         </center>
  //       </div>
  //     );
  //   }
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <hr />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Your Order For {params.restName}</h3>
          </div>
          <div className="panel-body">
            <form
              action="https://developerpayment.herokuapp.com/paynow"
              method="POST"
            >
              <input type="hidden" name="cost" value={state.cost} />
              <input type="hidden" name="id" value={state.id} />
              <input type="hidden" name="hotel_name" value={state.hotel_name} />
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="fname">Name</label>
                  <input
                    id="fname"
                    name="name"
                    className="form-control"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    className="form-control"
                    value={state.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={state.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    className="form-control"
                    value={state.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {renderItem(menu)}
              <div className="row mt-5">
                <div className="col-md-12 text-end">
                  <h2>Total Price is Rs.{cost}</h2>
                </div>
              </div>
              <div className="row mt-5">
                <button className="btn btn-success" onClick={checkout}>
                  Procced
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
