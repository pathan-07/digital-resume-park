import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction App",
    description:
      "This project involves building a predictive model to diagnose diabetes based on various health metrics. The model uses logistic regression to classify individuals as diabetic or non-diabetic based on their medical attributes.",
    image: "/uploads/diabeteies.png",
    tags: ["Python", "Machine Learning", "Data Visualization"],
    liveLink: "https://first-python-project.onrender.com",
    repoLink: "https://github.com/pathan-07/first-python-project",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction Model",
    description:
      "A data analysis tool that predicts car prices based on various features and market trends.",
    image: "/uploads/car.png",
    tags: ["Data Analysis", "Machine Learning", "Python"],
    liveLink: "https://car-price-prediction-model.onrender.com",
    repoLink: "https://github.com/pathan-07/car-price-prediction-model",
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    description:
      "The IPL Win Predictor Model predicts the outcomes of Indian Premier League (IPL) matches using historical data and real-time match information. It provides accurate win probabilities for competing teams with dynamic visualizations and accurate data analysis.",
    image: "/uploads/ipl.png",
    tags: ["Streamlit", "Data Science", "Python", "Machine Learning"],
    liveLink: "https://ipl-prediction-model-.onrender.com",
    repoLink: "https://github.com/pathan-07/ipl-prediction-model-",
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Model",
    description:
      "Developed and deployed a deep learning model for breast cancer detection using TensorFlow. The model leverages key features to predict malignancy with high accuracy, though deployment on Render's free tier presented challenges due to VRAM limitations.",
    image: "/uploads/cancer.png",
    tags: ["Healthcare", "Machine Learning", "Image Analysis"],
    liveLink: "https://cancer-prediction-model.onrender.com",
    repoLink: "https://github.com/pathan-07/cancer-prediction-model",
  },
  {
    id: "Chrome Extension",
    title: "Chrome Plugin (Extension)",
    description:
      "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.ies.",
    image: "/uploads/c1.png",
    tags: ["Chrome Extension", "Web Development", "JavaScript"],
    liveLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
    repoLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
  },
  {
    id: "Marketing 101",
    title: "Marketing 101",
    description:
      "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.ies.",
    image: "/uploads/market.jpeg",
    tags: ["Canva", "Graphics", "Design"],
    ConnectME: "https://www.linkedin.com/in/pathan-mo-faizan-khan/",
  },
  {
    id: "Sms Spam Detection",
    title: "SMS SPAM DETECTION Using NLP",
    description:
      "Developed an AI-powered SMS spam detection system that leverages Natural Language Processing and TF-IDF vectorization to accurately classify messages as spam or legitimate. The project features a secure web interface with registration and OTP-based login to ensure robust user authentication.",
    image: "/uploads/nlp.png",
    tags: [
      "Python",
      "NLTK",
      "NLP",
      "Web Application",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "https://sms-spam-detect.onrender.com",
    repoLink: "https://github.com/pathan-07/SMS-SPAM-DETECTION-USING-NLP",
  },
];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  ConnectME?: string;
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
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
            Explore my recent projects that showcase my skills and expertise in
            and Different Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > visibleProjects && (
          <div className="mt-12 text-center reveal">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Load More Projects ({projects.length - visibleProjects} remaining)
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
    liveLink?: string;
    repoLink?: string;
    ConnectME?: string;
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
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.ConnectME && (
              <a
                href={project.ConnectME}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
