import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import Badge from "../common/Badge";

import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <Container>
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I use to build modern web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.category}>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {skill.category}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;