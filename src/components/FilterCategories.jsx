import { useState } from "react";
import { popularProducts } from "../Data";

const FilterCategories = () => {
  const [val, setVal] = useState("");
  console.log(popularProducts.filter(item=>item.categorie.includes("B")));

  return (
    <>
      <div className="filter">
        <select
          className="filter-content"
          onChange={(e) => setVal(e.target.value)}
        >
          <option value="All">All</option>
          {popularProducts.map((item) => (
            <option key={item.id}>{item.categorie}</option>
          ))}
        </select>
        
      </div>
      <div className="Category">
      {/* <h2>{val}</h2> */}
    </div>
    </>
  );
};

export default FilterCategories;
