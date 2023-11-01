import { AboutContainer } from "../components/About/AboutContainer";
import { HeadlineAbout } from "../components/Typography/HeadlineAbout";
import { Ptext } from "../components/Typography/Ptext";
import "./AboutPage.css";
import heroimage1 from "../assets/heroimage.png";

export const About = () => {
  let headlineabout =
    "Discover Strength, Balance, and Inner Harmony Anywhere, Anytime";
  // let text = "Start a Free trial ▾";

  return (
    <div className="about-page">
      <div className="hero-image">
        <img src={heroimage1} alt="Hero Image" />
      </div>
      <div className="text-overlay">
        <HeadlineAbout headlineabout={headlineabout} />
      </div>
      <div className="about-page-wrapper">
        <Ptext text="Start a Free trial ▾" className="smaller-text" />
        <button className="join-button">Join the Journey</button>
      </div>
      <section className="about-card-page-wrapper">
        <AboutContainer />
      </section>
    </div>
  );
};
