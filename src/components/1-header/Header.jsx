import React, { useState } from 'react';
import './header.css';

export default function Header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className="d-flex align-items-center justify-content-between mt-3  px-1">
      <button type="button" onClick={() => { setshowModel(true); }} className="menu">show model</button>
      <div />

      <nav>
        <ul className="d-flex gap-3 mt-2 ">

          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Projets</a>
          </li>
          <li>
            <a href="/">Speaking</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <button type="button">light</button>
      {showModel && (

      <div className="headerLayout  position-fixed top-0 start-0 bottom-0 end-0  opacity-75">

        <ul className="model ">
          <li>
            <button type="button" onClick={() => { setshowModel(false); }}>close</button>
          </li>
          <li className="">
            <a href="/">About</a>
          </li>
          <li className="">
            <a href="/">Articles</a>
          </li>
          <li className="">
            <a href="/">Projets</a>
          </li>
          <li className="">
            <a href="/">Speaking</a>
          </li>
          <li className="border-0">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </header>
  );
}
