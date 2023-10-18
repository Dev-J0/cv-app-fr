import { FaGithub } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi"
import CVGenerator from "./CVGenerator";


function Footer() {

    const githubLink = "https://github.com/Dev-J0";
    const odinLink = "https://www.theodinproject.com/lessons/node-path-react-new-cv-application"

    return (
        <>
  <div className="footer">
    <div className="copyright">
      <h4>Copyright © Dev-JO</h4>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub className="github-icon" />
      </a>
    </div>
    <div className="inspired">
      <h4>Inspired from </h4>
      <a href={odinLink} target="_blank" rel="noopener noreferrer">
        <HiAcademicCap className="odin-icon" />
      </a>
      <CVGenerator />
    </div>
  </div>
        </>
    )
}


export default Footer;