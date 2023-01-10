import React from "react";
import ActionButton from "../../Buttons/Action/ActionButton";

function MenuFaqItem({ item }) {
  return (
    <li className={item.mainClassName} id={item.id}>
      <div className={item.faqHeaderClassName}>
        <div className={item.faqArrowClassName}></div>
        <h3 className={item.questionClassName}>{item.questionText}</h3>
      </div>
      <div className={item.faqBodyClassName}>
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
