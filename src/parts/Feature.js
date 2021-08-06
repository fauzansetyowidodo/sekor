import React from "react";

export default function Feature({ data }) {
  return (
    <section className="container feature">
      {data.map((item, index) => {
        return (
          <div className="container align-middle">
            <div className="row align-items-center" key={`feature-${index}`}>
              <div className="col-6">
                <p className="kecil">{item.category}</p>
                <h1>{item.title}</h1>
                <p className="desc">{item.desc}</p>
              </div>
              <div className="col">
                <figure>
                  <img src={item.imageUrl} alt="" />
                </figure>
              </div>
            </div>
            ;
          </div>
        );
      })}
    </section>
  );
}
