import RestaurantCard , {withTopRatedLabel}from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineIndicator from "../utils/useOnlineIndicator";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRes, setFilteredRes] = useState([]);
  const [city , setCity] = useState('');
  const {loggedInUser, setUserName} = useContext(UserContext); 
  let cityName= '';

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
      // const data = await res.json();
      setCity(res.data?.cards[11]?.card?.card?.citySlug);
      let resData =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
  
  const onlineStatus = useOnlineIndicator();
  if(!onlineStatus){
    return <h3>Looks like your offline, Please check your internet connection!</h3>
  }
  
  const  RestaurantWithLabel = withTopRatedLabel(RestaurantCard);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-bar flex items-center">
        <input className="border border-solid border-black rounded px-2 m-2 h-10" placeholder="search restaurant" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className="border border-solid border-black p-2 m-3 rounded-lg bg-green-500" onClick={searchRes}>Search</button>
        <div className="filter-btn border border-solid border-black rounded-lg bg-orange-500 p-2 m-3">
          <button
            onClick={() => {
              setFilteredRes(resList.filter((val) => val.info.avgRating > 4));
            }}
          >
            filter top rated
          </button>
        </div>
      <input className="border border-solid border-black rounded px-2 m-2 h-10" value={loggedInUser} 
      onChange={(e) => setUserName(e.target.value)}/>

      </div>

      <div className="card-container flex flex-wrap justify-around">
        {filteredRes.map((restaurant) => {
        const routeUrl = '/city/'+city+'/'+restaurant.info.id;
        console.log(restaurant, " restaurant body")
        return(
          <Link to={routeUrl} key={restaurant.info.id}>
            {
              restaurant.info.avgRating > 4 ? <RestaurantWithLabel key={restaurant.info.id} restData={restaurant} /> :
               <RestaurantCard key={restaurant.info.id} restData={restaurant} />
            }
            
          </Link>
        )}
        )}
      </div>

    </div>
  );
};

export default Body;