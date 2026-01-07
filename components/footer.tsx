"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:ml-48 border-t border-border py-8 px-6 lg:px-16 bg-card">
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold text-accent mb-2">Navigation</p>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-accent mb-2">Social</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/69-Jerry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jerrywilsonbuakah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/pressplaycfc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-accent mb-2">
              <Mail className="w-5 h-5 text-accent inline-block mr-2" />
              Email
            </p>
            <a
              href="mailto:wilsonjerry182@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              wilsonjerry182@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Jerry Buaka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
