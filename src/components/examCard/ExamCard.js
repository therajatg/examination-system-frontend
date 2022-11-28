import style from "./examCard.module.css";
import { Link, useNavigate } from "react-router-dom";

export const ExamCard = ({ examId, examName, examScore }) => {
  console.log(examScore);
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <p>{examName}</p>
      {examScore || examScore === 0 ? (
        <p>Marks Scored: {examScore}</p>
      ) : (
        <p onClick={() => navigate(`/examPaper/${examId}`)}>Start Exam</p>
      )}
      {(examScore || examScore === 0) && (
        <p className={style.examAlreadyTaken}>Exam Already Taken</p>
      )}
    </div>
  );
};
