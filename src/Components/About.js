import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import Coder from "../LottieFiles/coder.json";
import Skills from "./Skills.js";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Karthikeyan</b>, and I’m a passionate{" "}
            <b>React.js developer</b> based in bangalore. I specialize in
            building dynamic, user-friendly web applications and occasionally
            work with <b>Spring Boot</b> and <b>SQL</b> on the backend.
            <br />
            <br />I have experience working on real-world projects, including an
            internship as a <b>software developer</b> at a fintech startup. I
            love building scalable applications with clean, maintainable code.
            You can explore some of my work in the projects section.
            <br />
            <br />
            I’m always open to <b>new opportunities</b> and collaborations where
            I can contribute and grow. Feel free to connect with me—links are in
            the footer.
            <br />
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
