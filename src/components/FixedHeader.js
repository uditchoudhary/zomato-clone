import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance as API } from "../services/axiosConfig";
import { useNavigate } from "react-router-dom";

const FixedHeader = () => {
  const [locations, setLocations] = useState();
  const [restaurants, setRestaurants] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/location")
      .then((res) => setLocations(res.data))
      .catch((err) => console.log(err));
  }, []);
  const renderCity = (data) => {
    // console.log(">>>>data>>",data)
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };
  const renderRest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option key={item.restaurant_id} value={item.restaurant_id}>
            {item.restaurant_name} | {item.address}
          </option>
        );
      });
    }
  };
  const handleCity = (event) => {
    let restId = event.target.value;
    API.get("/restaurants?state_id=" + restId)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };
  const handleRestaurants = (event) => {
    let restId = event.target.value;
    console.log(">>>>inside", restId);
    navigate("/details/restaurant/" + restId);
  };
  return (
    <div className="container-fluid text-white p-0 fixed-header_wapper">
      <div className="header">
        <div className="row">
          <div className="col d-flex justify-content-center heading">
            Find The Best Restaurants Near You
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end dropdown">
            <select className="restlist" onChange={handleCity}>
              <option>Select City</option>
              {renderCity(locations)}
            </select>
          </div>
          <div className="col d-flex justify-content-start dropdown">
            <select className="restlist" onChange={handleRestaurants}>
              <option>Select Restaurant</option>
              {renderRest(restaurants)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
