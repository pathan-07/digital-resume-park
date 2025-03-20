
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
  liveLink: string;
  repoLink: string;
}

// Demo project data - in a real app, you would fetch this from an API or database
const projects: Project[] = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction App",
    description: "A machine learning application that predicts the likelihood of diabetes based on health parameters. The app uses a logistic regression model trained on a dataset of patient health metrics to provide predictions with high accuracy. Users can input their health parameters and receive immediate feedback about their diabetes risk.",
    image: "/lovable-uploads/7580f279-c120-4664-abba-111b61c18a75.png",
    tags: ["Python", "Machine Learning", "Data Visualization", "Flask"],
    liveLink: "https://first-python-project-xgrl.onrender.com",
    repoLink: "https://github.com/username/diabetes-prediction",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction Model",
    description: "A data analysis tool that predicts car prices based on various features and market trends. This project leverages advanced regression techniques to analyze historical car pricing data and identify key factors influencing market values. The interactive interface allows users to explore how different features affect car pricing.",
    image: "/lovable-uploads/904be275-398a-4a6f-a408-1a1672af4774.png",
    tags: ["Data Analysis", "Machine Learning", "Python", "Streamlit"],
    liveLink: "https://car-price-prediction-model-6g5r.onrender.com",
    repoLink: "https://github.com/username/car-price-prediction",
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    description: "A sports analytics application that predicts cricket match outcomes using historical data. Using a combination of statistical models and machine learning algorithms, this tool analyzes past match data, player performance metrics, and venue statistics to forecast match results. The interactive dashboard provides real-time prediction updates as match conditions change.",
    image: "/lovable-uploads/bd6b089d-09b1-4bc2-9d25-461d0960a199.png",
    tags: ["Sports Analytics", "Data Science", "Python", "Web Application"],
    liveLink: "https://ipl-prediction-model.onrender.com",
    repoLink: "https://github.com/username/ipl-predictor",
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Model",
    description: "A medical imaging analysis tool for early detection of breast cancer using machine learning. This project implements a convolutional neural network trained on a dataset of mammogram images to classify suspicious tissue formations. The model achieves high accuracy in identifying malignant tumors, potentially aiding early diagnosis.",
    image: "/lovable-uploads/3f1b9188-cec5-491b-b6b3-2a85404a3d49.png",
    tags: ["Healthcare", "Machine Learning", "Image Analysis", "Python"],
    liveLink: "https://breast-cancer-detection.onrender.com",
    repoLink: "https://github.com/username/breast-cancer-detection",
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
