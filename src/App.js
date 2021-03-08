import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import Daftar from "./views/Daftar";
import Masuk from "./views/Masuk";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/daftar" exact component={Daftar} />
        <Route path="/masuk" exact component={Masuk} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
