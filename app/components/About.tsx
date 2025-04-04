import AnimateOnScroll from './AnimateOnScroll';

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full text-white">
      <AnimateOnScroll>
        <div className="text-2xl font-bold mt-1 uppercase pt-6 lg:pt-[5.25rem] text-light-blue"> About </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={50}>
        <div className="text-sm">
          Hi! I&#39;m majoring in computer science at the University of Washington. Driven by the endless potential in software development and technology, I&#39;m passionate about using my skills to address real-world problems and positively impact lives.
          From automating tedious tasks to building apps that foster communities, my goal is to have a meaningful impact on others.
          Whether I&#39;m coding, designing, or brainstorming, I enjoy solving problems and turning imaginations into realities. I strive to redefine limits and develop innovative solutions that push the boundaries of what&#39;s possible.
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="text-sm">
          In my free time, I enjoy working out, playing basketball, and staying active. You might also find me car spotting, trying new restaurants, taking photos of sunsets (and sunrises), and reading to inspire new ideas.
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={150}>
        <div className="text-sm">
           I&#39;m always eager to learn, embrace new challenges, and grow both as a developer and as a person.
           Connect with me <a className="text-white underline" href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">here</a>, and thank you for reading!
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default About;