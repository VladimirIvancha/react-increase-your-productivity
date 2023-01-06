import React from "react";
import CircleSet from "../../Sets/Circle/CircleSet";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import { quotesPhpTextArea } from "../../../utils/initial-data";
import QuotesItemsMenu from "../../Menus/QuotesItemsMenu/QuotesItemsMenu";

function Quotes() {
    return (
        <section className="quotes">
            <PhpTextArea 
                data={quotesPhpTextArea} 
            />
            <div className="quotes__wrapper">
                <QuotesItemsMenu
                    className={"quotes__menu"}
                />
                <CircleSet
                    number={9}
                    setClassName={'quotes__circleSet'}
                    itemClassName={'quotes__circleSet-item'}
                />
            </div>
        </section>
    );
}

export default Quotes;