import AnimateOnScroll from '../AnimateOnScroll';
import EducationCard from './EducationCard';

const Education = (): JSX.Element => {
  const educationData = [
    {
      school: "University of Washington",
      degree: "BS in Computer Science",
      dates: "Graduating in June 2026",
      gpa: "GPA: 3.83 / 4.0",
      coursework: "Algorithms, Artificial Intelligence, Autonomous Robotics, Data Management, Data Structures \& Parallelism, Deep Learning, Machine Learning, Software Design, Systems Programming",
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
    <AnimateOnScroll className="flex flex-col gap-6 w-full">
      <div className="text-2xl font-bold uppercase pt-10 mt-1 lg:pt-[5.25rem]"> Education </div>
      {educationData.map((education, index) => (
        <AnimateOnScroll 
          key={education.school} 
          delay={index * 100}
        >
          <EducationCard {...education} />
        </AnimateOnScroll>
      ))}
    </AnimateOnScroll>
  );
};

export default Education; 