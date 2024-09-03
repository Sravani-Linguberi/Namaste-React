import { CDN_URL , dummyImg} from '../utils/constants';

const RestaurantCard = (props) => {
  const imgError = (e) => {
    console.log(e, " e");
    e.target.src = dummyImg;
  }
    const {
      name,
      costForTwo,
      avgRating,
      areaName,
      cuisines,
      cloudinaryImageId,
      sla: { deliveryTime },
    } = props?.restData?.info;
    return (
      <div className="restCard bg-[lightgoldenrodyellow] w-[200px] p-3 m-2 rounded-xl hover:cursor-pointer">
        <img
          className="restImg h-[200px] rounded-xl"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Restaurant"
          onError={imgError}
        />
        <div className="res-name font-bold py-1 text-lg">{name} </div>
        <div>{costForTwo}</div>
        <div>
          {avgRating} Rating - {deliveryTime} mins{" "}
        </div>
        <div>{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    );
};

export default RestaurantCard;