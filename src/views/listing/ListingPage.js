import "./ListingPage.css";

const ListingPage = () => {
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
              <div className="listing-location-heading">
                Delhi NCR Resturants
              </div>
              <div className=" d-flex flex-wrap justify-content-between">
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/PMmb0t9/wat-a-burger.webp"
                      alt="wat-a-burger"
                      className="card-image"
                    />
                    <div className="card-image-promoted">Promoted</div>
                    <div className="card-image-pro-discount">
                      Pro extra 10% OFF
                    </div>
                    <div className="card-image-normal-discount">50% OFF</div>
                    <div className="card-image-delivery-time">37 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text">
                          Wat-A-Burger - India Ka Burger
                        </span>
                        <span className="card-content-rating">
                          3.8 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Burger, Fast Food, Beverages, Desserts
                      </div>
                      <div className="card-content-price">₹150 for one</div>
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
                      1550+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/L96hXCb/La-pino-pizza.webp"
                      alt="La-pino-pizza"
                      className="card-image"
                    />
                    <div className="card-image-pro-discount">
                      Pro extra 10% OFF
                    </div>
                    <div className="card-image-normal-discount">50% OFF</div>
                    <div className="card-image-delivery-time">41 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text">
                          {" "}
                          La Pino'z Pizza{" "}
                        </span>
                        <span className="card-content-rating">
                          4.0 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Pizza, Italian, Fast Food, Pasta
                      </div>
                      <div className="card-content-price">₹150 for one</div>
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
                      6725+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/jV3LWMD/owl-is-well.webp"
                      alt="owl-is-well"
                      className="card-image"
                    />
                    <div className="card-image-pro-discount">
                      Pro extra 15% OFF
                    </div>
                    <div className="card-image-normal-discount">50% OFF</div>
                    <div className="card-image-delivery-time">44 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text"> Owl is Well </span>
                        <span className="card-content-rating">
                          4.1 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Italian, Pizza, Burger, Fast Food, Desserts, Beverages
                      </div>
                      <div className="card-content-price">₹150 for one</div>
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
                      1375+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/YdZk5zW/cake.jpg"
                      alt="card-img"
                      className="card-image"
                    />
                    <div className="card-image-promoted">Promoted</div>
                    <div className="card-image-normal-discount">20% OFF</div>
                    <div className="card-image-delivery-time">32 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text">
                          Nathu's pastry shop
                        </span>
                        <span className="card-content-rating">
                          4.1 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Fast Food, Beverages
                      </div>
                      <div className="card-content-price">₹100 for one</div>
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
                      1700+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/jV3LWMD/owl-is-well.webp"
                      alt="owl-is-well"
                      className="card-image"
                    />
                    <div className="card-image-pro-discount">
                      Pro extra 15% OFF
                    </div>
                    <div className="card-image-normal-discount">50% OFF</div>
                    <div className="card-image-delivery-time">44 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text"> Owl is Well </span>
                        <span className="card-content-rating">
                          4.1 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Italian, Pizza, Burger, Fast Food, Desserts, Beverages
                      </div>
                      <div className="card-content-price">₹150 for one</div>
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
                      1375+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
                <div className="single-card">
                  <div className="card-image-wrapper">
                    <img
                      src="https://i.ibb.co/YdZk5zW/cake.jpg"
                      alt="card-img"
                      className="card-image"
                    />
                    <div className="card-image-promoted">Promoted</div>
                    <div className="card-image-normal-discount">20% OFF</div>
                    <div className="card-image-delivery-time">32 min</div>
                  </div>
                  <div className="card-content">
                    <div className="card-content-heading">
                      <div className="card-content-title">
                        <span className="card-content-text">
                          Nathu's pastry shop
                        </span>
                        <span className="card-content-rating">
                          4.1 <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-content-body">
                      <div className="card-content-subtitle">
                        Fast Food, Beverages
                      </div>
                      <div className="card-content-price">₹100 for one</div>
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
                      1700+ orders placed from here recently
                    </span>
                    <img
                      src="https://i.ibb.co/VWWyMG8/carditem.webp"
                      className="img-footer-delivery"
                      alt="delivery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
