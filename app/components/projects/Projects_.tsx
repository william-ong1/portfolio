import ProjectCard from "./ProjectCard";
import AnimateOnScroll from '../AnimateOnScroll';

const Projects = (): JSX.Element => {
  const projects = [
    {
      title: "What's That Car?",
      description: "AI-powered car recognition system with 97% accuracy. Save your results, share your discoveries, and explore an ever-expanding collection of cars from around the world.",
      image: "/images/whats-that-car.png",
      link: "https://whatsthatcar.vercel.app",
      techStack: ["Python", "TypeScript", "AWS Services", "React", "Next.js", "Tailwind", "FastAPI", "Gemini AI"]
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
    <>
      <div className="text-2xl font-bold uppercase pt-8 lg:pt-20">Projects</div>
      <AnimateOnScroll className="flex flex-col gap-8 pt-6 w-full">
        {projects.map((project, index) => (
          <AnimateOnScroll 
            key={project.title} 
            delay={index * 150}
          >
            <ProjectCard {...project} />
          </AnimateOnScroll>
        ))}
      </AnimateOnScroll>
    </>
  );
};

export default Projects;