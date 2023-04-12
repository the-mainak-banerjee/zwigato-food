const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="/">
          <img
            src={
              "https://wp.scoopwhoop.com/wp-content/uploads/2022/09/Screenshotter-YouTube-ZwigatoInternationalTrailerKapilSharmaShahanaGoswamiNanditaDas-124-1.jpg?w=1024"
            }
            alt="logo"
            className="header-logo"
          />
        </a>
        <ul className="header-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div>
          <button className="button">Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
