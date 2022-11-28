export {
  studentAuthReducer,
  studentLogin,
  studentSignup,
  studentLogout,
} from "./studentAuthSlice";

export {
  staffAuthReducer,
  staffLogin,
  staffSignup,
  staffLogout,
} from "./staffAuthSlice";

export {
  examReducer,
  getAllExamsWithScores,
  getQuestions,
  postScore,
} from "./examSlice";
