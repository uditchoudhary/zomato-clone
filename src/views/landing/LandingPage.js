import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const toggleTheme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log("theme changed");
  };
  return (
    <>
      <div className="container quick-search">
        <div className="row">
          <div className="col">
            <span id="QuickHeading"> Quick Search </span>
            <span id="QuickSubHeading"> Discover Restaurants By Meal </span>
          </div>
        </div>
        <div className="row">
          <div className="row row-cols-3">
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img
                    src="https://i.ibb.co/27RKSRS/breakfast.png"
                    alt="breakfast"
                  />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">BreakFast</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your BreakFast Meal
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img
                    src="https://i.ibb.co/5kcxFK0/nightlife.png"
                    alt="nightlife"
                  />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">Nightlife</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your Nightlife Club
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="https://i.ibb.co/7R0cGYP/dinner.png" alt="dinner" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">Dinner</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your Dinner Meal
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="https://i.ibb.co/kqNvCBM/drinks.png" alt="drinks" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">Drinks</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your Drinks Meal
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="https://i.ibb.co/MRGMT6x/snacks.png" alt="snacks" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">BreakFast</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your BreakFast Meal
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="https://i.ibb.co/HBvb6ZV/lunch.png" alt="snacks" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">
                    <Link to="/listing">BreakFast</Link>
                  </div>
                  <div className="componentSubHeading">
                    Enjoy Your BreakFast Meal
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

export default LandingPage;
