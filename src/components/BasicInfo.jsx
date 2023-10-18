import { useState } from "react";
import { FaSquarePhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidMessageSquareEdit } from 'react-icons/bi'
import { GrPowerReset } from "react-icons/gr"
import { BsFillCheckCircleFill } from "react-icons/bs"

function BasicInfo() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value)
};

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
};

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  const handleEdit = () => {
    setIsRegistered(false);
  };

  const handleReset = () => {
    setEmail('');
    setLocation('');
    setPhoneNumber('');
    setWebsite('');
  };

  return (
    <div className="container-information">
       <h2>Coordonnées</h2>
      {isRegistered ? (
        <>
          <p id="emoticon"><FaSquarePhone />{phoneNumber}</p>
          <p id="emoticon"><MdEmail /> {email}</p>
          <p id="emoticon"><CgWebsite />{website}</p>
          <p id="emoticon"><FaLocationDot />{location}</p>
          <button className="edit-button" onClick={handleEdit}>
            <BiSolidMessageSquareEdit />
          </button>
          <button className="reset-button" onClick={handleReset}>
            <GrPowerReset />
          </button>
        </>
      ) : (
        <form className="form-personal"onSubmit={handleSubmit}>
          <label>
           {" "}
            <input
              type="tel"
              id="phonenr"
              placeholder="Téléphone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <label>
           {" "}
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              autoComplete="on"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        <label>
            {" "}
            <input
              type="text"
              id="website"
              placeholder="Site web"
              value ={website} 
              onChange={handleWebsiteChange}
            />
        </label>
        <label>
            {" "}
            <input
            type="text" 
            id="location"
            placeholder="Lieu" 
            value={location}
             onChange={handleLocationChange}
            />
        </label>
          <button className="submit-button" id="basicinfobutton" type="submit">
            <BsFillCheckCircleFill />
          </button>
        </form>
      )}
    </div>
  );
}


export default BasicInfo;