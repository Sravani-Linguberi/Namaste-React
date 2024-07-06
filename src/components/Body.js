import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurantsList);
  return (
    <div className="body-container">
      <div className="filter-btn">
        <button onClick={()=>{
         setResList(resList.filter((val)=>  val.info.avgRating > 4));
        }}>filter</button>
      </div>
      <div className="card-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
