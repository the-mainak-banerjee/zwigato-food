const RestaurantCard = ({ restaurantOptions }) => {
  console.log(process.env.REACT_APP_IMAGE_URL);
  return (
    <div className="restaurant-card">
      <div>
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${restaurantOptions?.cloudinaryImageId}`}
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
