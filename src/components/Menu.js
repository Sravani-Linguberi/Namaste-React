import {menuImg } from '../utils/constants';

const Menu = (props) => {
    const { imageId , name, ratings : {aggregatedRating }, description , defaultPrice} = props.itemDetails.info
    console.log(props.itemDetails.info, name, "===", defaultPrice)

    return (<>
    <div className='menu-card'>
        <div >
            <h4>{name}</h4>
            <p>{defaultPrice/100}</p>
            <p>{description}</p>
        </div>
        <div><img className='menu-img' src={menuImg+imageId}/></div>
    </div>
    </>)
}

export default Menu;