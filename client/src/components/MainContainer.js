import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import HomePage from "./HomePage";
import RandomAnimalsPage from "./RandomAnimalsPage";
import FilterPage from "./FilterPage";

const MainContainer = () => {
  return (
    <Container className="main-root">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/randomanimals" component={RandomAnimalsPage} />
        <Route path="/filter" component={FilterPage} />
      </Switch>
    </Container>
  );
};

export default MainContainer;
