import React, { useEffect, useState } from 'react';
import './header.css';

export default function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem('currentmode') ?? 'dark');
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);
  return (
    <header className="d-flex align-items-center justify-content-between mt-3  px-1">
      <button type="button" aria-label="icon" onClick={() => { setshowModel(true); }} className=" icon-menu d-none menu justify-content-center align-items-center  " />
      <div />

      <nav>
        <ul className="d-flex gap-3 mt-2 ps-1 ">

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
      <button
        onClick={() => {
          localStorage.setItem('currentmode', theme === 'dark' ? 'light' : 'dark');
          settheme(localStorage.getItem('currentmode'));
        }}
        type="button"
        aria-label="icon"
        className="mode d-flex justify-content-center align-items-center"
      >
        {theme === 'dark' ? (<span className="icon-moon-o " />) : (<span className="icon-sun " />)}
      </button>
      {showModel && (

      <div className="headerLayout  position-fixed top-0 start-0 bottom-0 end-0  ">

        <ul className="model ">
          <li className=" text-end border-0 p-0 ">
            <button aria-label="icon" className="icon-close1  " type="button" onClick={() => { setshowModel(false); }} />
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
