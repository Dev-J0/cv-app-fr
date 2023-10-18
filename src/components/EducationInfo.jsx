import { useState } from "react"
import {  BsFillPlusSquareFill } from "react-icons/bs"
//education background
//university/institution/organization/school
//program/degree
//starting year - ending year 
//button for (still in school)
//additional educational info

function EducationInfo() {
    const [university, setUniversity] = useState("");
    const [enrollmentYear, setEnrollmentYear] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [universities, setUniversities] = useState([]);


    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
      };

    const handleEnrollmentYearChange = (e) => {
        setEnrollmentYear(e.target.value);
      };
      
      const handleGraduationYearChange = (e) => {
        setGraduationYear(e.target.value);
      };

      const addUniversity = () => {
        if (university.trim() === "" || enrollmentYear === "" || graduationYear === "") {
          return;
        } 
        setUniversities([
          ...universities,
          {
            university,
            enrollmentYear,
            graduationYear,
          },
        ]);
        setUniversity("");
        setEnrollmentYear("");
        setGraduationYear("");
      };

      return (
        <div>
          <h2>Education Background</h2>
          <div className="containerEducation">
          <label>
          College/Institute/School
            <input
              type="text"
              id="uni"
              value={university}
              onChange={handleUniversityChange}
            />
          </label>
          <label>
            Enrollment Year:
            <input
              type="text"
              id="enrollmentyear"
              value={enrollmentYear}
              onChange={handleEnrollmentYearChange}
            />
          </label>
          <label>
            Graduation Year:
            <input
              type="text"
              id="graduationyear"
              value={graduationYear}
              onChange={handleGraduationYearChange}
            />
          </label>
          <button onClick={addUniversity}><BsFillPlusSquareFill /></button>  
       </div>

          <ul>
            {universities.map((item, index) => (
              <li key={index}>
                {item.university} - {item.enrollmentYear} to {item.graduationYear}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default EducationInfo;