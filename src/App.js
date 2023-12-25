import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
