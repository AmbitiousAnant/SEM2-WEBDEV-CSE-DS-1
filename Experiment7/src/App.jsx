// App.js - Main Component
import Student from "./Student.jsx";

function App() {
  return (
    <div>
      <h1>Student Report Card</h1>

      <Student name="Ananya Sharma"  course="B.Tech Computer Science"  marks={92} />
      <Student name="Rohan Mehta"    course="B.Tech Data Science"       marks={78} />
      <Student name="Priya Patel"    course="B.Tech IT"                 marks={85} />
      <Student name="Arjun Singh"    course="B.Tech Electronics"        marks={45} />
      <Student name="Sneha Gupta"    course="B.Tech Computer Science"   marks={67} />
    </div>
  );
}

export default App;
