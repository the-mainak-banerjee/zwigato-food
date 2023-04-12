/**App Layout
 * Header
 *  Logo
 *  Nav Bar
 *  Cart
 * Body
 *  ResturantLists
 *    ResturantCard
 *      Images
 *      Name
 *      Ratings
 *      Cuisins
 *      Distance/Address
 * Footer
 *  Copyright (c)
 */

import Header from "./components/header/Header";
import RestaurantList from "./components/restaurantList/RestaurantList";

const App = () => {
  return (
    <>
      <Header />
      <RestaurantList />
    </>
  );
};

export default App;
