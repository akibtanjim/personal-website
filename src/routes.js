import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./containers/Home/Home";
import Experience from "./containers/Experience/Experience";
import Project from "./containers/Project/Project";
import Education from "./containers/Education/Education";
import Skill from "./containers/Skill/Skill";
import history from "./utils/history";

export default (
  <Router history={history}>
    <Route path="/">
      <div>
        <Route path="/experience" component={Experience} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
        <Route path="/skill" component={Skill} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </div>
    </Route>
  </Router>
);
