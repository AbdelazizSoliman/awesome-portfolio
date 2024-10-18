import React, { useRef } from 'react';
import './hero.css';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import developerAnimation from '../../animation/Animation - 1729209243703.json';

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero d-flex ">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.1)' }}
            transition={{ damping: 6, type: 'spring', stiffness: 100 }}
            src="./me-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Full Stack Developer.
        </motion.h1>

        <p className="sub-title">
          I’m Abdelrahman Ashraf, a Full Stack Developer React+PHP based in
          Alexandria City. I’have graduated from route academy with valuable
          technical and teamwork skills.
        </p>
        <div className="all-icons flex">
          {/* <div className="icon icon-twitter" /> */}
          {/* <div className="icon icon-instagram" /> */}
          <div className="icon icon-github" />
          <div className="icon icon-linkedin-square" />
          <div className="qabila"><img src="./orangeLogo.svg" width={22} alt="" /></div>
        </div>
      </div>
      <div className="right-section ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiefiles.com/
            lottieRef.current.setSpeed(0.7);
          }}
          className="ms-2 mb-4  "
          loop
          style={{ width: 500 }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
