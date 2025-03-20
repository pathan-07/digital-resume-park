
import { Check, Sparkles } from "lucide-react";

const skills = {
  technical: [
    "Python",
    "JavaScript",
    "React",
    "Data Analysis",
    "Machine Learning",
    "TensorFlow",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Pandas",
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Project Management",
    "Analytical Thinking",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-primary/10 text-primary rounded-full font-medium">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and soft skills that I've developed over years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          <div className="glass-card p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.technical.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.soft.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
