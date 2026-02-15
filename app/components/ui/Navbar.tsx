"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`mx-auto max-w-site px-6 md:px-12 transition-all duration-300 ${
            hasScrolled && !isOpen
              ? "py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-border"
              : "py-5 bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between relative z-[60]">
            <Link
              href="/"
              className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                isOpen
                  ? "text-text-primary"
                  : "text-text-primary hover:text-accent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Robin Chabert
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-body text-sm font-medium px-5 py-2.5 bg-accent text-bg-primary rounded-full hover:bg-accent-hover transition-all duration-300"
              >
                Discutons de votre projet
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="w-6 h-5 relative">
                <span
                  className={`absolute left-0 w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[55] bg-bg-primary flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-4xl font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-text-primary hover:text-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-4"
            >
              <Link
                href="/contact"
                className="font-body text-base font-medium px-8 py-3.5 bg-accent text-bg-primary rounded-full hover:bg-accent-hover transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Discutons de votre projet
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
