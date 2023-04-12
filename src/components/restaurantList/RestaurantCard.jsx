const restaurantOptions = {
  imageId: "28fb13049b4e55297bb3f703cde63c35",
  name: "Burger King",
  rating: "4.3",
  cuisins: ["Burgers", "Americans"],
  maxDeliveryTime: "32 MINS",
  displayPrice: "₹350 FOR TWO",
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantOptions.imageId}`}
          alt={restaurantOptions.name}
          className="restaurant-image"
        />
      </div>
      <div>
        <h2>{restaurantOptions.name}</h2>
        <p>{restaurantOptions.cuisins.join(",")}</p>
      </div>
      <div className="restaurant-info-secondary">
        <p>{restaurantOptions.rating}</p>
        <p>{restaurantOptions.maxDeliveryTime}</p>
        <p>{restaurantOptions.displayPrice}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
