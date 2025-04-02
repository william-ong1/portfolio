import AnimateOnScroll from './AnimateOnScroll';

const About = (): JSX.Element => {
  return (
    <AnimateOnScroll>
      <div>
        <div className="text-2xl font-bold mt-1 uppercase pt-4 lg:pt-20"> About </div>

        <div className="text-sm mt-4 leading-6">
          Hi! I&#39;m a computer science student at the University of Washington. Driven by the endless potential in software development and technology, 
          I&#39;m passionate about building applications that solve real-world problems and making a difference. Whether I&#39;m coding, designing, or brainstorming new ideas,
          I thrive on the challenge of problem-solving and love turning imaginations into realities.
        </div>

        <div className="text-sm mt-4 leading-6">
          When I&#39;m not coding, I enjoy working out, playing basketball, trying new restaurants, car spotting, and capturing the scenery of the Pacific Northwest.
        </div>

        <div className="text-sm mt-4 leading-6">
          I&#39;m always eager to learn and explore new opportunities, striving to grow both as a developer and as an individual. Let&#39;s <a className="text-white underline" href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">connect</a> and do something special together!
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default About;