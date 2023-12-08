// components/EditTodo.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const EditTodo = ({ todo, updateTodo }) => {
  const [text, setText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      updateTodo(todo.id, text);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <TextField
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </form>
  );
};

export default EditTodo;
