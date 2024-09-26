import { useEffect, useState } from "react";
import Menu from "./Menu";

const RestaurantCategory = ({ data }) => {
  console.log(data.itemCards[0].card, " RestaurantCategory", data);
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      {/* heading */}
      <div
        className="w-6/12 mx-auto p-3 bg-gray-50 shadow-md my-5 flex justify-between"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span>{data.title}</span>
        <span> {isActive ? "-" : "+"} </span>
      </div>
      {/* discription */}
      <div>
        {isActive &&
          data.itemCards.map((val) => (
            <Menu key={val?.card?.info?.id} itemDetails={val?.card} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
