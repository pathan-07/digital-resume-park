import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-primary/10 text-primary rounded-full font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover My Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate software developer who loves building innovative
            solutions with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="space-y-6">
            <p className="text-gray-600">
              Hello Everyone! My name is Faizan, and I am currently pursuing a
              Bachelor of Engineering in Computer Science from the Shree
              Swaminarayan Institute of Technology, affiliated with Gujarat
              Technological University.
            </p>
            <p className="text-gray-600">
              I have had the privilege of interning at Scaler School of
              Technology's Young Innovators Internship Program 2.0, where I
              gained hands-on experience in innovative solutions. Additionally,
              I joined TechSaksham's AI: Transformative Learning Internship, a
              joint initiative by Microsoft, SAP, AICTE and Edunet Foundation
              where I developed AI-driven project prototypes under the guidance
              of industry experts and earned certifications in cutting-edge
              technologies.
            </p>
            <p className="text-gray-600">
              The field of Artificial Intelligence fascinates me, especially
              with the rapid advancements brought by tools like ChatGPT-4 and
              Gemini, which surpass their predecessors. Exploring how these
              innovations transform our lives fuels my curiosity.
            </p>
            <p className="text-gray-600">
              Beyond AI, I am deeply interested in Quantum Mechanics and The
              Theory of Relativity. I often ponder how these groundbreaking
              theories will reshape our understanding of the universe and
              influence the future.
            </p>
            <p className="text-gray-600">
              I aspire to continue growing as a professional engineer,
              contributing to technological advancements that redefine
              possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4 p-5 rounded-lg glass-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Education</h3>
                <p className="text-gray-600">
                  Bachelor of Engineering in Computer Science, Shree
                  Swaminarayan Institute of Technology (GTU)
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg glass-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Experience</h3>
                <p className="text-gray-600">
                  Intern at Scaler School of Technology and TechSaksham's AI
                  Transformative Learning Program
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg glass-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Skills</h3>
                <p className="text-gray-600">
                  Python, Artificial Itelligence, Machine Learning, Web
                  Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
