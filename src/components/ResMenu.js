import { useEffect, useState } from "react";
import { resMenuUrl } from '../utils/constants';
import { useParams } from "react-router-dom";
import Menu from './Menu';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';


const ResMenu = () => {
    const {resId} = useParams();
    const [resData, restaurantMenu]  = useRestaurantMenu(resId);
   
    return restaurantMenu?.length ? (
        <>
            <div className="font-bold text-center mx-auto my-10 text-xl" >
                { resData?.data?.cards[0]?.card?.card?.text }
            </div>    
            {
                restaurantMenu?.map(val => <RestaurantCategory key={val.card.card.title} data={val?.card?.card}/>)
                // restaurantMenu?.map(val => <Menu key={val?.card?.info?.id} itemDetails= {val?.card}/>)
            }
        </>
    ) : <> <h3>Loading menu</h3> <Shimmer/></>
}

export default ResMenu;