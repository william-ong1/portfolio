import AnimateOnScroll from './AnimateOnScroll';

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full text-white">
      <AnimateOnScroll>
        <div className="text-2xl font-bold mt-1 uppercase pt-6 lg:pt-[5.25rem]"> About </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={50}>
        <div className="text-sm">
          Hi there! I am a third-year undergraduate studying computer science at the University of Washington in Seattle. I am passionate about the intersection of machine learning and human-centered impact, where my goal is to use machine learning to address real-world problems and positively impact lives.
          Lately, my work has focused on applying machine learning and statistical methods to better understand neural dynamics during brain-computer interface (BCI) modulation, with the goal of advancing our knowledge of neural processes and the development of neuroprosthetics and BCI systems. 
          In parallel, I have been channeling my interest in cars by working on a model that classifies car models in low-light, low-resolution conditions. 
          Whether I am coding, brainstorming, or researching, I enjoy solving problems and turning imaginations into realities. I strive to redefine limits, developing innovative solutions that push the boundaries of what is possible.
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="text-sm">
          Outside of the lab, classroom, and my room, I enjoy working out, playing basketball, and trying new activities that challenge me both physically and mentally. You might also find me car spotting, exploring new restaurants, taking photos of sunsets and sunrises, and reading books and papers to inspire new ideas and perspectives.
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={150}>
        <div className="text-sm">
           I am always looking to learn, take on new challenges, and contribute to something greater than myself. If you would like to connect, learn more about my work, or collaborate, feel free to reach out via email or LinkedIn. Thank you for reading!
           {/* Connect with me <a className="text-white underline" href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">here</a>, and thank you for reading! */}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default About;