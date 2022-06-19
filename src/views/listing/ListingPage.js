import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CostFilter from "../../components/filters/CostFilter";
import CuisineFilter from "../../components/filters/CuisineFilter";
import { instance as API } from "../../services/axiosConfig";
import "./ListingPage.css";

const ListingPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [costFilter, setCostFilter] = useState();
  const [cuisineFilter, setCuisineFilter] = useState();
  useEffect(() => {
    const mt_id = param.mealtype_id;
    setPageLoading(true);
    let params = {};
    if (costFilter) {
      params.hcost = costFilter.hcost;
      params.lcost = costFilter.lcost;
    }

    if (cuisineFilter) {
      params.cuisineId = cuisineFilter;
    }

    API.get(`filters/${mt_id}`, {
      params,
    })
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
    setPageLoading(false);
  }, [costFilter, cuisineFilter, param.mealtype_id]);
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
      {console.log(costFilter)}
      <div className="container-fluid">
        <div className="mainContent d-flex justify-content-end">
          <div id="filter">
            <div className="filter-heading">
              Filter
              <hr />
            </div>
            {/* <form> */}
            <CuisineFilter
              restCuisineFilter={(cuisineFilter) =>
                setCuisineFilter(cuisineFilter)
              }
            />
            <hr style={{ width: "80%", textAlign: "center" }} />
            <CostFilter
              restCostFilter={(costFilter) => setCostFilter(costFilter)}
            />
            {/* </form> */}
          </div>
          <div id="card">
            <div className="listing">
              {/* <div className="listing-location-heading">
                Delhi NCR Resturants
              </div> */}
              <div className=" d-flex flex-wrap justify-content-center">
                {console.log(restaurants)}
                {restaurants.length > 0 ? (
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
                                {rest.average_rating}
                                &nbsp;&#9733;
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
                          <div className="card-address">{rest.address}</div>
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
                  })
                ) : (
                  <div className="no-item-display">
                    <h3>No Resturants meets the filter selection</h3>
                    <h5>Try changing filter options</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
