import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, StoryDetail } from "../containers";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/story-detail/:id">
          <StoryDetail />
        </Route>
      </Switch>
    </Router>
  );
};
