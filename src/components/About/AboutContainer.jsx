import AboutUagnes from "../../assets/AboutUagnes.png";
import AboutUcecilia from "../../assets/AboutUcecilia.png";
import AboutUlara from "../../assets/AboutUlara.png";
import AboutUlinn from "../../assets/AboutUlinn.png";

import { H2_Headline } from "../Typography/H2_Headline";
import { AboutCard } from "./AboutCard";
import { ClientQuotes } from "./ClientQuotes";

export const AboutContainer = () => {
  let h2_headline_1 = "About YOMY";
  let h2_headline_2 = "Our Clients - About the Journey";

  const about_studio_info = [
    {
      id: "1b",
      image: AboutUagnes,
      headline: "Our Mission",
      text: [
        "At YOMY, we're dedicated to creating a sanctuary where individuals can find strength, balance, and inner harmony.",
        "Our online platform ensures you can embark on this transformative journey anytime, from the comfort of your own space.",
      ],
      studio_employee: "Agnes・Co-Founder",
      alt: "Joyful woman sitting cross-legged on lush grass beside a lake, framed by majestic mountains in the background.",
    },
    {
      id: "2b",
      image: AboutUcecilia,
      headline: "Our Philosophy",
      text: [
        "We believe that true wellness encompasses the integration of mind, body, and soul.",
        "Through the practices of yoga and meditation, we strive to empower individuals to discover their inner strength, achieve balance, and foster a deep sense of well-being.",
        "Your journey starts here, and it continues with you, wherever you are.",
      ],
      studio_employee: "Cecilia・Co-Founder",
      alt: "Woman outdoors, eyes closed, left hand placed on her heart",
    },
    {
      id: "3b",
      image: AboutUlara,
      headline: "Our Instructors",
      text: [
        "Our diverse team of experienced instructors brings a wealth of knowledge and passion to each class.",
        "With specialized expertise in various forms of yoga and meditation, they are dedicated to creating a nurturing environment for your personal growth and transformation.",
      ],
      studio_employee: "Linn・Team leader",
      alt: "Woman standing in a tree pose outdoors.",
    },
    {
      id: "4b",
      image: AboutUlinn,
      headline: "Our Online Studio",
      text: [
        "Our online studio creates flexibility to practice from any location and fits into your schedule.",
        "Access a variety of classes and instructors and eliminate commuting time and expenses. Join a inclusive community that connecting practitioners worldwide.",
      ],
      studio_employee: "Lora Site・Manager",
      alt: "Woman seated by a lake, with her eyes closed and her hands in her lap.",
    },
  ];

  const client_quotes = [
    {
      id: "1c",
      text: `"The online platform provides flexibility, and the instructors radiate positivity and expertise. I've found a deeper sense of balance and strength in both my body and mind."`,
      name: "Emily",
    },
    {
      id: "2c",
      text: `"I've tried many yoga studios, but YOMY stands out. The instructors are truly passionate about what they do, and it shows in every class."`,
      name: "David",
    },
    {
      id: "3c",
      text: `"I can't recommend YOMY enough. The community is so welcoming, and the classes are diverse and challenging. This studio has helped me find a sense of calm and strength that I never thought possible."`,
      name: "Sarah",
    },
  ];

  return (
    <div className="about-card-container">
      <H2_Headline h2_headline={h2_headline_1} />
      {about_studio_info.map((about_studio) => (
        <div className="about-card-wrapper" key={about_studio.id}>
          <AboutCard
            headline={about_studio.headline}
            articleImage={about_studio.image}
            imageAltText={about_studio.alt}
            studioCardText={about_studio.text}
            studio_employee={about_studio.studio_employee}>
            <div className="image-container">
              <img src={about_studio.image} alt={about_studio.alt} />
            </div>
            <div className="text-container">
              {about_studio.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AboutCard>
        </div>
      ))}
      <div className="client-quote-wrapper">
        <H2_Headline h2_headline={h2_headline_2} />
        {client_quotes.map((client) => (
          <div className="quote-wrapper" key={client.id}>
            <ClientQuotes clientQuote={client.text} clientName={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
