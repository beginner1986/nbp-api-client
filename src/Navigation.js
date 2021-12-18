import './Navigation.css';
import NavigationBar from "./components/navigation/NavigationBar";
import HamburgerMenu from "./components/navigation/HamburgerMenu";

function Navigation() {
  return (
    <header>
        <HamburgerMenu id="hamburger"/>
        <NavigationBar id="navbar"/>
    </header>
  );
}

export default Navigation;
