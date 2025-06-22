import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ResearchSection = () => {
  return (
    <section
      id="research"
      className="mt-24 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-12"
    >
      {/* Header */}
      <motion.div {...fadeIn} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-script font-light text-blue-300 underline decoration-2 underline-offset-8">
          research.
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 font-sans font-light leading-relaxed mt-2">
          currently, i'm interested in exploring ai security in llms and engineering novel interpretability methods to understand machine learning models. 
          i'm also dipping my toes into social choice, mechanism design, and causality. most importantly, i'm drawn to areas which intersect the human value of <em>trust</em> and <em>mathematics</em>.
        </p>
      </motion.div>

      {/* Recent Works */}
      <motion.div
        {...fadeIn}
        viewport={{ once: true }}
        className="bg-blue-200/10 border border-blue-300/10 shadow-md rounded-2xl backdrop-blur-sm hover:shadow-lg transition px-6 sm:px-8 md:px-10 lg:px-14 py-10 space-y-8"
      >
        <h3 className="text-2xl font-sans font-semibold text-blue-100 underline underline-offset-4">
          Recent Works
        </h3>

        <div className="space-y-8 text-blue-100">
          {[
            {
              authors: "Mehrotra, A. & Kurz A.",
              title: "Incorporating Patient and Donor Choice in Kidney Exchanges.",
              venue: "AAAS Annual Meeting",
              link: "",
              label: "abstract",
            },
            {
              authors: "Mehrotra, A., Bhusal, D., & Rastogi, N.",
              title: "Hessian Sets: Uncovering Feature Interactions in Image Classification.",
              venue: "2nd NeurIPS ATTRIB Workshop",
              link: "https://openreview.net/pdf?id=qcDCKlP7Tk",
              label: "abstract",
            },
            {
              authors: "Mehrotra, A.",
              title: "AdvMed: Detecting Adversarial Attacks in Medical Deep Learning Systems.",
              venue: "ISBI 2024, ISEF 2024",
              link: "https://isef.net/project/robo057-detecting-attacks-in-medical-deep-learning",
              label: "abstract",
            },
            {
              authors: "Malladi, B., Mehrotra, A., & Hanchate A.",
              title: "SnoozeNet: Causality-Driven Transformers for Sleep Stage Classification.",
              venue: "MIT URTC",
              link: "https://ieeexplore.ieee.org/abstract/document/10937603",
              label: "paper",
              color: "green",
            },
            {
              authors: "Mehrotra, A.",
              title: "Trust Management System for Blockchain Organ Donation Framework.",
              venue: "Women in Cybersecurity Conference",
              link: "https://www.wicys.org/wp-content/uploads/2023/06/2023_WiCyS_Program_Final.pdf",
              label: "abstract",
            },
          ].map((entry, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="text-blue-300 underline hover:text-blue-400 transition">
                  {entry.authors}
                </span>{" "}
                ({entry.title.includes("2025") ? "2025" : "2024"}).{" "}
                <strong>{entry.title}</strong>
                <em className="block text-sm mt-1">{entry.venue}</em>
              </p>
              {entry.link && (
                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                  <span
                    className={`inline-block ${
                      entry.color === "green"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    } text-xs font-semibold px-2 py-0.5 rounded mt-2`}
                  >
                    {entry.label}
                  </span>
                </a>
              )}
              {i !== 4 && (
                <hr className="mt-6 border-t border-blue-300/20" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
