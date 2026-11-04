import { motion } from "framer-motion";
import {
  FiGitPullRequest,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Badge from "../common/Badge";
import Card from "../common/Card";

import openSource from "../../data/openSource";

function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <Container>
        <SectionHeading
          title="Open Source Contributions"
          subtitle="Contributing to open-source projects, improving documentation, and collaborating with developer communities."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {openSource.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <Card className="h-full">
                <div className="flex h-full flex-col">

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-blue-400">
                      <FiGitPullRequest className="text-xl" />
                      <span className="text-sm font-medium">
                        Open Source
                      </span>
                    </div>

                    <Badge>{item.status}</Badge>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.repository}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.organization}
                  </p>

                  <h4 className="mt-5 text-lg font-semibold text-blue-400">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-2 text-sm text-slate-300"
                      >
                        <span className="text-blue-400">▹</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <Badge key={technology}>
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4 pt-8">
                    <a
                      href={item.pullRequest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                    >
                      View Pull Request
                      <FiExternalLink />
                    </a>

                    <a
                      href={item.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                    >
                      Repository
                      <FiGithub />
                    </a>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OpenSource;