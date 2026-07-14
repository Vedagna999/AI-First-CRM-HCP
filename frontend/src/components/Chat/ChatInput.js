import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/chatSlice";
import { updateInteraction } from "../../redux/interactionSlice";
import axios from "axios";

function ChatInput() {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  
  const handleSend = async () => {

    if (!message.trim()) return;

    dispatch(addMessage({
        sender: "user",
        message
    }));

    try {

        const response = await axios.post(
            "http://127.0.0.1:8000/chat",
            {
                message
            }
        );

        console.log("API Response:", response.data);

        dispatch(updateInteraction(response.data));

        dispatch(addMessage({
            sender: "ai",
            message: "Interaction logged successfully."
        }));

    } catch (err) {

        console.error(err);

        dispatch(addMessage({
            sender: "ai",
            message: "Something went wrong."
        }));

    }

    setMessage("");
};
  
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        fullWidth
        placeholder="Describe interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
}

export default ChatInput;
