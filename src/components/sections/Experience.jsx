import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiExternalLink,
  FiGitPullRequest,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Badge from "../common/Badge";
import Card from "../common/Card";

import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading
          title="Experience & Contributions"
          subtitle="My practical development experience, open-source contributions, collaborative projects, and technical learning."
        />

        <div className="relative mx-auto max-w-4xl space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card>
                <div className="flex flex-col gap-5">

                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                        {item.category === "Open Source Contribution" ? (
                          <FiGitPullRequest />
                        ) : (
                          <FiBriefcase />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-blue-400">
                          {item.category}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-slate-300">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <Badge>{item.status}</Badge>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <FiCalendar />
                    <span>{item.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  {item.responsibilities.length > 0 && (
                    <ul className="space-y-2">
                      {item.responsibilities.map((task) => (
                        <li
                          key={task}
                          className="flex gap-3 text-sm text-slate-300"
                        >
                          <span className="text-blue-400">▹</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <Badge key={technology}>
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  {/* External Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                    >
                      {item.linkLabel}
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;