import React from "react";

import Button from "elements/Button";
import Logo from "../assets/images/logo.svg";
import Ig from "assets/images/icons/ig.svg";
import Wp from "assets/images/icons/wikped.svg";
import Tw from "assets/images/icons/twitter.svg";
import Yt from "assets/images/icons/yt.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={Logo} alt="Logo Footer" />
          </div>
          <div className="col">
            <h5>Product</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/overview">
                  Overview
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/features">
                  Features
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/tutorials">
                  Tutorials
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/pricing">
                  Pricing
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/releases">
                  Releases
                </Button>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/press">
                  Press
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/contact">
                  Contact
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/partners">
                  Partners
                </Button>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Support</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/help-center">
                  Help Center
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term of service
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/legal">
                  legal
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Status">
                  Status
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 copyrights">
            Copyright 2021 • All rights reserved • Sekor
          </div>
          <div className="col-sm-6 sosmed text-right">
            <Button type="link" href="/ig" className="button">
              <img src={Ig} alt="ig" />
            </Button>
            <Button type="link" href="/wikped" className="button">
              <img src={Wp} alt="wikped" />
            </Button>
            <Button type="link" href="/twitter" className="button">
              <img src={Tw} alt="twitter" />
            </Button>
            <Button type="link" href="/youtube" className="button">
              <img src={Yt} alt="youtube" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
