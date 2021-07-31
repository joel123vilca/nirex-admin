import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import Orders from "./components/Orders/Orders";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/pedidos" component={Orders} exact />
            <Route path="/detail" component={Detail} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
