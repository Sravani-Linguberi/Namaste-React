import { menuImg } from "../utils/constants";

const Menu = (props) => {
  const {
    imageId,
    name,
    ratings: { aggregatedRating },
    description,
    price,
    defaultPrice,
  } = props.itemDetails.info;

  return (
    <>
      <div className="menu-card flex justify-between w-6/12 mx-auto my-2 px-8 py-3 shadow-sm border-b-2">
        <div className="w-9/12">
          <h4 className="font-bold">{name}</h4>
          <p className="font-bold">
            {" "}
            ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
          <p>{description}</p>
        </div>
        <div className="h-30 w-3/12 p-4">
          <div className="absolute ">
            <button className="shadow-md text-green-500 rounded-md border-spacing-2 bg-white font-bold px-8 py-2 mx-5 my-28">
              Add
            </button>
          </div>
          <img className="menu-img border rounded-lg" src={menuImg + imageId} />
        </div>
      </div>
    </>
  );
};

export default Menu;