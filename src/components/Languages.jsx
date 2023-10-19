import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs"
import { AiFillMinusSquare } from "react-icons/ai"

function Languages() {
    const [language, setLanguage] = useState("");
    const [languageList, setLanguageList] = useState([]);

    const handleLanguageChange = (e) => {
      setLanguage(e.target.value);
    };

    const addLanguage = () => {
      if(language.trim() !=="") {
        setLanguageList([...languageList,language]);
        setLanguage("");
      }
    };

    const removeLanguage = (index) => {
      const updatedLanguage = [...languageList];
      updatedLanguage.splice(index, 1);
      setLanguageList(updatedLanguage);
    };

    return (
      <div className="language-container">
        <h2>Langues</h2>
        <div className="enter-language">
          <input 
          type="text"
          id="language"
           placeholder="Ajouter une langue" 
           value={language}
           onChange={handleLanguageChange}
          />
          <button className="plus-button" onClick={addLanguage}><BsFillPlusSquareFill /></button>
        </div>
        <ul>
          {languageList.map((l,index) => (
            <li key={index}>
              {l}
              <button className="remove-button" onClick={() => removeLanguage(index)}><AiFillMinusSquare />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Languages;