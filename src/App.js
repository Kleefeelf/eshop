import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Catalog from "./Catalog";
import ItemPage from "./ItemPage";
import SuccessPage from "./CartComponents/SuccessPage";
import { useSelector } from "react-redux";
import cart from "./cart";
import Checkout from "./CartComponents/Checkout";
import Login from "./LogReg/Login";
import Reg from "./LogReg/Reg";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  var logged = useSelector((state) => state.logged);
  useEffect(() => {
    setIsAuth(logged);
  });

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/catalog" component={Catalog} />
        <ProtectedRoute exact path="/catalog/:name" component={ItemPage} />
        <ProtectedRoute
          path="/catalog/filters/:filterName"
          exact
          component={Catalog}
        />
        <ProtectedRoute exact path="/cart" component={cart} />
        <ProtectedRoute exact path="/cart/checkout" component={Checkout} />
        <ProtectedRoute
          exact
          path="/cart/checkout/success"
          component={SuccessPage}
        />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Reg} />
      </Switch>
    </Router>
  );
}

export default App;
