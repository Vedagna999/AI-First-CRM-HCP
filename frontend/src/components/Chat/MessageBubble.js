import { Box, Typography } from "@mui/material";

function MessageBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: isUser ? "#1976d2" : "#f1f5f9",
          color: isUser ? "white" : "black",
          px: 2,
          py: 1.5,
          borderRadius: 2,
          maxWidth: "80%",
        }}
      >
        <Typography variant="body2">
          {message}
        </Typography>
      </Box>
    </Box>
  );
}

export default MessageBubble;