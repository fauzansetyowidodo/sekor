import React from "react";

import Button from "elements/Button";

import BrandIcon from "assets/images/logo.svg";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Button className="brand-icon" type="link" href="/">
            <img src={BrandIcon} alt="Brand Icon" />
          </Button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/about-us")}`}>
                <Button className="nav-link" type="link" href="/about-us">
                  About Us
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="/news">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/career")}`}>
                <Button className="nav-link" type="link" href="/career">
                  Career
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/contact")}`}>
                <Button className="nav-link" type="link" href="/contact">
                  Contact
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className="btn px-4"
                  isPrimary
                  type="link"
                  href={`/login`}
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
