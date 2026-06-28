import React from "react";
import UpdateIcon from "./icons/UpdatedIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ResumeIcon from "./icons/ResumeIcon";

const Footer = () => {
  return (
    <footer className="max-w-xl mx-auto px-6 sm:px-2 mb-8 text-[#4b5563] dark:text-[#9ca3af]">
      {/* Message */}
      <p className="text-sm leading-relaxed">
        If you're interested in collaborating on building some cool stuff, feel
        free to DM me on
        <a
          href="https://x.com/#"
          target="_blank"
          className="underline px-1 decoration-gray-200 decoration-4 dark:decoration-gray-800"
        >
          X
        </a>
        , or drop me an
        <a
          href="mailto:dev@#"
          className="underline px-1 decoration-gray-200 decoration-4 dark:decoration-gray-800"
        >
          email
        </a>
        . You can also check out more of my work
        <a
          href="/proof-of-work"
          className="underline px-1 decoration-gray-200 decoration-4 dark:decoration-gray-800"
        >
          here
        </a>
        and on
        <a
          href="https://github.com/soumya-singh18"
          target="_blank"
          className="underline px-1 decoration-gray-200 decoration-4 dark:decoration-gray-800"
        >
          GitHub
        </a>
        .
      </p>

      {/* Built by */}
      <div className="mt-6">
        <p className="text-xs">
          Built and maintained by{" "}
          <a
            href="https://x.com/#"
            target="_blank"
            className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800"
          >
            Soumya
          </a>
        </p>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-4">
        <div className="flex items-center gap-1">
          <HeartIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300" />
          <a href="https://soumyaa.xyz" target="_blank" className="text-sm text-zinc-900 dark:text-zinc-300">
            soumyaa.xyz
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/soumya-singh18" target="_blank">
            <GithubIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>

          <a href="https://linkedin.com/in/#" target="_blank">
            <LinkedinIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>

          <a href="/resume.pdf" target="_blank">
            <ResumeIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Meta */}
      <div className="flex justify-between text-xs mt-4">
        <div>
          Built with{" "}
          <span className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800">
            Next.js
          </span>
        </div>

        <div className="flex items-center gap-1">
          <UpdateIcon />
          Last updated 11th June 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;