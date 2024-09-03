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
      <div className="restCard bg-[lightgoldenrodyellow] w-[200px] p-3 mx-6 my-4 rounded-xl hover:cursor-pointer">
        <img
          className="restImg w-[250px] h-[150px] rounded-xl"
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

export const withTopRatedLabel = (RestaurantCardIn) => { // higher order component
  return (props) => { //restData will pass here
    return <>
      <div className='absolute mt-2 ml-4 bg-slate-700 text-white rounded-md'>topRated</div>
      <RestaurantCardIn {...props}/>
    </>
  }
}

export default RestaurantCard;