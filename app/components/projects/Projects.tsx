"use client"

import ProjectCard from "./ProjectCard";
import AnimateOnScroll from '../AnimateOnScroll';
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Projects = (): JSX.Element => {
  const [showImages, setShowImages] = useState<boolean>(true);

  useEffect(() => {
    const storedPreference = localStorage.getItem('showProjectImages');
    if (storedPreference !== null) {
      setShowImages(storedPreference === 'true');
    }
  }, []);

  const handleHideShowClick = () => {
    const newState = !showImages;
    setShowImages(newState);
    localStorage.setItem('showProjectImages', newState.toString());
  };

  const projects = [
    {
      title: "Nexus AI Chatbot",
      description: "Scalable AI chatbot featuring autonomous learning and automatic feature evolution. Tailor it to your needs with only a few simple prompts.",
      image: "",
      link: "",
      techStack: ["Python", "Model Context Protocol", "Natural Language Processing", "FastMCP"],
      noPointer: true,
      noImage: true,
      isInDevelopment: true
    },
    {
      title: "What's That Car?",
      description: "AI-powered car recognition system with 97% accuracy. Save your results, share your discoveries, and explore an ever-expanding collection of cars from around the world.",
      image: "/images/whats-that-car.png",
      link: "https://whatsthatcar.vercel.app",
      techStack: ["TypeScript", "Python", "AWS Services", "React", "Next.js", "Tailwind", "FastAPI", "Gemini AI"]
    },
    {
      title: "Insight Archives",
      description: "Your daily source of inspiration, reflection, and insight. Navigate through time to explore timeless wisdom, and subscribe to stay updated with fresh perspectives.",
      image: "/images/insight-archives.png",
      link: "https://insightarchives.live",
      techStack: ["TypeScript", "React", "Next.js", "MongoDB", "SendGrid", "Gemini AI", "Netlify Functions"]
    },
    {
      title: "rhythmix",
      description: "Fully customizable and personalized music recommendations with Spotify. Discover new songs catered to your preferences, enjoy personalized playlists, and listen to your favorites.",
      image: "/images/rhythmix.png",
      link: "https://rhythm-ix.netlify.app/",
      techStack: ["JavaScript", "React", "Node.js", "HTML/CSS", "MongoDB", "Spotify API", "Cron Jobs"]
    }
  ];

  return (
    <AnimateOnScroll className="flex flex-col gap-6 w-full">
      <div className="flex items-center gap-2 pt-10 mt-1 lg:pt-[5.25rem]">
        <div className="text-2xl font-bold uppercase"> Projects </div>
        <button 
          onClick={handleHideShowClick}
          className="text-gray-400 hover:text-light-blue transition-colors mt-1"
          aria-label={showImages ? "Hide project images" : "Show project images"}
        >
          {showImages ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
        </button>
      </div>
      {projects.map((project, index) => (
        <AnimateOnScroll 
          key={project.title} 
          delay={index * 100}
        >
          <ProjectCard {...project} showImage={showImages} />
        </AnimateOnScroll>
      ))}
    </AnimateOnScroll>
  );
};

export default Projects;