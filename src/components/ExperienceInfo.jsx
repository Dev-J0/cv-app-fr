import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { TbCircleDotted } from "react-icons/tb"
import { AiFillEdit } from "react-icons/ai"

function WorkExperience() {
  const [workPlaceList, setWorkPlaceList] = useState([]);
  const [workPlace, setWorkPlace] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [projectsList, setProjectsList] = useState([]);
  const [projects, setProjects] = useState("");
  const [details, setDetails] = useState("");

  const handleWorkPlaceChange = (e) => {
    setWorkPlace(e.target.value);
  };

  const handleWorkTitleChange = (e) => {
    setWorkTitle(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
    setEditMode(true);
  };

  const handleProjectsChange = (e) => {
    setProjects(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
    setIsRegistered(false);
  };

  const addWork = () => {
    setWorkPlaceList([
      ...workPlaceList,
      {
        workPlace,
        workTitle,
      },
    ]);
    setWorkPlace("");
    setWorkTitle("");
  };

  const addProjects = () => {
    setProjectsList([
      ...projectsList,
      {
        projects,
        details,
      },
    ]);
    setProjects("");
    setDetails("");
  };

  const handleSummarySubmit = () => {
    if (!isRegistered) {
      setIsRegistered(true);
    }
    setEditMode(false);
  };

  return (
    <div className="job-container">
      <div className="experiencecontainer">
        <div className="summary-Container">
          {isRegistered ? (
            <>
              <pre>{summary}</pre>
              <button className="edit-button" onClick={handleEdit}><AiFillEdit /></button>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <label>
                  <textarea
                    id="summary"
                    placeholder="Écrivez quelques mots sur vous !"
                    value={summary}
                    onChange={handleSummaryChange}
                    className={editMode ? "edit-mode" : ""}
                  />
                </label>
              </form>
              {editMode ? (
                <button id="summary-button"className="submit-button" onClick={handleSummarySubmit}>
                  Submit
                </button>
              ) : null}
            </>
          )}
        </div>
        <h2>Expérience & Projets/Contributions</h2>
        <div className="experience-and-projects-container">
          <div className="list1">
          <h3>Travail</h3>
          <label>
  
            <input
              type="text"
              id="workplace"
              value={workPlace}
              placeholder="Poste/Rôle"
              onChange={handleWorkPlaceChange}
            />
          </label>
          <label>
            <input
              type="text"
              id="worktitle"
              placeholder="Description/Détails"
              value={workTitle}
              onChange={handleWorkTitleChange}
            />
          </label>
          <button onClick={addWork}>
            <BsFillPlusSquareFill />
          </button>
          <h3>Projets</h3>
          <label>
            <input
              type="text"
              id="projects"
              placeholder="Nom du projet"
              value={projects}
              onChange={handleProjectsChange}
            />
          </label>
          <label>
         
            <input
              type="text"
              id="details"
              value={details}
              placeholder=" Détails"
              onChange={handleDetailsChange}
            />
          </label>
          <button onClick={addProjects}>
            <BsFillPlusSquareFill />
          </button>
          </div>
        </div>
        <div className="list2">
        <div className="workList">
          <h3><TbCircleDotted /> Travail:</h3>
          <ul>
            {workPlaceList.map((item, index) => (
              <li key={index}>
                {item.workPlace} - {item.workTitle}
              </li>
            ))}
          </ul>
        </div>
        <div className="projectsList">
          <h3><TbCircleDotted /> Projets:</h3>
          <ul>
            {projectsList.map((item, index) => (
              <li key={index}>
                {item.projects} - {item.details}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
