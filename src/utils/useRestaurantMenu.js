import { useEffect, useState } from "react";
import { resMenuUrl } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo , setresInfo] = useState();
    const [restaurantMenu , setRestaurantMenu] = useState([]);
    /** this is a custom hook which takes one argument id and returns 2 values in the array.
     * obseravtion : we can't create a normal variable and store and return the value. cause it won't update value with fetched data.
     */

    useEffect(()=>{
        const loadData = async () =>{
            const data = await fetch(resMenuUrl+resId);
            const res = await data.json();
            setresInfo(res);
            setRestaurantMenu(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        } 
        loadData();
    },[])

    return [resInfo , restaurantMenu] 
    // return [resInfo, resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards]; or above one
}

export default useRestaurantMenu;
