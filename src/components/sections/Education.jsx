import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Badge from "../common/Badge";
import Card from "../common/Card";

import education from "../../data/education";

function Education() {
  return (
    <section id="education" className="py-20">
      <Container>
        <SectionHeading
          title="Education"
          subtitle="My academic journey and educational background."
        />

        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                    <FaGraduationCap />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.degree}
                        </h3>

                        <p className="mt-1 text-blue-400">
                          {item.specialization}
                        </p>
                      </div>

                      <Badge>{item.status}</Badge>
                    </div>

                    <h4 className="mt-5 text-lg font-medium text-slate-200">
                      {item.institution}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                      <span>{item.duration}</span>

                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {item.location}
                      </span>
                    </div>
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

export default Education;