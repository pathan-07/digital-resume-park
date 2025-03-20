
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
            A passionate software developer who loves building innovative solutions with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="space-y-6">
            <p className="text-gray-600">
              I am a data scientist and software developer with expertise in building web applications and data analysis tools. My passion lies in transforming complex data into intuitive, user-friendly interfaces that help people make informed decisions.
            </p>
            <p className="text-gray-600">
              With a background in machine learning and software development, I specialize in creating applications that bridge the gap between sophisticated algorithms and accessible user experiences.
            </p>
            <p className="text-gray-600">
              I'm constantly learning and exploring new technologies to stay at the forefront of innovation in the rapidly evolving tech landscape.
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
                  Bachelor's in Computer Science, with specialization in Data Science
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
                  3+ years developing web applications and data visualization tools
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
                  Python, React, Data Analysis, Machine Learning, Web Development
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
