import Image from "next/image";

const Socials = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-2 py-4 lg:py-8" aria-label="socials">
      <a href="https://github.com/william-ong1" target="_blank" rel="noreferrer noopener">
        <Image
          className="transition-transform transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
          priority
          src="/icons/github.svg"
          height={32}
          width={32}
          draggable={false}
          alt="GitHub"
        />
      </a>

      <a href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">
        <Image 
          className="transition-transform transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
          priority
          src="/icons/linkedin.svg"
          height={32}
          width={32}
          draggable={false}
          alt="LinkedIn"
        />
      </a>

      <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
        <Image
          className="transition-transform transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
          priority
          src="/icons/resume.svg"
          height={32}
          width={32}
          draggable={false}
          alt="Resume"
        />
      </a>

      <a href="mailto:williamong.dev@gmail.com" target="_blank" rel="noreferrer noopener">
        <Image
          className="transition-transform transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
          priority
          src="/icons/email.svg"
          height={32}
          width={32}
          draggable={false}
          alt="Email"
        />
      </a>
    </div>
  );
};

export default Socials;