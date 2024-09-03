import {menuImg } from '../utils/constants';

const Menu = (props) => {
    const { imageId , name, ratings : {aggregatedRating }, description , defaultPrice} = props.itemDetails.info
    console.log(props.itemDetails.info, name, "===", defaultPrice)

    return (<>
    <div className='menu-card flex justify-between mx-10 my-2 px-8'>
        <div >
            <h4>{name}</h4>
            <p>{defaultPrice/100}</p>
            <p>{description}</p>
        </div>
        <div><img className='menu-img h-32 w-32 border rounded-md' src={menuImg+imageId}/></div>
    </div>
    </>)
}

export default Menu;