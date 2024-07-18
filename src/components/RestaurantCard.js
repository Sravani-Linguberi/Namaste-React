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
      <div className="restCard">
        <img
          className="restImg"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Restaurant"
          onError={imgError}
        />
        <div className="res-name">{name} </div>
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