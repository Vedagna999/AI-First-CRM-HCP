import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";

function InteractionForm() {
  const interaction = useSelector((state) => state.interaction);
    console.log(interaction);
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Log HCP Interaction
      </Typography>

      <Grid container spacing={3}>
        {/* HCP Name */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="HCP Name"
            value={interaction.doctor_name}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Interaction Type */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Interaction Type"
            value={interaction.interaction_type}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Date */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date"
            value={interaction.date}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Time */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Time"
            value={interaction.time}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Attendees */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Attendees"
            value={interaction.attendees}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Topics */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Topics Discussed"
            value={interaction.topics}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Materials */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Materials Shared"
            value={interaction.materials}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* Follow Up */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Follow Up"
            value={interaction.follow_up}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        {/* AI Summary */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="AI Summary"
            value={interaction.summary}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InteractionForm;