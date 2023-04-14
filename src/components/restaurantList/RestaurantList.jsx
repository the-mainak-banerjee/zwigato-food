import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const filerdData = (restaurants, searchTerm) => {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
};

const RestaurantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCall();
  }, []);

  const fetchCall = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_RESTAURANT_LISTING_URL);
      const data = await res.json();
      setRestaurants(data?.data?.cards?.[2]?.data?.data?.cards);
      setSearchedRestaurants(data?.data?.cards?.[2]?.data?.data?.cards);
    } catch (err) {
      setError(err);
    }
  };

  if (restaurants?.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
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
          onClick={() =>
            setSearchedRestaurants(filerdData(restaurants, searchTerm))
          }
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
