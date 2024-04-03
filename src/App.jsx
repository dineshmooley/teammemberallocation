import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import "./app.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("TeamName")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(
    () => localStorage.setItem("TeamName", JSON.stringify(selectedTeam)),
    [selectedTeam]
  );

  const handleTeamSelectionChange = (event) => {
    setTeam(event.target.value);
  };

  const handleEmployeeCardClick = (event) => {
    const changedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(changedEmployees);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        count={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
              selectedTeam={selectedTeam}
            />
          }
        />
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              selectedTeam={selectedTeam}
              employees={employees.filter(
                (employee) => employee.teamName === selectedTeam
              )}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
