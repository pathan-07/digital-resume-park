import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "SST - School of Technology",
    position: "Freelance Internship",
    duration: "June 2024 - October 2024",
    description:
      "Developed my own portfolio without code for showcasing my skills and learnings. Also developed a Chrome Extension and worked on personal branding on LinkedIn.",
    skills: ["Canva", "No Code Website Builder", "Digital Marketing", "Graphics Designing", "Branding", "Json", "AI for Business", "Generative AI", "Prompt Engineering"],
  },
  {
    company: "Edunet Foundation",
    position: "AI: Transformative Learning with TechSaksham",
    duration: "December 2024 - January 2025",
    description:
      "Focused on research and development of AI-driven solutions, particularly in natural language processing and predictive modeling. Gained experience in deploying models to production and fine-tuning for real-world applications.",
    skills: ["Python", "Natural Language Processing", "Predictive Modeling", "Machine Learning", "NLTK", "Natural Language Toolkit", "Data Visualization", "Data Cleaning", "Data Analysis", "Data Preprocessing"],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-primary/10 text-primary rounded-full font-medium">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            My Professional Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my career showing the companies I've worked with and the roles I've performed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">
          <div className="lg:col-span-4">
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`py-4 px-6 text-left transition-all whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-l-2 lg:border-b-0 ${
                    activeTab === index
                      ? "border-primary text-primary font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="block text-sm lg:text-lg">{exp.company}</span>
                  <span className="block text-xs text-gray-500 mt-1">{exp.duration}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-900 rounded-lg text-white transition-all duration-300 ${
                  activeTab === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {exp.position}
                </h3>
                
                <div className="mb-6 flex items-start">
                  <Calendar className="mr-2 text-primary h-5 w-5 mt-1" />
                  <div>
                    <span className="font-semibold text-white/80">Duration:</span>{" "}
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-white/90 mb-6">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
