'use client'

import Image from "next/image";

interface ExperienceCardProps {
  role: string;
  company: string;
  dates: string;
  description: string[];
  logo?: any; // Next.js Image type
  link?: string;
}

const ExperienceCard = ({ role, company, dates, description, logo, link }: ExperienceCardProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-[#030712]/95 to-[#030712]/95 p-5 rounded-lg shadow-inner shadow-light-blue/5 transition-all duration-300 hover:scale-[1.00]">

      {/* Position with logo */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-base font-extrabold text-light-blue">
            {role}
          </h3>
          {link ? (
            <a
              className="text-sm font-semibold text-white hover:text-light-blue/80 transition-colors"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {company}
            </a>
          ) : (
            <span className="text-sm font-semibold text-white">
              {company}
            </span>
          )}
        </div>
        
        {logo && link && (
          <div className="flex justify-center">
            <Image
              className="w-12 h-4 mt-0.5 cursor-pointer"
              src={logo}
              alt={`${company} logo`}
              width={100}
              height={100}
              priority
              onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
            />
          </div>
        )}
      </div>
      
      {/* Dates */}
      <div className="text-xs text-gray-300 mb-3">
        <p>{dates}</p>
      </div>
      
      {/* Responsibilities */}
      <div className="mt-2">
        <ul className="list-disc text-xs text-gray-300 pl-4 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard; 