import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Advantage from "parts/Advantage";

import landingPage from "../json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <Hero />
        <Advantage data={landingPage.advantage} />
      </React.Fragment>
    );
  }
}
