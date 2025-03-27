// src/components/CommentForm.tsx
import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

interface CommentFormProps {
  onSubmit: (name: string, text: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState(false);
  const [textError, setTextError] = useState(false);
  const [previewName, setPreviewName] = useState("");
  const [previewText, setPreviewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(false);
    setTextError(false);

    let isValid = true;

    if (name.trim() === "") {
      setNameError(true);
      isValid = false;
    }

    if (text.trim() === "") {
      setTextError(true);
      isValid = false;
    }

    if (isValid) {
      onSubmit(name, text);
      setName("");
      setText("");
      setPreviewName("");
      setPreviewText("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setPreviewName(newName);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setPreviewText(newText);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Имя"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={name}
        onChange={handleNameChange}
        error={nameError}
        helperText={nameError ? "Пожалуйста, введите имя" : ""}
      />
      <TextField
        label="Комментарий"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        required
        value={text}
        onChange={handleTextChange}
        error={textError}
        helperText={textError ? "Пожалуйста, введите комментарий" : ""}
      />

      {previewName && previewText && (
        <Paper elevation={3} sx={{ p: 2, mt: 2, mb: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Имя: {previewName}
          </Typography>
          <Typography variant="body2">Ответ: {previewText}</Typography>
        </Paper>
      )}

      <Button type="submit" variant="contained" color="primary">
        Отправить
      </Button>
    </Box>
  );
};

export default CommentForm;
