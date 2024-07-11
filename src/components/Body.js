import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await (await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")).json();
      // below one for cors is not working
      // const res = await fetch(
      //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      const data = await res.json();
      console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      let resData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      resData = resData ? resData : restaurantsList;
      setResList(resData);
      setFilteredRes(resData);
    } catch (err) {
      console.error(err);
    }
  };

  const searchRes = () =>{
    const filteredList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRes(filteredList);
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-bar">
        <input placeholder="search restaurant" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={searchRes}>Search</button>
        <div className="filter-btn">
          <button
            onClick={() => {
              setResList(resList.filter((val) => val.info.avgRating > 4));
            }}
          >
            filter top rated
          </button>
        </div>
      </div>

      <div className="card-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
