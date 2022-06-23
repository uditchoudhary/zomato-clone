import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance as API } from "../../services/axiosConfig";
import FixedHeader from "../../components/header/FixedHeader";

const LandingPage = () => {
  const [mealTypes, setMealTypes] = useState();
  useEffect(() => {
    API.get("/mealType")
      .then((res) => {
        setMealTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <FixedHeader />
      <div className="container quick-search">
        <div className="row">
          <div className="col">
            <span id="QuickHeading"> Quick Search </span>
            <span id="QuickSubHeading"> Discover Restaurants By Meal </span>
          </div>
        </div>
        <div className="row">
          <div className="row row-cols-3">
            {mealTypes &&
              mealTypes.map((mealType) => {
                return (
                  <div className="col">
                    <div className="tileContainer">
                      <div className="tileComponent1">
                        {console.log(mealType)}
                        <img
                          src={mealType.meal_image}
                          alt={mealType.mealtype}
                        />
                      </div>
                      <div className="tileComponent2">
                        <div className="componentHeading">
                          <Link to={`/listing/${mealType.mealtype_id}`}>{mealType.mealtype}</Link>
                        </div>
                        <div className="componentSubHeading">
                          {mealType.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
