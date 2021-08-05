import React from "react";

import Feature1 from "assets/images/feature1.png";
import Feature2 from "assets/images/feature2.png";
import Feature3 from "assets/images/feature3.png";
import Feature4 from "assets/images/feature4.png";
import Feature5 from "assets/images/feature5.png";

export default function Banner() {
  return (
    <section className="container feature">
      <div className="row tp">
        <div className="col-sm lg" style={{ marginLeft: 50 }}>
          <img src={Feature1} alt="" className="" />
          <img src={Feature4} alt="" className="" style={{ marginTop: 71 }} />
        </div>
        <div className="col-sm" style={{ marginLeft: -10 }}>
          <img src={Feature3} alt="" className="" style={{ marginTop: 105 }} />
        </div>
        <div className="col-sm" style={{ marginLeft: -10 }}>
          <img src={Feature2} alt="" className="" />
          <img src={Feature5} alt="" className="" style={{ marginTop: 77 }} />
        </div>

        <div className="col-sm-5" style={{ marginTop: 105 }}>
          <div className="row">
            <p>Lorem ipsum</p>
          </div>
          <div className="row">
            <h1>
              Excepteur sint occaecat <br />
              cupidatat non proident
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
