import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance as API } from "../../services/axiosConfig";
import { useNavigate } from "react-router-dom";
import "./Details.css";
import Menu from "./Menu";

const Details = () => {
  const params = useParams();
  const restId = params.restId;
  const [details, setDetails] = useState();
  const [userItems, setUserItems] = useState(
    sessionStorage.getItem("menu")
  );
  console.log("from session storage",userItems)
  const [menu, setMenu] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Details page");
    API.get("/restaurant/" + restId)
      .then((res) => setDetails(res.data[0]))
      .catch((err) => console.log(err));
    API.get("/menu/" + restId)
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const proceed = () => {
    console.log("Setting user items", userItems)
    sessionStorage.setItem("menu", userItems);
    navigate(`/placeOrder/${details.restaurant_name}`);
  };
  const addToCart = (data) => {
    console.log("data received",data)
    setUserItems(data);
  };
  if (details) {
    return (
      <>
        <div id="mainContant" className="row">
          <div className="imgDiv">
            <img src={details.restaurant_thumb} alt="snacks" />
          </div>
          <div className="contentDiv">
            <h1>{details.restaurant_name}</h1>
            <span>231 Customers Rating is {details.rating_text}</span>
            <h3>
              <del>Old Price: 1000</del>
            </h3>
            <h3>New Price: Rs.{details.cost}</h3>
            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
            <div className="feature_container">
              <div className="feature">
                <img
                  src="https://i.ibb.co/wJvrhYg/veg.png"
                  alt="veg"
                  className="imgIcon"
                />
                <p>Pure Veg</p>
              </div>
              <div className="feature">
                <img
                  src="https://i.ibb.co/mD3jpgc/sentizied.png"
                  alt="veg"
                  className="imgIcon"
                />
                <p>Fully Senatized</p>
              </div>
              <div className="feature">
                <img
                  src="https://i.ibb.co/kHrm3Mh/delivery.png"
                  alt="delivery"
                  className="imgIcon"
                />
                <p>Free Delivery</p>
              </div>
            </div>
            <h2>Available</h2>

            <div>
              {console.log(details)}
              <button
                // to={`/listing/`}
                onClick={() => navigate(-1)}
                className="btn btn-back"
              >
                Back
              </button>
              {/* <button className="btn btn-checkout">Add To Cart</button> */}
              <button className="btn btn-proceed" onClick={proceed}>
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Menu
              menudata={menu}
              finalOrder={(data) => {
                addToCart(data);
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Details;
