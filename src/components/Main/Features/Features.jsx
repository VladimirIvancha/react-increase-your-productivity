import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import { featuresPhTextArea } from "../../../utils/initial-data";
import FeaturesItems from "../../Menus/FeaturesItems/FeaturesItems";

function Features() {
    return (
      <section className="features">
        <PhTextArea
          data={featuresPhTextArea}
        />
        <FeaturesItems
            className={"features__wrapper"}
        />
        <div className="features__wrapper">
        <ActionButton
          name={'Read more'}
          className={'features__actionButton features__actionButton_red'}
        />
        <div className="features__wrapper">
            <div className="features__line"></div>
            <p className="features__text">or</p>
            <div className="features__line"></div>
        </div>
        <ActionButton
          name={'Get started'}
          className={'fetures__actionButton fetures__actionButton_blue'}
        />
        </div>
      </section>
    );
  }
  export default Features;