import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const EditExam = () => {
  const { examId } = useParams();
  const { allExamsWithScores } = useSelector((store) => store.exam);

  const submitHandler = () => {};

  return (

    // <form onSubmit={submitHandler}>
    //   {allExamsWithScores.find((exam) => exam.examId === examId).examName}
    //   <input type="text" placeholder="Enter Question" />
    //   <input type="text" placeholder="Option 1" />
    //   <input type="text" placeholder="option 2" />
    //   <input type="text" placeholder="Option 3" />
    //   <input type="text" placeholder="Option 4" />
    //   <input type="text" placeholder="Correct Option Number (1/2/3/4)" />
    //   <button>Add Question</button>
    // </form>
  );
};
