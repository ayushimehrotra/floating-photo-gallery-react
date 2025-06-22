import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Crack the Code",
      role: "Founder & Director",
      category: "Service",
      status: "past",
      description:
        "Crack the Code is a nonprofit organization that organizes cybersecurity hackathons internationally for high schoolers and college students.",
      link: "https://crackthecode.dev/",
    },
    {
      title: "OC Coder",
      role: "President",
      category: "Service",
      status: "past",
      description:
        "I run OC Coder, a sub-organization under STEAM for All, and we conduct monthly coding-related events for over 1000+ participants with 250+ volunteers!",
      link: "https://steamforall.org/",
    },
    {
      title: "RIT AI4Sec",
      role: "Researcher",
      category: "Labs",
      status: "current",
      description:
        "Mentored by Dipkamal Bhusal and Professor Nidhi Rastogi. Designed feature attribution for computer vision, presented at NeurIPS ATTRIB Workshop. Worked on patch attack detection with Toyota.",
      link: "https://nidhirastogi.github.io/",
    },
  ];

  const categories = ["Service", "Labs", "Awards"];

  return (
    <section
      id="work"
      className="mt-24 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-16"
    >
      <motion.div {...fadeIn} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-script font-light text-yellow-400 underline decoration-2 underline-offset-8">
          projects.
        </h2>
        <p className="text-lg sm:text-xl text-yellow-100 font-sans font-light leading-relaxed mt-2">
          a collection of nonprofit work, research, and academic initiatives i've contributed to—each one an exploration into building systems, solving problems, and creating impact.
        </p>
      </motion.div>

      {categories.map((category, catIdx) => {
        const filtered = projects.filter((p) => p.category === category);
        if (filtered.length === 0) return null;

        return (
          <motion.div
            key={category}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-sans font-semibold text-yellow-100 underline decoration-yellow-300/40">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => {
                const isCurrent = project.status === "current";
                return (
                  <div
                    key={index}
                    className={`relative group p-6 rounded-xl shadow transition duration-300 backdrop-blur-md ${
                      isCurrent
                        ? "bg-yellow-200/10 border border-yellow-300/20 text-gray-100 hover:ring-2 hover:ring-yellow-300/40 hover:shadow-lg"
                        : "bg-gray-700/40 border border-gray-600/20 text-gray-400 opacity-80 hover:opacity-100 hover:brightness-110"
                    }`}
                  >
                    {!isCurrent && (
                      <span className="absolute top-2 left-2 bg-gray-600/70 text-[10px] uppercase px-2 py-0.5 rounded text-white tracking-wide">
                        Past
                      </span>
                    )}

                    <h4
                      className={`text-lg font-semibold ${
                        isCurrent ? "text-yellow-200" : "text-gray-300"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`text-sm mb-2 ${
                        isCurrent ? "text-yellow-100" : "text-gray-400"
                      }`}
                    >
                      {project.role}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-3 text-xs underline ${
                          isCurrent
                            ? "text-yellow-300 hover:text-yellow-400"
                            : "text-gray-300 hover:text-gray-200"
                        }`}
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
