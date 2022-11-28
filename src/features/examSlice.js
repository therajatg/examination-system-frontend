import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  status: "idle",
  allExamsWithScores: [],
  error: null,
};

const getAllExamsWithScores = createAsyncThunk(
  "exam/getAllExamsWithScores",
  async () => {
    try {
      const examResponse = await axios.get("exam/");
      const allExams = examResponse.data;
      const scoreResponse = await axios.get("score/");
      const allScores = scoreResponse.data;
      const studentId = JSON.parse(
        localStorage.getItem("studentDetail")
      )?.student_id;
      const scoreOfStudent = allScores.filter(
        (score) => score.student === studentId
      );
      const result = [];
      for (let exam of allExams) {
        const scoreInAParticularExam = scoreOfStudent.find(
          (score) => score.exam === exam.exam_id
        );
        if (scoreInAParticularExam) {
          result.push({
            examName: exam.name,
            score: scoreInAParticularExam.score,
          });
        } else {
          result.push({ examName: exam.name, score: null });
        }
      }
      console.log(result);
      return result;
    } catch (err) {
      console.log(577);
      return err;
    }
  }
);

const getAllScores = createAsyncThunk("exam/getAllScores", async () => {
  try {
    const response = await axios.get("score/");
    return response.data;
  } catch (err) {
    return err;
  }
});

const postScore = createAsyncThunk("exam/postScore", async (scoreDetail) => {
  try {
    const response = await axios.post("score/", scoreDetail);
    return response.data;
  } catch (err) {
    return err;
  }
});

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    staffLogout: (state) => {
      state.status = "idle";
      state.staffDetail = null;
      state.error = null;
    },
  },
  extraReducers: {
    [getAllExamsWithScores.pending]: (state) => {
      state.status = "loading";
    },
    [getAllExamsWithScores.fulfilled]: (state, action) => {
      state.status = "success";
      state.allExamsWithScores = action.payload;
      // toast.success("");
    },
    [getAllExamsWithScores.rejected]: (state, action) => {
      console.log("rejected");
      // state.status = "failure";
      // state.error = action.payload.error;
      // toast.error(`${state.error.message}. Please try again later.`);
    },
    //     [staffLogin.pending]: (state) => {
    //       state.status = "loading";
    //     },
    //     [staffLogin.fulfilled]: (state, action) => {
    //       state.status = "success";
    //       state.staffDetail = action.payload;
    //       console.log(action.payload);
    //       toast.success("Welcome To staff Portal");
    //     },
    //     [staffLogin.rejected]: (state, action) => {
    //       state.status = "failure";
    //       state.error = action.error;
    //       console.log("Enter the correct credentials");
    //       toast.error("Enter the correct credentials");
    //     },
  },
});

export const examReducer = examSlice.reducer;
// export const { staffLogout } = staffAuthSlice.actions;

export { getAllExamsWithScores };
