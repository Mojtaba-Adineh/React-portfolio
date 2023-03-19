import React from "react";
import "./intro.scss";
import Typed from "react-typed";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="../../assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mojtaba Adineh</h1>
          <h3>
            Freelance 
            <span>
              <Typed
                strings={[" Developer", " Designer", " Content Creator"]}
                typeSpeed={60}
                backDelay={1500}
                backSpeed={50}
                loop
              ></Typed>
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="../../assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
