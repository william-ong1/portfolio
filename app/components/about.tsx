const About = (): JSX.Element => {
  return (
    <div>
      <div className="text-2xl font-bold mt-1 uppercase pt-8 lg:pt-20"> About </div>

      <div className="text-md mt-4 leading-7">
        Hello! I'm currently a computer science student at the University of Washington. Inspired by the endless possibilities in web development and technology, 
        I'm a full stack developer passionate about building websites and applications that elevate lives and user experiences.
        Whether I'm working on the front end or back end, I immensely enjoy the art of problem-solving and turning imaginations into realities.
      </div>

      <div className="text-md mt-4 leading-7">
        When I'm not coding, you might find me training for the upcoming Dawg Dash, capturing the scenery of the Pacific Northwest, listening to new music, trying new restaurants, or working out.
      </div>

      <div className="text-md mt-4 leading-7">
        I'm always eager to learn and explore new opportunities, striving to grow both as a developer and as an individual. Let's <a className="text-white underline" href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">connect</a> and do something special together!
      </div>
    </div>
  );
};

export default About;