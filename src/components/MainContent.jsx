import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";


function MainContent() {
    return(
        <div className="mainContent-container">
           
            <div className="mainContent-component2"><ExperienceInfo /></div>
            <div className="mainContent-component1"><EducationInfo /></div>
        </div>
    )
}

export default MainContent;