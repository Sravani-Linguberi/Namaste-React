import RestaurantCard from './RestaurantCard';
import {restaurantsList} from '../utils/mockData';

const Body = () => {
    return (
      <div className="card-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    );
};

export default Body;