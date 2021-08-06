import React from "react";

export default function Feature({ data }) {
  return data.map((category, index1) => {
    if (index1 % 2 === 0) {
      return (
        <section className="container feature" key={`caategory-${index1}`}>
          {category.items.map((item, index2) => {
            return (
              <div className="container align-middle">
                <div
                  className="row align-items-center"
                  key={`feature-${index2}`}
                >
                  <div className="col-6">
                    <p className="kecil">{item.bag}</p>
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
    } else {
      return (
        <section className="container feature" key={`caategory-${index1}`}>
          {category.items.map((item, index2) => {
            return (
              <div className="container align-middle">
                <div
                  className="row align-items-center"
                  key={`feature-${index2}`}
                >
                  <div className="col">
                    <figure>
                      <img src={item.imageUrl} alt="" />
                    </figure>
                  </div>

                  <div className="col-6">
                    <p className="kecil">{item.bag}</p>
                    <h1>{item.title}</h1>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
                ;
              </div>
            );
          })}
        </section>
      );
    }
  });
}
