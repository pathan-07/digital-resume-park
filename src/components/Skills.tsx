
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const allSkills = {
  programming: ["JavaScript", "Python", "HTML", "CSS", "C Language", "Git"],
  aiml: ["Generative AI", "Natural Language Processing"],
  webDev: ["Frontend Development", "Backend Development"],
  tools: ["GitHub", "GitHub Copilot", "VS Code", "Cursor AI"]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Function to determine which skills to display based on active category
  const getDisplayedSkills = () => {
    if (activeCategory === "all") {
      return Object.values(allSkills).flat();
    }
    return allSkills[activeCategory as keyof typeof allSkills] || [];
  };

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
            Here are my technical skills and areas of expertise that I've developed through
            education, work experience, and personal projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          <button
            onClick={() => setActiveCategory("all")}
            className={`py-2 px-6 rounded-full transition-all ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveCategory("programming")}
            className={`py-2 px-6 rounded-full transition-all ${
              activeCategory === "programming"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setActiveCategory("aiml")}
            className={`py-2 px-6 rounded-full transition-all ${
              activeCategory === "aiml"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            AI & ML
          </button>
          <button
            onClick={() => setActiveCategory("webDev")}
            className={`py-2 px-6 rounded-full transition-all ${
              activeCategory === "webDev"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveCategory("tools")}
            className={`py-2 px-6 rounded-full transition-all ${
              activeCategory === "tools"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Tools & Technologies
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 reveal">
          {getDisplayedSkills().map((skill) => (
            <div
              key={skill}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg text-center transition-all hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                {getSkillIcon(skill)}
              </div>
              <h3 className="text-white font-medium">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to return appropriate icon for each skill
const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  
  if (skillLower.includes("javascript")) {
    return <div className="bg-yellow-300 w-12 h-12 rounded-md flex items-center justify-center text-black font-bold text-xl">JS</div>;
  } else if (skillLower.includes("html")) {
    return <div className="bg-orange-500 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-xl">H5</div>;
  } else if (skillLower.includes("css")) {
    return <div className="bg-blue-500 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-xl">CSS</div>;
  } else if (skillLower.includes("python")) {
    return <div className="bg-blue-800 w-12 h-12 rounded-md flex items-center justify-center text-yellow-300 font-bold">Py</div>;
  } else if (skillLower.includes("c language")) {
    return <div className="bg-blue-700 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-xl">C</div>;
  } else if (skillLower.includes("git")) {
    return <div className="bg-red-500 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">Git</div>;
  } else if (skillLower.includes("github")) {
    return <div className="bg-gray-800 w-12 h-12 rounded-md flex items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </div>;
  } else if (skillLower.includes("vs code")) {
    return <div className="bg-blue-600 w-12 h-12 rounded-md flex items-center justify-center text-white">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 0H20.5L15 5.5L20.5 11H17.5L12 5.5L17.5 0Z" fill="white"/>
        <path d="M3.5 3L9 8.5L3.5 14V3Z" fill="white"/>
        <path d="M9 8.5L3.5 14H6.5L12 8.5L6.5 3H3.5L9 8.5Z" fill="white"/>
      </svg>
    </div>;
  } else if (skillLower.includes("generative ai") || skillLower.includes("cursor ai")) {
    return <div className="bg-orange-700 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">AI</div>;
  } else if (skillLower.includes("react")) {
    return <div className="bg-blue-400 w-12 h-12 rounded-md flex items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
      </svg>
    </div>;
  } else if (skillLower.includes("node")) {
    return <div className="bg-green-600 w-12 h-12 rounded-md flex items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.027.129-.011.185.033l1.874 1.12c.074.037.166.037.228 0l7.314-4.237c.074-.036.119-.11.119-.202V7.768c0-.081-.045-.165-.119-.201l-7.315-4.219c-.074-.037-.166-.037-.228 0L4.572 7.566c-.074.036-.12.12-.12.201v8.457c0 .081.045.155.12.19l1.994 1.157c1.083.541 1.746-.097 1.746-.739V8.48c0-.11.091-.212.21-.212h.926c.11 0 .21.091.21.212v8.363c0 1.435-.779 2.252-2.138 2.252-.423 0-.748 0-1.675-.45l-1.913-1.103c-.47-.276-.763-.795-.763-1.35V7.769c0-.555.293-1.074.763-1.35l7.315-4.237c.456-.256 1.071-.256 1.527 0l7.314 4.237c.47.276.764.795.764 1.35v8.457c0 .555-.294 1.064-.764 1.35l-7.314 4.237c-.241.119-.516.174-.772.174zm2.316-5.77c-3.206 0-3.886-.147-3.886-2.80 0-.12.092-.22.21-.22h.946c.118 0 .201.082.21.192.147 1.064.571 1.595 2.52 1.595 1.564 0 2.225-.35 2.225-1.176 0-.476-.185-.825-2.594-1.064-2.016-.202-3.254-.642-3.254-2.252 0-1.485 1.246-2.36 3.34-2.36 2.35 0 3.515.807 3.662 2.546a.21.21 0 0 1-.055.165c-.036.038-.092.065-.147.065h-.946a.206.206 0 0 1-.201-.165c-.221-1.01-.817-1.338-2.314-1.338-1.7 0-1.895.597-1.895 1.036 0 .543.23.696 2.515.996 2.26.303 3.334.734 3.334 2.31 0 1.595-1.332 2.51-3.67 2.51z"/>
      </svg>
    </div>;
  } else if (skillLower.includes("mongodb")) {
    return <div className="bg-green-700 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">M</div>;
  } else if (skillLower.includes("postgresql")) {
    return <div className="bg-blue-800 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">PG</div>;
  } else if (skillLower.includes("github copilot")) {
    return <div className="bg-gray-800 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-5-7h10v-2H7v2z"/>
      </svg>
    </div>;
  }
  
  // Default icon
  return <div className="bg-gray-700 w-12 h-12 rounded-md flex items-center justify-center text-white">
    <Sparkles size={24} />
  </div>;
};

export default Skills;
