import React from "react";
import "./App.css";
import Todo from "./Todo/Todo";

function App() {
  const tasks = ["homework", "dishes", "laundry"];

  return (
    <div>
      {tasks.map((task) => {
        return <Todo description={task} />;
      })}
    </div>
  );
}

export default App;
