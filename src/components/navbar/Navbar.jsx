import LogoMobile from "../../assets/LogoMobile.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoMobile} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/classes">Classes</a>
        </li>
        <li>
          <a href="/instuctors">Instructors</a>
        </li>
        <li>
          <a href="/aboutus">About Us</a>
        </li>
        <li>
          <a href="/signin">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};
