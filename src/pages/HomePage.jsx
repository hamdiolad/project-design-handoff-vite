import { HomeContainer } from "../components/Home/HomeContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { H2_Headline } from "../components/Typography/H2_Headline";

import { Ptext } from "../components/Typography/Ptext";

export const HomePage = () => {
  let h2_headline = "Online Yoga and Meditation";
  let h1_headline = "Elevate Your Body, Mind, and Spirit";
  let text = "Free trial ➤";

  return (
    <div className="home-page-wrapper">
      <div className="headline-wrapper">
        <H2_Headline h2_headline={h2_headline} />
        <H1_Headline h1_headline={h1_headline} />
      </div>
      <Ptext text={text} />
      <section className="home-card-page-wrapper">
        <HomeContainer />
      </section>
    </div>
  );
};
