// components/TodoForm.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TodoForm = ({ addTodo, isEditing, setIsEditing }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
      setIsEditing(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Add a new task"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      ) : (
        <Button
          type="add-new-task"
          onClick={() => setIsEditing(true)}
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      )}
    </div>
  );
};

export default TodoForm;
