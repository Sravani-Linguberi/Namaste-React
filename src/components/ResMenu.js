import { useEffect, useState } from "react";
import { resMenuUrl } from '../utils/constants';
import { useParams } from "react-router-dom";
import Menu from './Menu';
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const ResMenu = () => {
    const {resId} = useParams();
    const [resData, restaurantMenu]  = useRestaurantMenu(resId);
    console.log(resData, restaurantMenu)
   
    return restaurantMenu?.length ? (
        <div>
            <h2 style={{margin : "5% 20%"}}>
                { resData?.data?.cards[0]?.card?.card?.text }
            </h2>
            {
                restaurantMenu?.map(val => <Menu key={val?.card?.info?.id} itemDetails= {val?.card}/>)
            }
        </div>
    ) : <> <h3>Loading menu</h3> <Shimmer/></>
}

export default ResMenu;