import logo from "../../assets/logo.png";
import logoPC from "../../assets/logoPC.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} alt="logotype" className="header__logo" />
        <img src={logoPC} alt="logotype" className="header__logoPC" />
      </div>
    </header>
  );
};
