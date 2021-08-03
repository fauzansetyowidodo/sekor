import React from "react";

import Button from "elements/Button";

import Apple from "assets/images/icons/apple.svg";

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
    </section>
  );
}
