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

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RestaurantList from "./components/restaurantList/RestaurantList";

const App = () => {
  return (
    <>
      <Header />
      <RestaurantList />
      <Footer />
    </>
  );
};

export default App;
