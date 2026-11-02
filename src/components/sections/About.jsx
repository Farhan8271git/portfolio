import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

import about from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <Container>
        <SectionHeading
          title={about.heading}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              My Journey
            </h3>

            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-400 leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.highlights.map((item, index) => (
              <Card
                key={item.title}
                className={index === 2 ? "sm:col-span-2" : ""}
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 leading-7">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;