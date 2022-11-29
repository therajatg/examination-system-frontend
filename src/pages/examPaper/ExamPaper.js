import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, postScore, deleteQuestion } from "../../features/index";
import { Navbar } from "../../components/index";
import style from "./examPaper.module.css";

export const ExamPaper = () => {
  const { examId } = useParams();
  const dispatch = useDispatch();
  const { examPaper } = useSelector((store) => store.exam);
  const [selected, setSelected] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getQuestions({ examId: examId }));
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value;
    const parsedValue = JSON.parse(value);
    setSelected({ ...selected, [parsedValue[0]]: parsedValue[1] });
  };

  const calculateAndPostScore = () => {
    let score = 0;
    let length = examPaper.length;
    for (let i = 0; i < length; i++) {
      if (examPaper[i].correct_ans === selected[i]) {
        score++;
      }
    }

    dispatch(
      postScore({
        score: score,
        exam: examId,
        student: JSON.parse(localStorage.getItem("studentDetail")).student_id,
      })
    );
    navigate("/studentPortalHome");
  };

  const deleteQuestionHandler = (questionId) => {
    dispatch(deleteQuestion({ questionId: questionId }));
  };

  return (
    <div>
      <Navbar />
      <div className={style.allQuestions}>
        {examPaper.length === 0 && (
          <h2 className={style.noQuestions}>No Questions added</h2>
        )}
        {examPaper.map(
          (
            { question_id, question, option1, option2, option3, option4 },
            index
          ) => (
            <div>
              <div className={style.question}>
                <span>Question {index + 1}.</span>
                <span>{question}</span>
              </div>
              <div>
                <input
                  type="radio"
                  id={option1}
                  name={question_id}
                  value={JSON.stringify([index, option1])}
                  checked={option1 === selected[index]}
                  onChange={changeHandler}
                />
                <label htmlFor={option1}>{option1}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={option2}
                  name={question_id}
                  value={JSON.stringify([index, option2])}
                  checked={option2 === selected[index]}
                  onChange={changeHandler}
                />
                <label htmlFor={option2}>{option2}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={option3}
                  name={question_id}
                  value={JSON.stringify([index, option3])}
                  checked={option3 === selected[index]}
                  onChange={changeHandler}
                />
                <label htmlFor={option3}>{option3}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={option4}
                  name={question_id}
                  value={JSON.stringify([index, option4])}
                  checked={option4 === selected[index]}
                  onChange={changeHandler}
                />
                <label htmlFor={option4}>{option4}</label>
              </div>
              {pathname.split("/")[1] === "deleteQuestions" && (
                <p
                  className={style.deleteBtn}
                  onClick={() => deleteQuestionHandler(question_id)}
                >
                  Delete the above Question
                </p>
              )}
            </div>
          )
        )}
      </div>

      {pathname.split("/")[1] !== "viewPaper" &&
        (examPaper.length === 0 ? (
          <button
            onClick={() => navigate("/studentPortalHome")}
            className={style.submitBtn}
          >
            Go Back
          </button>
        ) : (
          <button className={style.submitBtn} onClick={calculateAndPostScore}>
            Submit
          </button>
        ))}
    </div>
  );
};
