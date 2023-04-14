import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline.js";
import useRestaurentList from "../../utils/useRestaurentList";

const RestaurantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isOnline = useOnline();
  const { restaurants, searchedRestaurants, error, getSearchedRestaurants } =
    useRestaurentList();

  if (restaurants?.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!isOnline) {
    return <p> 🔴 You are offline now</p>;
  }

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
          onClick={() => getSearchedRestaurants(searchTerm)}
        >
          search
        </button>
      </div>
      <div className="restaurant-card-container">
        {searchedRestaurants?.length > 0 ? (
          <>
            {searchedRestaurants.map((restaurant) => (
              <Link
                to={`restaurent/${restaurant?.data?.id}`}
                key={restaurant?.data?.id}
              >
                <RestaurantCard restaurantOptions={restaurant?.data} />
              </Link>
            ))}
          </>
        ) : (
          <p>No results match your search</p>
        )}
      </div>
    </div>
  );
};
export default RestaurantList;
