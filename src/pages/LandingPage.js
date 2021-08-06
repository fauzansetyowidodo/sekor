import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Advantage from "parts/Advantage";
import Banner from "parts/Banner";
import Feature from "parts/Feature";
import Download from "parts/Download";
import Footer from "parts/Footer";

import landingPage from "../json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refDownload = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <Hero refDownload={this.refDownload} />
        <Advantage data={landingPage.advantage} />
        <Banner />
        <Feature data={landingPage.features} />
        <Download refDownload={this.refDownload} />
        <Footer />
      </React.Fragment>
    );
  }
}
