import { Box } from "@mui/material";
import InteractionForm from "../components/InteractionForm/InteractionForm";
import ChatWindow from "../components/Chat/ChatWindow";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        background: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          width: "60%",
          padding: 2,
          overflowY: "auto",
          borderRight: "1px solid #ddd",
          backgroundColor: "#fff",
        }}
      >
        <InteractionForm />
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: "40%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fafafa",
        }}
      >
        <ChatWindow />
      </Box>
    </Box>
  );
}

export default Home;