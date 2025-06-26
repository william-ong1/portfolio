'use client'

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string,
  image: any; // Next.js Image type
  link: string;
  techStack: string[];
  showImage?: boolean;
  noPointer?: boolean;
  noImage?: boolean;
  isInDevelopment?: boolean;
}

const ProjectCard = ({ title, description, image, link, techStack, showImage = true, noPointer = false, noImage = false, isInDevelopment = false }: ProjectCardProps): JSX.Element => {
  return (
    <div className="w-full rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-light-blue/10 group ">

    {/* Image preview with animation */}
      {showImage && !noImage && image && (
        <div className={`relative w-full aspect-video ${!noPointer && link ? 'cursor-pointer' : ''}`}>
          <Image
            onClick={() => link && !noPointer ? window.open(link, '_blank', 'noopener,noreferrer') : null}
            className="w-full h-full rounded-t-lg"
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
      )}

      {/* Content section (title, description, tech stack) */}
      <div className={`bg-gradient-to-b from-[#030712]/95 to-[#030712]/95 p-5 ${showImage && !noImage && image ? 'rounded-b-lg border-t border-white/5' : 'rounded-lg'} shadow-inner shadow-light-blue/5`}>
        {/* Title with Link */}
        <div className="flex items-center justify-between mb-2">
          {link && !noPointer ? (
            <a
              className="flex items-center gap-1.5 text-base font-bold text-light-blue hover:text-light-blue/80 transition-colors group/link"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}

              <Image 
                className="w-3.5 h-3.5 transition-transform duration-200 mt-0.5 -ml-1.5 group-hover/link:translate-x-[2.5px]  group-hover/link:translate-y-[-3px]"
                width={100}
                height={100}
                priority
                src="/icons/right-arrow.svg"
                alt=""
              />
            </a>
          ) : (
            <div className="text-base font-bold text-light-blue flex items-center">
              {title}
              {isInDevelopment && (
                <span className="text-[9px] font-medium px-1.5 py-0.1 ml-2 bg-gradient-to-r from-gray-900 to-gray-800 text-light-blue/90 rounded-full border border-blue-900/20 flex items-center">
                  In Development
                </span>
              )}
            </div>
          )}
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
                className="px-2 py-0.5 text-[10px] rounded-full bg-blue-900/30 text-light-blue border border-light-blue/10"
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