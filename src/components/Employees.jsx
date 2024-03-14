import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-6">
          <select
            value={selectedTeam}
            className="form-select form-select-lg"
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA"> Team A </option>
            <option value="TeamB"> Team B </option>
            <option value="TeamC"> Team C </option>
            <option value="TeamD"> Team D </option>
          </select>
        </div>
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "male" ? (
                  <img src={maleProfile} alt="Male" className="card-img-top" />
                ) : (
                  <img
                    src={femaleProfile}
                    alt="Female"
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">FullName: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation: {employee.designation}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
