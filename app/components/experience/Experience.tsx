import ExperienceCard from "./ExperienceCard";
import AnimateOnScroll from '../AnimateOnScroll';

const Experience = (): JSX.Element => {
  const experiences = [
    {
      role: "Full Stack Developer & Team Lead",
      company: "Husky Coding Project",
      dates: "January 2024 - October 2024",
      description: [
        "Implemented playlist recommendations using TypeScript, MongoDB, Spotify API, and Node.js, enabling daily refreshes across 10 genres and increasing recommendation accuracy by 20%",
        "Developed a responsive, user-friendly UI using React, Figma, and CSS media queries, ensuring a seamless user experience across all devices",
        "Led a team of 6, managing project development from conception to delivery, facilitating weekly meetings, and ensuring adherence to deadlines and product specifications"
      ],
      logo: "/icons/hcp.png",
      link: "https://hcp-uw.com/",
    },
    {
      role: "Programming Tutor",
      company: "Clark College",
      dates: "January 2023 - May 2023",
      description: [
        "Assisted 30+ students with fundamental object-oriented Java concepts and C programming skills, including memory management and data structures",
        "Led code review sessions to help students debug, test, and optimize their code for improved performance, modularity, and readability",
        "Created an engaging and supportive learning environment that encouraged students to ask questions and explore new concepts",
      ],
    },
  ];

  return (
    <AnimateOnScroll className="flex flex-col gap-6 w-full">
      <div className="text-2xl font-bold uppercase pt-10 mt-1 lg:pt-[5.25rem]"> Experience </div>
      {experiences.map((experience, index) => (
        <AnimateOnScroll 
          key={experience.role} 
          delay={index * 150}
        >
          <ExperienceCard {...experience} />
        </AnimateOnScroll>
      ))}
    </AnimateOnScroll>
  );
};

export default Experience; 