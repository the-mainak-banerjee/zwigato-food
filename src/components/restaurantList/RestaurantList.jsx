import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../../config";

const RestaurantList = () => {
  console.log(RestaurantData[0]);
  return (
    <div>
      <h1>Restaurant List</h1>
      <div className="restaurant-card-container">
        <RestaurantCard restaurantOptions={RestaurantData[0]?.data} />
        <RestaurantCard restaurantOptions={RestaurantData[1]?.data} />
        <RestaurantCard restaurantOptions={RestaurantData[2]?.data} />
        <RestaurantCard restaurantOptions={RestaurantData[3]?.data} />
        <RestaurantCard restaurantOptions={RestaurantData[4]?.data} />
      </div>
    </div>
  );
};
export default RestaurantList;
