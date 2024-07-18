import { useEffect, useState } from "react";
import { resMenuUrl } from '../utils/constants';
import { useParams } from "react-router-dom";
import Menu from './Menu';

const ResMenu = () => {

    const [restaurantMenu , setRestaurantMenu] = useState([]);
    const [resData , setResData] = useState();
    useEffect(()=>{
        loadData();
    },[])

    const params = useParams();

    const loadData = async () => {
        let res = await fetch(resMenuUrl+params.resId);
        res = await res.json();
        setResData(res)
        setRestaurantMenu(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return (
        <div>
            <h2 style={{margin : "5% 20%"}}>
                { resData?.data?.cards[0]?.card?.card?.text }
            </h2>
            {
                restaurantMenu.map(val => <Menu key={val?.card?.info?.id} itemDetails= {val?.card}/>)
            }

        </div>
    )
}

export default ResMenu;