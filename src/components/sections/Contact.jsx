import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import personal from "../../data/personal";
import social from "../../data/social";

function Contact() {
  const contactItems = [
    {
      id: 1,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: FiMail,
    },
    {
      id: 2,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
      icon: FiPhone,
    },
    {
      id: 3,
      label: "GitHub",
      value: "Explore my repositories",
      href: social.github,
      icon: FiGithub,
    },
    {
      id: 4,
      label: "LinkedIn",
      value: "Connect professionally",
      href: social.linkedin,
      icon: FiLinkedin,
    },
    {
      id: 5,
      label: "LeetCode",
      value: "Explore my coding practice",
      href: social.leetcode,
      icon: FiCode,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have an opportunity, project idea, or just want to connect? Feel free to reach out."
        />

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10"
          >
            <div className="grid gap-10 md:grid-cols-2">

              {/* Introduction */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  Contact Me
                </span>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                  Let's Build Something
                  <span className="text-blue-400"> Great Together.</span>
                </h3>

                <p className="mt-5 leading-relaxed text-slate-400">
                  I'm a Computer Science student and Full Stack Developer
                  interested in building scalable web applications and
                  exploring backend development and cybersecurity.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="text-sm font-medium text-green-400">
                    {personal.availability}
                  </span>
                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Let's Talk
                  <FiArrowUpRight />
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("https://");

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={`${item.label}: ${item.value}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 transition-all duration-300 hover:border-blue-500"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-white">
                          {item.label}
                        </h4>

                        <p className="truncate text-sm text-slate-400">
                          {item.value}
                        </p>
                      </div>

                      <FiArrowUpRight className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-400" />
                    </motion.a>
                  );
                })}
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;