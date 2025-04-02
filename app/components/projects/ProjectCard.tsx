'use client'

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string,
  image: any; // Next.js Image type
  link: string;
  techStack: string[];
}

const ProjectCard = ({ title, description, image, link, techStack }: ProjectCardProps): JSX.Element => {
  return (
    <div className="w-full rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-light-blue/10 group">

      {/* Image preview */}
      <div className="relative w-full  cursor-pointer">
        <Image
          onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
          className="w-full h-full"
          priority
          src={image}
          alt={title}
          fill
          quality={100}
          unoptimized
          style={{
            imageRendering: 'crisp-edges',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
          draggable={false}
        />
      </div>

      {/* Content section (title, description, tech stack) */}
      <div className="bg-gradient-to-b from-[#030712]/95 to-[#030712]/95 p-5 rounded-b-lg border-t border-white/5 shadow-inner shadow-light-blue/5">
        {/* Title with Link */}
        <div className="flex items-center justify-between mb-2">
          <a
            className="flex items-center text-base font-bold text-light-blue hover:text-light-blue/80 transition-colors"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}

            {/* TODO: move arrow on hover */}
            {/* <Image 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-[-2.5px] group-hover:translate-x-[2.5px]"
              width={100}
              height={100}
              priority
              src="/icons/right-arrow.svg"
              alt=""
            /> */}
          </a>
        </div>
        
        {/* Description */}
        <p className="text-xs text-white mb-3">
          {description}
        </p>

        {title === "rhythmix" &&
          <p className="text-xs text-white mb-3">
            Note: Some features are now unavailable due to recent Spotify API changes.
          </p>
        }
        
        {/* Tech Stack Tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 text-[10px] rounded-full bg-blue-900/40 text-blue-300 border border-blue-800/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 