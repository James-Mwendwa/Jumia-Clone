import "./App.css";
import Header from "./Header";
import Home from "./Home";

const url = "http://localhost:8000/schema";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
