import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../../config";
import { useState } from "react";

const filerdData = (restaurants, searchTerm) => {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
};

const RestaurantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantData);
  return (
    <div>
      <div className="restaurant-search-container">
        <input
          className="input"
          type="text"
          placeholder="search for a restaurant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="button"
          onClick={() => setRestaurants(filerdData(restaurants, searchTerm))}
        >
          search
        </button>
      </div>
      <div className="restaurant-card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurantOptions={restaurant?.data} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantList;
