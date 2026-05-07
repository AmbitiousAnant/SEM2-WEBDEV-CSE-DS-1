// Student.js - Functional Component

function Student(props) {
  const status = props.marks >= 50 ? "Pass" : "Fail";
  const statusClass = props.marks >= 50 ? "pass" : "fail";

  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks} / 100</p>
      <p className={statusClass}>Status: {status}</p>
    </div>
  );
}

export default Student;
