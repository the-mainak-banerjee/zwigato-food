import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Header = () => {
  const isOnline = useOnline();
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img
            src={
              "https://wp.scoopwhoop.com/wp-content/uploads/2022/09/Screenshotter-YouTube-ZwigatoInternationalTrailerKapilSharmaShahanaGoswamiNanditaDas-124-1.jpg?w=1024"
            }
            alt="logo"
            className="header-logo"
          />
        </Link>
        <ul className="header-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="header-right-bar">
          <button className="button">Cart</button>
          <p>{isOnline ? "🟢" : "🔴"}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
