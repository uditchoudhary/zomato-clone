const CostFilter = ({ restCostFilter }) => {
  const onFilterChange = (event) => {
    if (event.target.value === "All") {
      restCostFilter(undefined);
    } else {
      let cost = event.target.value.split("-");
      let lcost = Number(cost[0]);
      let hcost = Number(cost[1]);
      const updatedFilter = { lcost, hcost };
      restCostFilter(updatedFilter);
    }
  };
  return (
    <form>
      <div className="filter-cost">
        <div className="filter-subtitle">Cost Filter</div>
        <div className="filter-option-group" onChange={onFilterChange}>
          <div className="filter-option">
            <input type="radio" id="all-cost" name="filter-cost" value="All" />
            <label htmlFor="all-cost">All</label>
          </div>
          <div className="filter-option">
            <input type="radio" id="cost1" name="filter-cost" value="100-300" />
            <label htmlFor="cost1">100-300</label>
          </div>
          <div className="filter-option">
            <input type="radio" id="cost2" name="filter-cost" value="301-500" />
            <label htmlFor="cost2">301-500</label>
          </div>
          <div className="filter-option">
            <input type="radio" id="cost3" name="filter-cost" value="501-700" />
            <label htmlFor="cost3">501-700</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="cost4"
              name="filter-cost"
              value="701-1000"
            />
            <label htmlFor="cost4">701-1000</label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="cost5"
              name="filter-cost"
              value="1001-3000"
            />
            <label htmlFor="cost5">1001-3000</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CostFilter;
