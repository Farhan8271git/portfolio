import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

import Container from "../common/Container";
import navigation from "../../constants/navigation";
import personal from "../../data/personal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavigation = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const hasValidResume = personal.resume?.startsWith("/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <Container>
        <nav
          className="flex h-20 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={() => handleNavigation("#home")}
            className="shrink-0 text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            Farhan<span className="text-blue-500"> Nur</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-7">

            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                aria-current={
                  activeLink === item.href ? "location" : undefined
                }
                className={`whitespace-nowrap text-sm font-medium transition-colors duration-300 ${activeLink === item.href
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* Resume Button */}
          {hasValidResume && (
            <a
              href={personal.resume}
              download
              className="hidden shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 lg:inline-flex"
            >
              Resume
              <FiArrowUpRight />
            </a>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-2xl text-white transition-colors hover:bg-slate-800 lg:hidden"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen
              ? "max-h-[32rem] border-t border-white/10 py-5 opacity-100"
              : "max-h-0 opacity-0"
            }`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="flex flex-col gap-2">

            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => handleNavigation(item.href)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeLink === item.href
                    ? "bg-blue-600/10 text-blue-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                {item.name}
              </a>
            ))}

            {hasValidResume && (
              <a
                href={personal.resume}
                download
                tabIndex={isMenuOpen ? 0 : -1}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Download Resume
                <FiArrowUpRight />
              </a>
            )}

          </div>
        </div>

      </Container>
    </header>
  );
};

export default Navbar;