import { useState } from 'react';
import './main.css';
import { AnimatePresence, motion } from 'framer-motion';
import myProjects from './myProjects';

export default function Main() {
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setarr] = useState(myProjects);

  const handlClick = (btnCategory) => {
    setcurrentActive(btnCategory);

    const newArr = myProjects.filter((item) => {
      const categoryProject = item.category.find(
        (theitems) => theitems === btnCategory,
      );
      return categoryProject === btnCategory;
    });
    setarr(newArr);
  };

  return (
    <section className="mainSection d-flex justify-content-between">
      <section className="sideBar">
        <ul className="text-capitalize">
          <li className={currentActive === 'all' ? 'active' : null}>
            <button
              type="button"
              onClick={() => {
                setcurrentActive('all');
                setarr(myProjects);
              }}
              className="btn"
            >
              all Projects
            </button>
          </li>
          <li className={currentActive === 'css' ? 'active' : null}>
            <button
              type="button"
              onClick={() => handlClick('css')}
              className="btn"
            >
              HTML & CSS
            </button>
          </li>
          <li className={currentActive === 'javascript' ? 'active' : null}>
            <button
              type="button"
              onClick={() => handlClick('javascript')}
              className="btn"
            >
              JAVASCRIPT
            </button>
          </li>
          <li className={currentActive === 'react' ? 'active' : null}>
            <button
              type="button"
              onClick={() => handlClick('react')}
              className="btn"
            >
              React & MUl
            </button>
          </li>
          <li className={currentActive === 'node' ? 'active' : null}>
            <button
              type="button"
              onClick={() => handlClick('node')}
              className="btn"
            >
              Node & Express
            </button>
          </li>
        </ul>
      </section>

      <section className="projects d-flex justify-content-center">
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
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  laudantium.
                </p>
                <div className="links d-flex gap-2 mb-2 ms-2 mt-3">
                  <div className="icon-link" />
                  <div className="icon-github mt-1" />
                  <a className="ms-auto card-link d-flex me-2" href="/">
                    <span className="fs-6">more</span>
                    <span className="mt-2 ms-1 icon-arrow-thin-right" />
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
