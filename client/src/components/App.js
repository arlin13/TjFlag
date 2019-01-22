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
import TeamDetails from "./teams/TeamDetails";
import Players from "./players/Players";
import PlayerNew from "./players/PlayerNew";
import PlayerDetails from "./players/PlayerDetails";
import Courts from "./courts/Courts";
import CourtNew from "./courts/CourtNew";
import CourtDetails from "./courts/CourtDetails";
import Stats from "./Stats";
import Footer from "./Footer";

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
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/new" component={TeamNew} />
            <Route path="/teams/details" component={TeamDetails} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/players/new" component={PlayerNew} />
            <Route path="/players/details" component={PlayerDetails} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/courts" component={Courts} />
            <Route exact path="/courts/new" component={CourtNew} />
            <Route path="/courts/details" component={CourtDetails} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var chipsElems = document.querySelectorAll(".chips");
  var selectElems = document.querySelectorAll("select");
  var sideNavElems = document.querySelectorAll(".sidenav");
  var carouselElems = document.querySelectorAll(".carousel");
  var datePickerElems = document.querySelectorAll(".datepicker");
  var collapsibleElems = document.querySelectorAll(".collapsible");
  var autocompleteElems = document.querySelectorAll(".autocomplete");
  M.Chips.init(chipsElems, {});
  M.FormSelect.init(selectElems, {});
  M.Carousel.init(carouselElems, {
    numVisible: 1,
    indicators: true
  });
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
