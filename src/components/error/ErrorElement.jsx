import { useRouteError } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const ErrorElement = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="error-container">
      <Header />
      <h1>Oops!</h1>
      <h3>Something really wrong</h3>
      <div>
        <p>{status}</p>
        <p>{statusText}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorElement;
