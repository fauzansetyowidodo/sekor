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
        <h1 className="line-height-1 mb-5">
          When the going gets tough, <br />
          the tough get football
        </h1>
        <p className="mb-5 w-100">Discover the football difference</p>
        <Button className="btn" isPrimary type="link" href={`/download`}>
          Download now <img className="img" src={Apple} alt="Icon Apple" />
        </Button>
      </div>
      <div className="bg">
        <div className="row">
          <div className="row row-cols-1">
            <div className="ebm">
              <img
                src={Emblem1}
                alt="emblem1"
                className="emblem float-left"
                style={{ marginLeft: 80 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem2}
                alt="emblem2"
                className="emblem float-right "
                style={{ marginRight: 30 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem3}
                alt="emblem3"
                className="emblem float-left "
                style={{ marginLeft: 50 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem4}
                alt="emblem4"
                className="emblem float-right "
                style={{ marginRight: 10 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem5}
                alt="emblem5"
                className="emblem float-left "
                style={{ marginLeft: 80 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem6}
                alt="emblem6"
                className="emblem float-right "
                style={{ marginRight: 70 }}
              />
            </div>
          </div>
          <div className="col ml-5">
            <img
              src={Mockup}
              alt="mck hero"
              className="mockup position-absolute"
            />
          </div>
          <div className="row row-cols-1">
            <div className="ebm">
              <img
                src={Emblem7}
                alt="emblem7"
                className="emblem float-left"
                style={{ marginLeft: -50 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem8}
                alt="emblem8"
                className="emblem float-right "
                style={{ marginRight: 130 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem9}
                alt="emblem9"
                className="emblem float-left"
                style={{ marginLeft: -70 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem10}
                alt="emblem10"
                className="emblem float-right "
                style={{ marginRight: 100 }}
              />
            </div>
            <div className="ebm">
              <img
                src={Emblem11}
                alt="emblem11"
                className="emblem float-left "
                style={{ marginLeft: -80 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row spont">
        <p className="w-100">Our Partnership</p>
        <div className="spontsor">
          <div class="row ">
            <div class="col-3">
              <img
                src={Fifa}
                alt=""
                className="logo"
                style={{ width: 100, height: 30 }}
              />
            </div>
            <div class="col-3">
              <img
                src={Espn}
                alt=""
                className="logo"
                style={{ width: 130, height: 30 }}
              />
            </div>
            <div class="col-3">
              <img
                src={Bein}
                alt=""
                className="logo"
                style={{ width: 110, height: 50 }}
              />
            </div>
            <div class="col-3">
              <img
                src={Olympic}
                alt=""
                className="logo"
                style={{ width: 100, height: 40 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
