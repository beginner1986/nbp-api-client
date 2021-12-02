import './App.css';
import MostPopularRates from "./components/MostPopularRates";
import {Link, Outlet} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <h1>KURSY WALUT NBP</h1>
        <nav>
            <Link to="/most-popular">Najpopularniejsze</Link>
            <Link to="/tab-a">Tabela A</Link>
            <Link to="/tab-b">Tabela B</Link>
            <Link to="/all">Wszystkie</Link>
        </nav>
        <Outlet/>
    </div>
  );
}

export default App;
