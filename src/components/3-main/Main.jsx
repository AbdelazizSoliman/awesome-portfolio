import { useState } from 'react';
import './main.css';
// import src from '@eslint/js';
import { AnimatePresence, motion } from 'framer-motion';
import { myProjects } from './myProjects';

export default function Main() {
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setarr] = useState(myProjects);
  const handlClick = (btnCategory) => {
    setcurrentActive(btnCategory);

    const newArr = myProjects.filter((item) => {
      const categoryProject = item.category.find((theitems) => theitems === btnCategory);

      return categoryProject === btnCategory;
    });
    setarr(newArr);
  };
  return (
    <section className="mainSection d-flex justify-content-between  ">
      <section className="sideBar ">
        <ul className="text-capitalize ">
          <li
            onClick={() => {
              setcurrentActive('all');
              setarr(myProjects);
            }}
            className={currentActive === 'all' ? 'active' : null}
          >
            all Projects
          </li>
          <li
            onClick={() => {
              handlClick('css');
            }}
            className={currentActive === 'css' ? 'active' : null}
          >
            HTML & CSS
          </li>
          <li
            onClick={() => {
              handlClick('javascript');
            }}
            className={currentActive === 'javascript' ? 'active' : null}
          >
            JAVASCRIPT
          </li>
          <li
            onClick={() => {
              handlClick('react');
            }}
            className={currentActive === 'react' ? 'active' : null}
          >
            Rect & MUl
          </li>
          <li
            onClick={() => {
              handlClick('node');
            }}
            className={currentActive === 'node' ? 'active' : null}
          >
            Node & Express
          </li>
        </ul>
      </section>

      <section className="projects  d-flex justify-content-center">
        <AnimatePresence>

          {arr.map((item) => (
            <motion.article

              layout
              initial={{ transform: 'scale(0)' }}
              animate={{ transform: 'scale(1)' }}
              transition={{ type: 'spring', damping: 8, stiffness: 50 }}

              key={item.imgpath}
              className="cards"
            >
              <img width={266} src={item.imgpath} alt="" />
              <div style={{ width: 266 }} className="box">
                <h3 className="title my-2 ms-2">{item.projectTitle}</h3>
                <p className="sub-title ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  laudantium.
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
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </section>
  );
}
