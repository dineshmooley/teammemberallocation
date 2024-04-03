export default function GroupedTeamMembers({ selectedTeam, employees }) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>{selectedTeam} Team Members</h1>
        </div>
        {employees.map((employee, key) => {
          return (
            <h3 key={key} className="mt-3">
              {employee.fullName}
            </h3>
          );
        })}
      </div>
    </main>
  );
}
