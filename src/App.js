import './App.css';
import { NavLink, Outlet} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <h1>KURSY WALUT NBP</h1>
        <nav>
            <NavLink to="/" className="nav-element">Najpopularniejsze</NavLink>
            <NavLink to="/tab-a" className="nav-element">Tabela A</NavLink>
            <NavLink to="/tab-b" className="nav-element">Tabela B</NavLink>
            <NavLink to="/all" className="nav-element">Wszystkie</NavLink>
        </nav>
        <Outlet/>
    </div>
  );
}

export default App;
