import { useEffect, useState } from "react";
import Menu from "./Menu";

const RestaurantCategory = ({ data , showItem, setShowItemCD }) => {
  // console.log(data.itemCards[0].card, " RestaurantCategory", data);
  // const [isActive, setIsActive] = useState(true);

  return (
    <div>
      {/* heading */}
      <div
        className="w-6/12 mx-auto p-3 bg-gray-50 shadow-md my-5 flex justify-between"
        onClick={() => {
          setShowItemCD()
          console.log(showItem)
        }}
      >
        <span>{data.title}</span>
        <span> {showItem ? "-" : "+"} </span>
      </div>
      {/* discription */}
      <div>
        {showItem &&
          data.itemCards.map((val) => (
            <Menu key={val?.card?.info?.id} itemDetails={val?.card} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
