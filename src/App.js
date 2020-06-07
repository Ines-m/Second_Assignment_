import React from "react";
import "./styles.css";

let localTasks = [];

//use local storage
const tasksAsString = localStorage.getItem("tasks");
if (tasksAsString) {
  localTasks = JSON.parse(tasksAsString);
}

//use state
export default function App() {
  const [addTask, setAddTask] = React.useState("");
  const [tasks, setTasks] = React.useState(localTasks);

  //function für delete task here
  function deleteTaskHere(task) {
    const filteredTasks = tasks.filter(function(item) {
      return item !== task;
    });

    const tasksAsString = JSON.stringify(filteredTasks);
    localStorage.setItem("tasks", tasksAsString);

    setTasks(filteredTasks);
  }

  //funktion für add Task here
  function addTaskHere() {
    const addTasks = [...tasks, addTask];

    const tasksAsString = JSON.stringify(addTasks);
    localStorage.setItem("tasks", tasksAsString);

    setTasks(addTasks);
  }

  //outcome
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <p>This is my ToDo List</p>
      <input
        //textarea
        value={addTask}
        onChange={function(event) {
          const inputElement = event.target;
          const newValue = inputElement.value;
          setAddTask(newValue);
        }}
      />

      <button className="buttiButt" onClick={addTaskHere}>
        Add Task here
      </button>
      <ul className="ul">
        {tasks.map(task => {
          return (
            <li>
              {task}
              <button
                className="button"
                onClick={function() {
                  deleteTaskHere(task);
                }}
              >
                Delete Task here
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
