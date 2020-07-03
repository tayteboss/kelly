import React from "react";
// Styles
import QuestionStyles from "./styles";

const Question = (props) => {
  return (
    <QuestionStyles className="question box-padding">
      <h2>{props.question}</h2>
    </QuestionStyles>
  );
};

export default Question;
