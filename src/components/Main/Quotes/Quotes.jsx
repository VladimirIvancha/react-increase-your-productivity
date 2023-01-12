import React from "react";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import { quotesPhpTextArea } from "../../../utils/initial-data";
import QuotesSwiper from "../../Swiper/QuotesSwiper/QuotesSwiper";
import PageLine from "../../Shapes/Lines/PageLine";

function Quotes() {
  return (
    <section className="quotes">
      <div className="quotes__container">
        <PhpTextArea data={quotesPhpTextArea} />
        <QuotesSwiper />
      </div>
      <PageLine id={"quotes-pageLine"} />
    </section>
  );
}

export default Quotes;
