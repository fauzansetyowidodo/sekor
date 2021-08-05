import React from "react";

export default function Advantage(props) {
  return (
    <section className="container advan">
      <div className="row">
        <div className="col-sm-12">
          <p className="title">Advantage</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 ">
          <h1>
            We don't make football, <br />
            we make football better
          </h1>
        </div>
        <div className="col-sm-6">
          <p>
            By providing more than 10 championships and leagues from around the
            world <br /> we provide all information related to football from all
            over the world. Now you <br /> will find it easier to get football
            updates anywhere and anytime. <br />
            <br /> Get more deep about football with us and get more advantage
            to know about football
          </p>
        </div>
      </div>

      <div className="container-grid advan">
        {props.data.map((item, index) => {
          return (
            <div className="item column-4 row-1" key={`items-${index}`}>
              <figure className="img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="img-cover"
                />
              </figure>
              <div className="title">
                <h3>{item.name}</h3>
              </div>
              <div className="desc">
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
