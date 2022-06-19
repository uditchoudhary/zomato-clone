const CuisineFilter = ({ restCuisineFilter }) => {
  const onFilterChange = (event) => {
    if (event.target.value === "All") {
      restCuisineFilter(undefined);
    } else {
      let cuisineId = event.target.value;
      const updatedFilter = cuisineId;
      restCuisineFilter(updatedFilter);
    }
  };
  return (
    <form>
      <div className="filter-cuisine">
        <div className="filter-subtitle">Cuisine Filter</div>
        <div className="filter-option-group" onChange={onFilterChange}>
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
              value="1"
            />
            <label htmlFor="ni-cuisine">North Indian</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="si-cuisine"
              name="filter-cuisine"
              value="2"
            />
            <label htmlFor="si-cuisine">South Indian</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="chinese-cuisine"
              name="filter-cuisine"
              value="3"
            />
            <label htmlFor="chinese-cuisine">Chinese</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="ff-cuisine"
              name="filter-cuisine"
              value="4"
            />
            <label htmlFor="ff-cuisine">Fast Food</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="sf-cuisine"
              name="filter-cuisine"
              value="5"
            />
            <label htmlFor="sf-cuisine">Street Food</label>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CuisineFilter;
