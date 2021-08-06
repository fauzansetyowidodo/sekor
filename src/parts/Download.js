import React from "react";

import Button from "../elements/Button";

import Appstore from "assets/images/appstore.png";
import Playstore from "assets/images/googleplay.png";
import Mockup1 from "assets/images/download-mockup1.png";
import Mockup2 from "assets/images/download-mockup2.png";

export default function Download(props) {
  return (
    <div className="row non-container" ref={props.refDownload}>
      <section className="container download">
        <div className="row">
          <div className="col-sm-5">
            <h1>
              Excepteur sint occaecat <br />
              cupidatat non proident
            </h1>
            <p>--Lorem ipsum dolor sit amet consectaur adipiscing</p>
            <div className="Button">
              <Button type="link" href={`/google-play`}>
                <img src={Playstore} alt="Playstore" />
              </Button>
              <Button className="ml-3" type="link" href={`/app-store`}>
                <img src={Appstore} alt="Appstore" />
              </Button>
            </div>
          </div>
          <div className="col-sm" style={{ marginTop: 35 }}>
            <img src={Mockup1} alt="Mockup1" />
          </div>
          <div className="col-sm" style={{ marginTop: -100 }}>
            <img src={Mockup2} alt="Mockup2" />
          </div>
        </div>
      </section>
    </div>
  );
}
