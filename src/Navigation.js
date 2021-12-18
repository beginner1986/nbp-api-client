import './Navigation.css';
import NavigationBar from "./components/NavigationBar";
import HamburgerMenu from "./components/HamburgerMenu";

function Navigation() {
  return (
    <header>
        <HamburgerMenu id="hamburger"/>
        <NavigationBar id="navbar"/>
    </header>
  );
}

export default Navigation;
