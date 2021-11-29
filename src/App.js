import './App.css';
import Rate from "./Rate";

function App() {

  return (
    <div className="App">
        <Rate currency="USD"/>
        <Rate currency="GBP"/>
        <Rate currency="EUR"/>
    </div>
  );
}

export default App;
