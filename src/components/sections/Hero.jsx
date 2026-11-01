import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
    FiArrowUpRight,
    FiGithub,
    FiLinkedin,
    FiCode,
    FiTerminal,
    FiMail,
} from "react-icons/fi";

import Container from "../common/Container";
import personal from "../../data/personal";
import social from "../../data/social";

const socialLinks = [
    {
        name: "GitHub",
        href: social.github,
        icon: FiGithub,
    },
    {
        name: "LinkedIn",
        href: social.linkedin,
        icon: FiLinkedin,
    },
    {
        name: "LeetCode",
        href: social.leetcode,
        icon: FiCode,
    },
];

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-start overflow-hidden bg-slate-950 py-12 sm:py-16 lg:items-center lg:py-20"
        >
            {/* Background Effects */}
            <div
                className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"
                aria-hidden="true"
            />

            <Container>
                <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="min-w-0"
                    >

                        {/* Availability */}
                        <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">

                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>

                            <span className="text-xs font-medium text-emerald-400 sm:text-sm">
                                {personal.availability}
                            </span>

                        </div>

                        {/* Introduction */}
                        <p className="mb-3 text-base font-medium text-slate-400 sm:text-lg">
                            Hello, I'm
                        </p>

                        <h1 className="break-words text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                            {personal.name}
                            <span className="text-blue-500">.</span>
                        </h1>

                        {/* Animated Role */}
                        <div className="mt-5 flex min-h-16 flex-wrap items-center gap-2 text-xl font-semibold sm:text-2xl md:text-3xl">

                            <span className="shrink-0 text-slate-300">
                                I'm a
                            </span>

                            <span className="min-w-0 text-blue-400">
                                <TypeAnimation
                                    sequence={[
                                        "Full Stack Developer",
                                        2000,
                                        "MERN Stack Developer",
                                        2000,
                                        "React Developer",
                                        2000,
                                        "Problem Solver",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>

                        </div>

                        {/* Description */}
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">

                            {personal.subtitle} I enjoy building modern,
                            responsive, and user-friendly web applications
                            while continuously improving my problem-solving
                            and software development skills.

                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:px-6 sm:py-3.5 sm:text-base"
                            >
                                View Projects
                                <FiArrowUpRight />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 sm:px-6 sm:py-3.5 sm:text-base"
                            >
                                Contact Me
                                <FiMail />
                            </a>

                        </div>

                        {/* Social Links */}
                        <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">

                            <span className="text-sm font-medium text-slate-500">
                                Find me on
                            </span>

                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        title={item.name}
                                        className="rounded-lg border border-slate-800 p-2.5 text-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}

                        </div>

                    </motion.div>

                    {/* Right Visual Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full min-w-0 max-w-lg"
                    >

                        <div
                            className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl"
                            aria-hidden="true"
                        />

                        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-blue-950/30 sm:rounded-3xl">

                            {/* Window Header */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/50 px-4 py-4 sm:px-6">

                                <div className="flex shrink-0 items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <span className="h-3 w-3 rounded-full bg-green-500" />
                                </div>

                                <div className="flex min-w-0 items-center gap-2 text-xs text-slate-500 sm:text-sm">
                                    <FiTerminal className="shrink-0" />
                                    <span className="truncate">developer.js</span>
                                </div>

                                <FiCode className="shrink-0 text-slate-500" />

                            </div>

                            {/* Code Content */}
                            <div className="space-y-4 overflow-x-auto p-4 font-mono text-xs sm:space-y-5 sm:p-6 sm:text-sm">

                                <p className="whitespace-nowrap text-slate-500">
                  // A little about me
                                </p>

                                <div className="whitespace-nowrap">
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-blue-400">developer</span>{" "}
                                    <span className="text-white">= {"{"}</span>
                                </div>

                                <div className="space-y-3 pl-4 sm:pl-5">

                                    <p className="whitespace-nowrap">
                                        <span className="text-slate-300">name:</span>{" "}
                                        <span className="text-emerald-400">
                                            "{personal.name}"
                                        </span>
                                        ,
                                    </p>

                                    <p className="whitespace-nowrap">
                                        <span className="text-slate-300">role:</span>{" "}
                                        <span className="text-emerald-400">
                                            "{personal.title}"
                                        </span>
                                        ,
                                    </p>

                                    <p className="whitespace-nowrap">
                                        <span className="text-slate-300">stack:</span>{" "}
                                        <span className="text-emerald-400">
                                            "MERN Stack"
                                        </span>
                                        ,
                                    </p>

                                    <p className="whitespace-nowrap">
                                        <span className="text-slate-300">location:</span>{" "}
                                        <span className="text-emerald-400">
                                            "{personal.location}"
                                        </span>
                                        ,
                                    </p>

                                    <p className="whitespace-nowrap">
                                        <span className="text-slate-300">passion:</span>{" "}
                                        <span className="text-emerald-400">
                                            "Building useful products"
                                        </span>
                                    </p>

                                </div>

                                <p className="whitespace-nowrap text-white">
                                    {"};"}
                                </p>

                                <div className="border-t border-slate-800 pt-5">

                                    <p className="whitespace-nowrap text-slate-500">
                    // Always learning, always building.
                                    </p>

                                    <p className="mt-3 whitespace-nowrap">
                                        <span className="text-purple-400">function</span>{" "}
                                        <span className="text-blue-400">buildFuture</span>
                                        <span className="text-white">() {"{"}</span>
                                    </p>

                                    <p className="whitespace-nowrap pl-4 text-emerald-400 sm:pl-5">
                                        return "Keep building 🚀";
                                    </p>

                                    <p className="whitespace-nowrap text-white">
                                        {"}"}
                                    </p>

                                </div>

                            </div>
                            {/* Bottom Status */}
                            <div
                                data-code-panel-footer
                                className="code-panel-footer flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/50"
                            >
                                <span className="text-xs text-slate-500">
                                    JavaScript
                                </span>

                                <span className="flex items-center gap-2 text-xs text-emerald-400">
                                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                    Ready to build
                                </span>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;