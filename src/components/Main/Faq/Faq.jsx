import React from "react";
import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import { faqPhTextArea } from "../../../utils/initial-data";
import FaqItemsMenu from "../../Menus/FaqItemsMenu/FaqItemsMenu";

function Faq() {
    return (
        <section className="faq">
            <PhTextArea data={faqPhTextArea}/>
            <FaqItemsMenu
                className={"faq__wrapper faq__wrapper_main"}
            />
        </section>
    );
}

export default Faq;