import maleProfile from '../images/maleProfile.jpg';
import femaleProfile from '../images/femaleProfile.jpg';
import {useState} from 'react';

const Employees = () => {

    const [selectedTeam, setTeam] = useState("TeamA")
    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);

      const handleTeamSelectionChange = (event) =>  {
        setTeam(event.target.value);
      }

      const handleEmployeeCardClick = (event) =>  {
        
      }

      return(
        <main className="container">
          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-8">
              <select value = {selectedTeam} className='form-select form-select-lg' onChange={handleTeamSelectionChange}>
                <option value="TeamA"> Team A </option>
                <option value="TeamB"> Team B </option>
                <option value="TeamC"> Team C </option>
                <option value="TeamD"> Team D </option>
              </select>
            </div>
            <div class="col-8">
              <div class="card-collection">
                {
                  employees.map((employee) => (
                      <div id={employee.id} className="card m-2" style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                        {employee.gender === "male"?<img src={maleProfile} alt='Male' className='card-img-top'/>:
                        <img src={femaleProfile} alt='Female' className='card-img-top'/>}
                        <div className='card-body'>
                          <h5 className='card-title'>FullName: {employee.fullName}</h5>
                          <p className='card-text'><b>Designation: {employee.designation}</b></p>
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
          </div>
        </main>
      );

}

export default Employees;