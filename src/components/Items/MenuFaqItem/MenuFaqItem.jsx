import React, { useState, useContext } from "react";
import ActionButton from "../../Buttons/Action/ActionButton";
import InfoPopupContext from "../../../contexts/InfoPopupContext";

function MenuFaqItem({ item }) {
    const { setInfoPopupOpen } = useContext(InfoPopupContext);
    const [arrowActive, setArrowActive] = useState(false);
    const [questionActive, setQuestionActive] = useState(false);
    const [bodyActive, setBodyActive] = useState(false);

    const arrowClass = arrowActive ? item.faqArrowClassNameActive : item.faqArrowClassName;
    const questionClass = questionActive ? item.questionClassNameActive : item.questionClassName;
    const bodyClass = bodyActive ? item.faqBodyClassNameActive : item.faqBodyClassName;

    function handleQuestionClick() {
        setArrowActive(!arrowActive);
        setQuestionActive(!questionActive);
        setBodyActive(!bodyActive);
    }

    function handleBtnClick() {
        setInfoPopupOpen(true);
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
          onClick={handleBtnClick}
        />
      </div>
      <div className={item.faqLineClassName}></div>
    </li>
  );
}

export default MenuFaqItem;
