import React from "react";
import "./App.css";
import M from "materialize-css";
import Sidenav from "./Components/Nav/Sidenav";
import Topnav from "./Components/Nav/Topnav";
import Secondarynav from "./Components/Nav/Secondarynav";
import Home from "./Components/Pages/Home";
import LeftAdd from "./Components/Ads/LeftAd";
import RightAdd from "./Components/Ads/RightAd";
import TopBanner from "./Components/Ads/TopBanner";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <Router>
        <Topnav />
        <Sidenav />
        <div className="container">
          <img
            src="https://lensasriwijaya.com/wp-content/uploads/2020/04/Banner-Pemkab-Muba.jpg"
            alt="banner"
            className="banner"
          />
        </div>
        <LeftAdd />
        <RightAdd />
        <Secondarynav />
        <TopBanner />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
