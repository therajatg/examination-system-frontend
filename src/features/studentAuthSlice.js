import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  status: "idle",
  studentDetail: null,
  error: null,
};

const studentSignup = createAsyncThunk(
  "studentAuth/signup",
  async (studentDetail) => {
    try {
      const response = await axios.post("student/", studentDetail);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const studentLogin = createAsyncThunk(
  "studentAuth/login",
  async (studentDetail) => {
    const response = await axios.get("student/");
    const data = response.data;
    for (let i of data) {
      if (
        i.email === studentDetail.email &&
        i.password === studentDetail.password
      ) {
        return i;
      }
    }
    return await axios.get("anythingToReject");
  }
);

const studentAuthSlice = createSlice({
  name: "studentAuth",
  initialState,
  // reducers: {
  //   logout: (state) => {
  //     state.token = null;
  //     state.user = null;
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //   },
  //   updateUser: (state, action) => {
  //     state.user = action.payload;
  //     localStorage.setItem("user", JSON.stringify(action.payload));
  //   },
  // },
  extraReducers: {
    [studentSignup.pending]: (state) => {
      state.status = "loading";
    },
    [studentSignup.fulfilled]: (state, action) => {
      state.status = "success";
      state.studentDetail = action.payload;
      toast.success("Signup Successful");
    },
    [studentSignup.rejected]: (state, action) => {
      state.status = "failure";
      state.error = action.payload.error;
      toast.error(`${state.error.message}. Please try again later.`);
    },
    [studentLogin.pending]: (state) => {
      state.status = "loading";
    },
    [studentLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.studentDetail = action.payload;
      console.log(action.payload);
      toast.success("Welcome To Student Portal");
    },
    [studentLogin.rejected]: (state, action) => {
      state.status = "failure";
      state.error = action.error;
      console.log("Enter the correct credentials");
      toast.error("Enter the correct credentials");
    },
  },
});

export const studentAuthReducer = studentAuthSlice.reducer;
// export const { logout, updateUser } = authSlice.actions;
export { studentLogin, studentSignup };
