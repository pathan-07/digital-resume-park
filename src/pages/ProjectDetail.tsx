import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

// This should match the type in the Projects component
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

// Demo project data - in a real app, you would fetch this from an API or database
const projects: Project[] = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction App",
    description: "This project involves building a predictive model to diagnose diabetes based on various health metrics. The model uses logistic regression to classify individuals as diabetic or non-diabetic based on their medical attributes.",
    image: "/lovable-uploads/diabeteies.png",
    tags: ["Python", "Machine Learning", "Data Visualization"],
    liveLink: "https://first-python-project.onrender.com",
    repoLink: "https://github.com/pathan-07/first-python-project",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction Model",
    description: "A data analysis tool that predicts car prices based on various features and market trends.",
    image: "/lovable-uploads/car.png",
    tags: ["Data Analysis", "Machine Learning", "Python"],
    liveLink: "https://car-price-prediction-model.onrender.com",
    repoLink: "https://github.com/pathan-07/car-price-prediction-model",
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    description: "The IPL Win Predictor Model predicts the outcomes of Indian Premier League (IPL) matches using historical data and real-time match information. It provides accurate win probabilities for competing teams with dynamic visualizations and accurate data analysis.",
    image: "/lovable-uploads/ipl.png",
    tags: ["Streamlit", "Data Science", "Python", "Machine Learning"],
    liveLink: "https://ipl-prediction-model-.onrender.com",
    repoLink: "https://github.com/pathan-07/ipl-prediction-model-",
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Model",
    description: "Developed and deployed a deep learning model for breast cancer detection using TensorFlow. The model leverages key features to predict malignancy with high accuracy, though deployment on Render's free tier presented challenges due to VRAM limitations.",
    image: "/lovable-uploads/cancer.png",
    tags: ["Healthcare", "Machine Learning", "Image Analysis"],
    liveLink: "https://cancer-prediction-model.onrender.com",
    repoLink: "https://github.com/pathan-07/cancer-prediction-model",
  },
  {
    id: "Chrome Extension",
    title: "Chrome Plugin (Extension)",
    description: "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.ies.",
    image: "/lovable-uploads/chrome.png",
    tags: ["Chrome Extension", "Web Development", "JavaScript"],
    liveLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
    repoLink: "https://github.com/pathan-07/time-Tracker-Chrome-Plug-in-",
  },
  {
    id: "Marketing 101",
    title: "Marketing 101",
    description: "The Time Tracker Chrome Extension helps users monitor and manage their time spent on various websites. It tracks active tab usage in real-time and provides detailed reports to improve productivity and digital wellbeing.ies.",
    image: "/lovable-uploads/market.png",
    tags: ["Canva", "Graphics", "Design"],
    ConnectME: "https://www.linkedin.com/in/pathan-mo-faizan-khan/",
  },
  {
    id: "Sms Spam Detection",
    title: "SMS SPAM DETECTION Using NLP",
    description: "Developed an AI-powered SMS spam detection system that leverages Natural Language Processing and TF-IDF vectorization to accurately classify messages as spam or legitimate. The project features a secure web interface with registration and OTP-based login to ensure robust user authentication.",
    image: "/lovable-uploads/nlp.png",
    tags: ["Python", "NLTK", "NLP", "Web Application" , "HTML", "CSS", "JavaScript"],
    liveLink: "https://SMS-SPAM-DETECTION-USING-NLP.onrender.com",
    repoLink: "https://github.com/pathan-07/SMS-SPAM-DETECTION-USING-NLP",
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setIsLoading(true);
    setTimeout(() => {
      const foundProject = projects.find((p) => p.id === id) || null;
      setProject(foundProject);
      setIsLoading(false);
      
      // Scroll to top when project loads
      window.scrollTo(0, 0);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </MainLayout>
    );
  }

  if (!project) {
    return (
      <MainLayout>
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside mb-8 text-gray-600 space-y-2">
                {project.tags.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside mb-8 text-gray-600 space-y-2">
                <li>Interactive data visualization</li>
                <li>Responsive design for all devices</li>
                <li>Real-time prediction capabilities</li>
                <li>Comprehensive analytical dashboard</li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Project Links</h2>
                <div className="space-y-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full"
                  >
                    <ExternalLink size={18} />
                    View Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full"
                  >
                    <Github size={18} />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
