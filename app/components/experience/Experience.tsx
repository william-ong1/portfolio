import ExperienceCard from "./ExperienceCard";
import AnimateOnScroll from '../AnimateOnScroll';

const Experience = (): JSX.Element => {
  const experiences = [
    {
      role: "Full Stack Developer & Team Lead",
      company: "Husky Coding Project",
      dates: "January 2024 - October 2024",
      description: [
        "Implemented a recommendation playlist for 10 genres that refreshes every 24 hours using MongoDB, Spotify API, Netlify's serverless functions, and cron jobs",
        "Designed and implemented a responsive and intuitive user interface with Figma designs and CSS media queries",
        "Led a team of 6 members, overseeing project development from conception to delivery, ensuring adherence to deadlines and product specifications",
      ],
      logo: "/icons/hcp.png",
      link: "https://hcp-uw.com/",
    },
    {
      role: "Programming Tutor",
      company: "Clark College",
      dates: "January 2023 - May 2023",
      description: [
        "Assisted 30+ students with fundamental object-oriented Java concepts and core C programming skills, including memory management and data structures",
        "Led code review sessions to help students debug, test, and optimize their code for improved performance, modularity, and readability",
        "Created an engaging and supportive learning environment that encouraged students to ask questions, explore new concepts, and experiment with code",
      ],
    },
  ];

  return (
    <AnimateOnScroll className="flex flex-col gap-6 w-full">
      <div className="text-2xl font-bold uppercase pt-8 mt-1 lg:pt-[5.25rem]"> Experience </div>
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