import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Badge from "../common/Badge";
import Card from "../common/Card";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          title="My Projects"
          subtitle="A collection of applications and solutions I've built while exploring full-stack development, frontend engineering, and emerging technologies."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex h-full flex-col"
            >
              {/* Project Header */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-white">
                  Key Features
                </h4>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm text-slate-400"
                    >
                      <span className="text-blue-400">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-slate-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-blue-400"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FiGithub />
                  Source Code
                  <FiArrowUpRight />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-blue-400 transition-colors hover:text-blue-300"
                    aria-label={`View live ${project.title} application`}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;