import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-32 px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto pb-10 text-center space-y-6">
      {/* Icons */}
      <div className="flex justify-center gap-6 text-emerald-50">
        <a
          href="mailto:amehrotr@caltech.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-50 transition"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushi-m006/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-50 transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://scholar.google.com/citations?user=9vQXUUYAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-50 transition"
        >
          <GraduationCap size={20} />
        </a>
        <a
          href="https://github.com/ayushimehrotra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-50 transition"
        >
          <Github size={20} />
        </a>
      </div>

      {/* Tagline */}
      <p className="text-sm text-emerald-50 font-light">
        made with relentless determination &lt;3
      </p>
    </footer>
  );
};
