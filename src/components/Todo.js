// components/Todo.js
import React from "react";
import { Checkbox, Typography, Button } from "@mui/material";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const { id, text, completed, createdAt, completedAt } = todo;

  return (
    <div
      style={{ marginBottom: "10px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={completed}
          onChange={() => toggleComplete(id)}
          color="primary"
        />
        <Typography
          variant="body1"
          style={{
            textDecoration: completed ? "line-through" : "none",
            marginLeft: "10px",
          }}
        >
          {text}
        </Typography>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <Button
            onClick={() => editTodo(id)}
            size="small"
            variant="outlined"
            style={{
              marginLeft: "5px",
              color: "#8DB6CD	",
              borderColor: "#8DB6CD",
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteTodo(id)}
            size="small"
            variant="outlined"
            style={{
              marginLeft: "5px",
              color: "#FF0000",
              borderColor: "#FF0000",
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "5px" }}>
        <small>
          <strong>Created:</strong> {createdAt}.{" "}
        </small>
        {completed && (
          <small>
            {" "}
            <strong> Completed:</strong> {completedAt}
          </small>
        )}
      </div>
    </div>
  );
};

export default Todo;
