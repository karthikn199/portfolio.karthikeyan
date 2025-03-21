import Lottie from "lottie-react";
import React from "react";
import { CiCoffeeCup } from "react-icons/ci";
import Tilt from "react-parallax-tilt";
import Developer from "../LottieFiles/Devv.json";
import Dev from "../LottieFiles/React.json";
import Typed from "./Typed.js";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Karthikeyan</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={Developer}
          loop={true}
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          {/* <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>C++</b> and know a bit of <b>Python</b> and
            am working on a few projects in the <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> Typescript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p> */}
          <p>
  I enjoy transforming ideas into seamless, scalable, and efficient applications.  
  As a <b>React.js</b> developer, I specialize in building dynamic and responsive user interfaces.  
  Additionally, I work with <b>Spring Boot</b> and <b>SQL</b> to develop robust backend systems.  
  <br />
  <br />
  I am always eager to explore new technologies and enhance my skill set. Currently, I am deepening my knowledge of <b>NodeJs</b> and <b>TypeScript</b>,  
  while also exploring best practices in full-stack development.  
  <br />
  <br />
  Also, I love <b>coffee</b>{" "}
  <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
</p>

        </div>
        <Tilt>
          {/* <img className="Avatar" src={Avatar} alt="" /> */}
          <Lottie className="illustration" animationData={Dev} loop={true} />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
