import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

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
      "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.",
    image: "/uploads/c1.png",
    tags: ["Chrome Extension", "Web Development", "JavaScript"],
    liveLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
    repoLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
  },
  {
    id: "Marketing 101",
    title: "Marketing 101",
    description:
      "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.",
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

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group flex flex-col h-full overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
          <div className="flex items-center text-primary group-hover:gap-2 transition-all">
            View Project <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.length);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    });

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

export default Projects;