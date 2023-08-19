const Header = () => {
  return (
    <div id="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <img className="logo" src="../assets/company-logo.jpg" alt="" />
          </li>
          <li className="nav-item">
            <a href="">Rent</a>
          </li>
          <li className="nav-item">
            <a href="">Buy</a>
          </li>
          <li className="nav-item">
            <a href="">Sell</a>
          </li>
          <li className="nav-item">
            <label htmlFor="properties">Manage Properties</label>
            <select name="properties" id="properties"></select>
          </li>
          <li className="nav-item">
            <a href="">Resources</a>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn">
            <a href="">Login</a>
          </button>
          <button className="btn">
            <a href="">Sign Up</a>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
