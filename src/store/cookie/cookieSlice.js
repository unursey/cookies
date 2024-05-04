import { createSlice } from "@reduxjs/toolkit";
import cookie from "/images/cookies.png";
import cookieOpen from "/images/cookies-open.png";

const initialState = {
  imageSrc: cookie,
  randomPhrase: "",
  firstClick: false
};

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    changeImage: (state, action) => {
      const { randomPhrase } = action.payload;
      state.imageSrc = cookieOpen;
      state.randomPhrase = randomPhrase;
      state.firstClick = true;
    },
    reset: (state) => {
      state.imageSrc = cookie;
      state.randomPhrase = "";
      state.firstClick = false;
    }
  }
});

export const { changeImage, reset } = cookieSlice.actions;

export default cookieSlice.reducer;
