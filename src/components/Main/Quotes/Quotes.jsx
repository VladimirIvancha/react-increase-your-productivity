import React from "react";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import { quotesPhpTextArea } from "../../../utils/initial-data";
import QuotesSwiper from "../../Swiper/QuotesSwiper/QuotesSwiper";

function Quotes() {
    return (
        <section className="quotes">
            <PhpTextArea 
                data={quotesPhpTextArea} 
            />
            <QuotesSwiper />
        </section>
    );
};

export default Quotes;