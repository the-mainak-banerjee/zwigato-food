const RestaurantCard = ({ restaurantOptions }) => {
  return (
    <div className="restaurant-card">
      <div>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantOptions?.cloudinaryImageId}`}
          alt={restaurantOptions?.name}
          className="restaurant-image"
        />
      </div>
      <div>
        <h2>{restaurantOptions?.name}</h2>
        <p>{restaurantOptions?.cuisines?.join(",")}</p>
      </div>
      <div className="restaurant-info-secondary">
        <p>{restaurantOptions?.avgRating}</p>
        <p>{restaurantOptions?.maxDeliveryTime}</p>
        <p>{restaurantOptions?.costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
