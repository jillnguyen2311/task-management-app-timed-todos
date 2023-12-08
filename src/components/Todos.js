// components/Todos.js
import React from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { Paper } from "@mui/material";

const Todos = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
  updateTodo,
  editingTasks,
}) => {
  return (
    <Paper
      elevation={3}
      style={{ paddingTop: "30px", paddingBottom: "100px", marginTop: "20px" }}
    >
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingTasks.includes(todo.id) ? (
            <EditTodo todo={todo} updateTodo={updateTodo} />
          ) : (
            <Todo
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
        </div>
      ))}
    </Paper>
  );
};

export default Todos;
