import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BiSolidMessageSquareEdit } from "react-icons/bi"
import { RxReset } from "react-icons/rx"



function Header() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [editMode, setEditMode] = useState(false);

 

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setEditMode(true); 
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setEditMode(true); 
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setEditMode(true); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
    setEditMode(false); 
  };

  const handleEdit = () => {
    setEditMode(true);
    setIsRegistered(false);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setTitle('');
    setEditMode(false); 
  };


  return (
    <div className="Basic-Info">
      <div className="resume-title">
        <h1 className="the-title">Resume</h1>
      </div>
      <h2 className="header-h2">
        Please fill in the information to put together a professional CV!
      </h2>
      <div className="name-info">
        {isRegistered ? (
          <>
          <div className="name-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <div className="title-container">
            <p>{title}</p>
          </div>
          <div className="header-buttons">
            <button className="edit-button" onClick={handleEdit}>
             <BiSolidMessageSquareEdit />
            </button>
            <button className="reset-button" onClick={handleReset}>
              <RxReset />
            </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className={editMode ? "edit-mode" : ""}
              />
            </label>
            <button className="submit-button" type="submit">
               <BsFillCheckCircleFill />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;
