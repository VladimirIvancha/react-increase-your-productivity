import React, { useState } from "react";
import ActionButton from "../../Buttons/Action/ActionButton";

function MenuFaqItem({ item }) {
    const [arrowActive, setArrowActive] = useState(false);
    const [questionActive, setQuestionActive] = useState(false);
    const [bodyActive, setBodyActive] = useState(false);

    const arrowClass = arrowActive ? item.faqArrowClassNameActive : item.faqArrowClassName;
    const questionClass = questionActive ? item.questionClassNameActive : item.questionClassName;
    const bodyClass = bodyActive ? item.faqBodyClassName : item.faqBodyClassNameActive;

    function handleQuestionClick() {
        setArrowActive(!arrowActive);
        setQuestionActive(!questionActive);
        setBodyActive(!bodyActive);
    }

  return (
    <li className={item.mainClassName} id={item.id}>
      <div className={item.faqHeaderClassName} onClick={handleQuestionClick}>
        <div className={arrowClass}></div>
        <h3 className={questionClass}>{item.questionText}</h3>
      </div>
      <div className={bodyClass}>
        <p className={item.answerClassName}>{item.answerText}</p>
        <ActionButton
          name={item.btnText}
          className={item.faqBtnClass}
        />
      </div>
      <div className={item.faqLineClassName}></div>
    </li>
  );
}

export default MenuFaqItem;
