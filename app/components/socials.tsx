import Image from "next/image";
import githubIcon from "@/public/images/github.svg";
import linkedinIcon from "@/public/images/linkedin.svg";
import resumeIcon from "@/public/images/resume.svg";
import emailIcon from '@/public/images/email.svg';

const Socials = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-2 py-8" aria-label="socials">
      <a href="https://github.com/william-ong1" target="_blank" rel="noreferrer noopener">
        <Image
          className="hover:scale-125"
          priority
          src={githubIcon}
          height={32}
          width={32}
          alt="github"
        />
      </a>

      <a href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">
        <Image 
          className="hover:scale-125"
          priority
          src={linkedinIcon}
          height={32}
          width={32}
          alt="linkedin"
        />
      </a>

      <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
        <Image
          className="hover:scale-125"
          priority
          src={resumeIcon}
          height={32}
          width={32}
          alt="resume"
        />
      </a>

      <a href="mailto:williamong.dev@gmail.com" target="_blank" rel="noreferrer noopener">
        <Image
          className="hover:scale-125"
          priority
          src={emailIcon}
          height={32}
          width={32}
          alt="email"
        />
      </a>
    </div>
  );
};

export default Socials;