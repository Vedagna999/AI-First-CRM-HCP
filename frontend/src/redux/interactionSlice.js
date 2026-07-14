import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor_name: "",
  hospital: "",
  interaction_type: "",
  date: "",
  time: "",
  attendees: "",
  topics: "",
  materials: "",
  follow_up: "",
  summary: "",
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {

    updateInteraction: (state, action) => {

      Object.entries(action.payload).forEach(([key, value]) => {

        if (
          value !== null &&
          value !== undefined &&
          String(value).trim() !== ""
        ) {
          state[key] = value;
        }

      });

    },

    resetInteraction: () => initialState,

  },

});

export const {
  updateInteraction,
  resetInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;