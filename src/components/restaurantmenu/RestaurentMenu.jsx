import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurent from "../../utils/useRestaurent";

const RestaurentMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurent(id);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>{restaurant?.name}</h2>
      <img
        src={`${process.env.REACT_APP_IMAGE_URL}${restaurant.cloudinaryImageId}`}
      />
      <p>
        {restaurant?.locality}, {restaurant?.city}
      </p>
    </>
  );
};

export default RestaurentMenu;
