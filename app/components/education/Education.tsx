import AnimateOnScroll from '../AnimateOnScroll';
import EducationCard from './EducationCard';
import UWLogo from '@/public/icons/uw.svg';
import CCLogo from '@/public/icons/clark-college.png';

const Education = (): JSX.Element => {
  const educationData = [
    {
      school: "University of Washington",
      degree: "BS in Computer Science",
      dates: "Graduating in December 2025",
      gpa: "GPA: 3.8/4.0",
      coursework: "Machine Learning, Algorithms, Software Design, Data Structures & Parallelism, Data Management, Systems Programming",
      logo: UWLogo
    },
    {
      school: "Clark College",
      degree: "Associate of Science",
      dates: "Graduated in June 2023",
      gpa: "GPA: 3.9/4.0",
      coursework: "Computer Science I & II, Calculus I & II, Physics I & II, Chemistry I & II",
      logo: CCLogo
    }
  ];

  return (
    <>
      <div className="text-2xl font-bold uppercase pt-8 lg:pt-20">Education</div>
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