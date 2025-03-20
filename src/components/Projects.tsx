
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction App",
    description: "A machine learning application that predicts the likelihood of diabetes based on health parameters.",
    image: "/lovable-uploads/7580f279-c120-4664-abba-111b61c18a75.png",
    tags: ["Python", "Machine Learning", "Data Visualization"],
    liveLink: "https://first-python-project-xgrl.onrender.com",
    repoLink: "https://github.com/username/diabetes-prediction",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction Model",
    description: "A data analysis tool that predicts car prices based on various features and market trends.",
    image: "/lovable-uploads/904be275-398a-4a6f-a408-1a1672af4774.png",
    tags: ["Data Analysis", "Machine Learning", "Python"],
    liveLink: "https://car-price-prediction-model-6g5r.onrender.com",
    repoLink: "https://github.com/username/car-price-prediction",
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    description: "A sports analytics application that predicts cricket match outcomes using historical data.",
    image: "/lovable-uploads/bd6b089d-09b1-4bc2-9d25-461d0960a199.png",
    tags: ["Sports Analytics", "Data Science", "Web Application"],
    liveLink: "https://ipl-prediction-model.onrender.com",
    repoLink: "https://github.com/username/ipl-predictor",
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Model",
    description: "A medical imaging analysis tool for early detection of breast cancer using machine learning.",
    image: "/lovable-uploads/3f1b9188-cec5-491b-b6b3-2a85404a3d49.png",
    tags: ["Healthcare", "Machine Learning", "Image Analysis"],
    liveLink: "https://breast-cancer-detection.onrender.com",
    repoLink: "https://github.com/username/breast-cancer-detection",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-primary/10 text-primary rounded-full font-medium">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Latest Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects that showcase my skills and expertise in software development and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center reveal">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    repoLink: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div 
      className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <Link
            to={`/project/${project.id}`}
            className="text-primary hover:text-primary/80 font-medium"
          >
            View Details
          </Link>
          <div className="flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
