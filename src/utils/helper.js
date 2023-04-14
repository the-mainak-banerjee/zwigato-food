export const filteredData = (restaurants, searchTerm) => {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
};
