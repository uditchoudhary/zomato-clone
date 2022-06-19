import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { instance as API } from "../../services/axiosConfig";
import "./ListingPage.css";

const ListingPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const mt_id = param.mealtype_id;
    setPageLoading(true);
    API.get(`restaurants?mealtype_id=${mt_id}`)
      // API.get(`restaurants?mealtype_id=2`)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
    setPageLoading(false);
  }, []);
  // getting random number for dummy values
  const getRandonNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const randomDiscount = (min, max) => {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
  };
  const handleRestaurants = (restId) => {
    navigate("/details/restaurant/" + restId);
  };
  if (pageLoading) {
    return <h1>Loadin .... </h1>;
  }
  return (
    <>
      <div className="container">
        <div className="mainContent d-flex justify-content-end">
          <div id="filter">
            <div className="filter-heading">
              Filter
              <hr />
            </div>
            <form>
              <div className="filter-cuisine">
                <div className="filter-subtitle">Cuisine Filter</div>
                <div className="filter-option-group">
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="all-cuisine"
                      name="filter-cuisine"
                      value="All"
                    />
                    <label htmlFor="all-cuisine">All</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="ni-cuisine"
                      name="filter-cuisine"
                      value="North Indian"
                    />
                    <label htmlFor="ni-cuisine">North Indian</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="si-cuisine"
                      name="filter-cuisine"
                      value="South Indian"
                    />
                    <label htmlFor="si-cuisine">South Indian</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="chinese-cuisine"
                      name="filter-cuisine"
                      value="Chinese"
                    />
                    <label htmlFor="chinese-cuisine">Chinese</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="ff-cuisine"
                      name="filter-cuisine"
                      value="Fast Food"
                    />
                    <label htmlFor="ff-cuisine">Fast Food</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="radio"
                      id="sf-cuisine"
                      name="filter-cuisine"
                      value="Street Food"
                    />
                    <label htmlFor="sf-cuisine">Street Food</label>
                  </div>
                </div>
              </div>
              <hr style={{ width: "80%", textAlign: "center" }} />
              <div className="filter-cost">
                <div className="filter-subtitle">Cost Filter</div>
                <div className="filter-option-group">
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="all-cost"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="all-cost">All</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="cost1"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="cost1">100-300</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="cost2"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="cost2">301-500</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="cost3"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="cost3">501-700</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="cost4"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="cost4">701-1000</label>
                  </div>
                  <div className="filter-option">
                    <input
                      type="checkbox"
                      id="cost5"
                      name="filter-cost"
                      value="All"
                    />
                    <label htmlFor="cost5">1001-3000</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="card">
            <div className="listing">
              {/* <div className="listing-location-heading">
                Delhi NCR Resturants
              </div> */}
              <div className=" d-flex flex-wrap justify-content-between">
                {console.log(restaurants)}
                {restaurants.length > 0 &&
                  restaurants.map((rest) => {
                    return (
                      <div
                        className="single-card"
                        key={rest.restaurant_id}
                        onClick={() => handleRestaurants(rest.restaurant_id)}
                      >
                        <div className="card-image-wrapper">
                          <img
                            src={rest.image_gallery[0]}
                            alt={rest.restaurant_name}
                            className="card-image"
                          />
                          {rest.restaurant_id < getRandonNumber(0, 9) && (
                            <div className="card-image-promoted">Promoted</div>
                          )}
                          {getRandonNumber(1, 9) % 2 === 0 && (
                            <div className="card-image-pro-discount">
                              Pro extra 10% OFF
                            </div>
                          )}
                          {getRandonNumber(1, 9) % 2 === 0 && (
                            <div className="card-image-normal-discount">
                              {randomDiscount(5, 50)}% OFF
                            </div>
                          )}
                          <div className="card-image-delivery-time">
                            {getRandonNumber(15, 60)} min
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-content-heading">
                            <div className="card-content-title">
                              <span className="card-content-text">
                                {rest.restaurant_name}
                              </span>
                              <span className="card-content-rating">
                                {rest.average_rating}{" "}
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
                          </div>
                          <div className="card-content-body">
                            <div className="card-content-subtitle">
                              {rest.cuisines.map((cus) => {
                                return <span>{cus.cuisine_name}&nbsp;</span>;
                              })}
                            </div>
                            <div className="card-content-price">
                              ₹{rest.cost} for two
                            </div>
                          </div>
                          <hr />
                        </div>

                        <div className="card-footer">
                          <img
                            src="https://i.ibb.co/vsDPHyk/arrow-up.webp"
                            className="img-footer-arrow"
                            alt="arrow"
                          />
                          <span className="img-footer-text">
                            {getRandonNumber(100, 1000)}+ orders placed from
                            here recently
                          </span>
                          <img
                            src="https://i.ibb.co/VWWyMG8/carditem.webp"
                            className="img-footer-delivery"
                            alt="delivery"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
