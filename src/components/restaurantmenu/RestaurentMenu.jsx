import React from "react";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { id } = useParams();
  return (
    <>
      <div>Restaurent Menu of id {id}</div>
    </>
  );
};

export default RestaurentMenu;
