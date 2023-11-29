import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem("user", JSON.stringify(state));
    },
    removerUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.clear();
    },
  },
});

export const { setUser, removerUser } = userSlice.actions;
export default userSlice.reducer;
