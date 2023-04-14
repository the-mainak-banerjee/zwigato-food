import { useState, useEffect } from "react";

const useRestaurent = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  const getRestaurentMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=${resId}&submitAction=ENTER`
    );
    const data = await response.json();
    setRestaurant(data?.data?.cards?.[0]?.card?.card?.info);
  };

  return restaurant;
};

export default useRestaurent;
