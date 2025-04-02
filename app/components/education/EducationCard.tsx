'use client'

import Image from "next/image";

interface EducationCardProps {
  school: string;
  degree: string;
  dates: string;
  gpa: string;
  coursework: string;
  logo: any; // Next.js Image type
}

const EducationCard = ({ school, degree, dates, gpa, coursework, logo }: EducationCardProps): JSX.Element => {
  return (
      <div className="bg-gradient-to-b from-[#030712]/95 to-[#030712]/95 p-5 rounded-lg border border-white/5 shadow-inner shadow-light-blue/5 transition-all duration-300 hover:scale-[1.001]">
        {/* School with Logo */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-light-blue">
              {school}
            </h3>
            <p className="text-sm font-bold text-white">
              {degree}
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              className="w-12 h-12 object-contain"
              src={logo}
              alt={`${school} logo`}
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
        
        {/* Dates and GPA */}
        <div className="text-xs text-gray-300 mb-3">
          <p>{dates}</p>
          <p>{gpa}</p>
        </div>
        
        {/* Coursework */}
        <div className="mt-2">
          <p className="text-xs font-bold text-white"> Coursework: </p>
          <p className="text-xs text-gray-300"> {coursework} </p>
        </div>
      </div>
  );
};

export default EducationCard; 