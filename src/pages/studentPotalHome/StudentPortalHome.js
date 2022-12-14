import { Navbar, ExamCard } from "../../components/index";
import { useEffect } from "react";
import { getAllExamsWithScores } from "../../features/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./studentPortalHome.module.css";

export const StudentPortalHome = () => {
  const dispatch = useDispatch();
  const { allExamsWithScores } = useSelector((store) => store?.exam);
  useEffect(() => {
    dispatch(getAllExamsWithScores());
  }, []);

  return (
    <div>
      <Navbar />
      <div className={style.allExamCards}>
        {allExamsWithScores.map((exam) => (
          <ExamCard
            examName={exam?.examName}
            examScore={exam?.score}
            examId={exam?.examId}
            key={exam?.examName}
          />
        ))}
      </div>
    </div>
  );
};
