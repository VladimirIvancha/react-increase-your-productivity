import React from "react";
import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import { faqPhTextArea } from "../../../utils/initial-data";
import FaqItemsMenu from "../../Menus/FaqItemsMenu/FaqItemsMenu";
import PageLine from "../../Shapes/Lines/PageLine";

function Faq() {
  return (
    <section className="faq">
      <div className="faq__container">
        <PhTextArea data={faqPhTextArea} />
        <FaqItemsMenu className={"faq__wrapper faq__wrapper_main"} />
      </div>
      <PageLine id={"faq-pageLine"} />
    </section>
  );
}

export default Faq;
