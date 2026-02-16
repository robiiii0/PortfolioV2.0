import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const footerLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/robin_chabb/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/robin-chabert-863105232/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/robiiii0",
    icon: FaGithub,
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-text-primary"
            >
              Robin Chabert
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-xs">
              Développeur web freelance. Je conçois et développe des expériences
              numériques sur mesure pour donner vie à vos projets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-text-primary uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display text-sm font-semibold text-text-primary uppercase tracking-widest mb-6">
              Réseaux
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary text-sm hover:text-accent transition-colors duration-300 group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Robin Chabert. Tous droits réservés.
          </p>
          <p className="text-text-secondary text-xs">
            Conçu et développé avec passion
          </p>
        </div>
      </div>
    </footer>
  );
}
