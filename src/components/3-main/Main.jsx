import React from 'react';
import './main.css';

export default function Main() {
  return (
    <section className="mainSection d-flex justify-content-between  ">
      <section className="sideBar ">
        <ul className="text-capitalize ">
          <li className="active">all Projects</li>
          <li>HTML & CSS</li>
          <li>JAVASCRIPT</li>
          <li>Rect & MUl</li>
          <li>Node & Express</li>
        </ul>
      </section>
      <section className="projects  d-flex">
        {['aa', 'bb ', 'cc'].map((item) => (
          <article key={item} className="cards">
            <img width={266} src="./1.jpg" alt="" />
            <div style={{ width: 266 }} className="box">
              <h3 className="title my-2 ms-2">
                landing page 2
              </h3>
              <p className="sub-title ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium.
              </p>
              <div className="links d-flex gap-2 mb-2 ms-2 mt-3">
                <div className="icon-link" />
                <div className="icon-github mt-1" />
                <a className="ms-auto   card-link d-flex me-2" href="/">
                  <span className="fs-6">more</span>
                  <span className=" mt-2 ms-1 icon-arrow-thin-right  " />
                </a>
              </div>
            </div>
          </article>
        ))}

      </section>
    </section>
  );
}
