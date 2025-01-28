import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Karthikeyan</h4>
      <h4>Copyright &copy; {new Date().getFullYear()} karthikn</h4>
      <div className="footerLinks">
        <a href="https://github.com/karthikn199" target="_blank">
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/karthi-kn-21632b273
"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:karthiknstr@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="" target="_blank">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/karthi_kn_str/" target="_blank">
          <IoLogoInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
