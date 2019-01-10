import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import Header from "./Header";
import Landing from "./Landing";
import Teams from "./teams/Teams";
import TeamNew from "./teams/TeamNew";
import Players from "./players/Players";
import PlayerNew from "./players/PlayerNew";
import Stats from "./Stats";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="#eceff1 blue-grey darken-4 white-text">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/new" component={TeamNew} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/players/new" component={PlayerNew} />
            <Route path="/stats" component={Stats} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var chipsElems = document.querySelectorAll(".chips");
  var sideNavElems = document.querySelectorAll(".sidenav");
  var datePickerElems = document.querySelectorAll(".datepicker");
  var collapsibleElems = document.querySelectorAll(".collapsible");
  var autocompleteElems = document.querySelectorAll(".autocomplete");
  M.Chips.init(chipsElems, {});
  M.Datepicker.init(datePickerElems, {});
  M.Collapsible.init(collapsibleElems, {});
  M.Autocomplete.init(autocompleteElems, {});
  M.Sidenav.init(sideNavElems, {
    inDuration: 350,
    outDuration: 350,
    edge: "left"
  });
});

export default connect(
  null,
  actions
)(App);
