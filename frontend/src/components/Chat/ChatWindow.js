import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant="h4" color="primary" mb={2}>
        🤖 AI Assistant
      </Typography>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: 2,
          padding: 2,
          background: "#fff",
        }}
      >
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}
      </Box>

      <Box sx={{ mt: 2 }}>
        <ChatInput />
      </Box>
    </Box>
  );
}

export default ChatWindow;