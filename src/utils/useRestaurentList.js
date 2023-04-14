import { useEffect, useState } from "react";
import { filteredData } from "./helper";

const useRestaurentList = () => {
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

  const getSearchedRestaurants = (searchTerm) => {
    setSearchedRestaurants(filteredData(restaurants, searchTerm));
  };

  return { restaurants, searchedRestaurants, error, getSearchedRestaurants };
};

export default useRestaurentList;
