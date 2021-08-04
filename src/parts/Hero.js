import React from "react";

import Button from "elements/Button";

import Apple from "assets/images/icons/apple.svg";
import Mockup from "assets/images/mockup-hero.png";
import Emblem1 from "assets/images/emblem/emblem1.png";
import Emblem2 from "assets/images/emblem/emblem2.png";
import Emblem3 from "assets/images/emblem/emblem3.png";
import Emblem4 from "assets/images/emblem/emblem4.png";
import Emblem5 from "assets/images/emblem/emblem5.png";
import Emblem6 from "assets/images/emblem/emblem6.png";
import Emblem7 from "assets/images/emblem/emblem7.png";
import Emblem8 from "assets/images/emblem/emblem8.png";
import Emblem9 from "assets/images/emblem/emblem9.png";
import Emblem10 from "assets/images/emblem/emblem10.png";
import Emblem11 from "assets/images/emblem/emblem11.png";
import Fifa from "assets/images/fifa.png";
import Espn from "assets/images/espn.png";
import Bein from "assets/images/bein.png";
import Olympic from "assets/images/olympic.png";

export default function Hero() {
  return (
    <section className="container">
      <div className="row">
        <div className="row col-sm-12">
          <h1 className="line-height-1 mb-5">
            When the going gets tough, <br />
            the tough get football
          </h1>
        </div>
        <div className="row col-sm-12">
          <p className="mb-5">Discover the football difference</p>
        </div>
        <div className="row col-sm-12 mb-4">
          <Button className="btn" isPrimary type="link" href={`/download`}>
            Download now <img className="img" src={Apple} alt="Icon Apple" />
          </Button>
        </div>
      </div>

      <div className="row mock mt-5">
        <div className="col-sm-4 left">
          <div className="row justify-content-start">
            <img
              src={Emblem1}
              alt="emblem1"
              className="emblem"
              style={{ paddingLeft: 80 }}
            />
          </div>
          <div className="row justify-content-end">
            <img
              src={Emblem2}
              alt="emblem2"
              className="emblem"
              style={{ paddingRight: 60 }}
            />
          </div>
          <div className="row justify-content-start">
            <img
              src={Emblem3}
              alt="emblem3"
              className="emblem"
              style={{ paddingLeft: 30 }}
            />
          </div>
          <div className="row justify-content-end">
            <img
              src={Emblem4}
              alt="emblem4"
              className="emblem "
              style={{ paddingRight: 30 }}
            />
          </div>
          <div className="row justify-content-start">
            <img
              src={Emblem5}
              alt="emblem5"
              className="emblem"
              style={{ paddingLeft: 60 }}
            />
          </div>
          <div className="row justify-content-end">
            <img
              src={Emblem6}
              alt="emblem6"
              className="emblem"
              style={{ paddingRight: 60 }}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <img src={Mockup} alt="mck hero" className="mockup img-fluid" />
        </div>
        <div className="col-sm-4 right">
          <div className="row justify-content-start">
            <img
              src={Emblem7}
              alt="emblem7"
              className="emblem"
              style={{ paddingLeft: 70 }}
            />
          </div>
          <div className="row justify-content-end">
            <img
              src={Emblem8}
              alt="emblem8"
              className="emblem"
              style={{ paddingRight: 110 }}
            />
          </div>
          <div className="row justify-content-start">
            <img
              src={Emblem9}
              alt="emblem9"
              className="emblem"
              style={{ paddingLeft: 50 }}
            />
          </div>
          <div className="row justify-content-end">
            <img
              src={Emblem10}
              alt="emblem10"
              className="emblem"
              style={{ paddingRight: 70 }}
            />
          </div>
          <div className="row justify-content-start">
            <img
              src={Emblem11}
              alt="emblem11"
              className="emblem"
              style={{ paddingLeft: 30 }}
            />
          </div>
        </div>
      </div>

      <div className="row partner mb-5">
        <div className="row col-sm-12">
          <p>Our Partnership</p>
        </div>
        <div className="row logo m-auto">
          <div class="col-sm-3">
            <img src={Fifa} alt="fifa" className="logo1" />
          </div>
          <div class="col-sm-3">
            <img src={Espn} alt="espn" className="logo1" />
          </div>
          <div class="col-sm-3">
            <img src={Bein} alt="bein" className="logo2" />
          </div>
          <div class="col-sm-3">
            <img src={Olympic} alt="olympic" className="logo2" />
          </div>
        </div>
      </div>
    </section>
  );
}
