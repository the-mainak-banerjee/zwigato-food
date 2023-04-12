import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div>
      <h1>Restaurant List</h1>
      <div className="restaurant-card-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
export default RestaurantList;
