import AnimateOnScroll from '../AnimateOnScroll';
import EducationCard from './EducationCard';

const Education = (): JSX.Element => {
  const educationData = [
    {
      school: "University of Washington",
      degree: "BS in Computer Science",
      dates: "Graduating in December 2025",
      gpa: "GPA: 3.82 / 4.0",
      coursework: "Algorithms, Artificial Intelligence, Autonomous Robotics, Data Management, Data Structures \& Parallelism, Machine Learning, Software Design, Systems Programming",
      logo: "/icons/uw.svg",
    },
    {
      school: "Clark College",
      degree: "AST in Computer Science",
      dates: "Graduated in August 2023",
      gpa: "GPA: 3.92 / 4.0",
      coursework: "C Programming, Data Structures & Object-Oriented Programming, Digital Logic Design, Discrete Structures, Programming Tools (debuggers / profilers / scripting)",
      logo: "/icons/clark-college.png"
    }
  ];

  return (
    <>
      <div className="text-2xl font-bold uppercase pt-8 mt-1 lg:pt-20">Education</div>
      <AnimateOnScroll className="flex flex-col gap-6 pt-4 w-full">
        {educationData.map((education, index) => (
          <AnimateOnScroll 
            key={education.school} 
            delay={index * 150}
          >
            <EducationCard {...education} />
          </AnimateOnScroll>
        ))}
      </AnimateOnScroll>
    </>
  );
};

export default Education; 