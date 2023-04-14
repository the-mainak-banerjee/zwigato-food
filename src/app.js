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

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
