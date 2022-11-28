import style from "./examCard.module.css";
import { Link, useNavigate } from "react-router-dom";

export const ExamCard = ({ examName, examScore }) => {
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <p>{examName}</p>
      {examScore ? (
        <p>Marks Scored: {examScore}</p>
      ) : (
        <p onClick={() => navigate("/examPaper")}>Start Exam</p>
      )}
      {examScore && (
        <p className={style.examAlreadyTaken}>Exam Already Taken</p>
      )}
    </div>
  );
};
