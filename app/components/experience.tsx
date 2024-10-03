import Image from "next/image";
import HCPLogo from '@/public/images/hcp.png';

const Experience = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-20">
      <div className="text-2xl font-bold mt-1 uppercase"> Experience </div>

      <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-6">
        <div className="w-full flex flex-col">
          <div className="text-xl font-bold flex flex-row relative">
            <div> Husky Coding Project </div>
            <a href="https://hcp-uw.com/" target="_blank" rel="noreferrer noopener">
              <Image
                className="absolute right-0 rounded-2xl hover:scale-105 mt-1 w-14 h-5 lg:w-24 lg:h-8"
                priority
                src={HCPLogo}
                alt=""
              />
            </a>
          </div>

          <div className="flex text-md italic flex-row"> 
            Full Stack Developer & Team Manager
          </div>

          <div className="text-sm italic">
            January 2024 - September 2024
          </div>

          <ul className="list-disc text-sm not-italic pl-3 flex flex-col gap-1 pt-1"> 
            <li> Implemented a recommendation playlist for 10 genres that refreshes every 24 hours using MongoDB, Spotify API, Netlify&apos;s serverless functions, and cron jobs</li>
            <li> Designed and implemented a responsive and intuitive user interface with Figma designs and CSS media queries </li>
            <li> Led a team of 6 members, overseeing project development from conception to delivery, ensuring adherence to deadlines and product specifications </li>
            <li> Improved team workflows and productivity through effective task delegation and facilitation of regular meetings </li>
            <li> For more details, check out the <a className="text-white underline" href="#rhythmix"> rhythmix</a> project </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;