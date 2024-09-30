import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import insightArchivesSnapshot from '@/public/images/insight-archives-snapshot.png';

const InsightArchives = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-6">

      <div className="w-full flex lg:hidden items-center justify-center pb-4">
        <a href="https://insight-archives.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105"
            priority
            src={insightArchivesSnapshot}
            alt=""
          />
        </a>
      </div>

      <div className="w-full lg:w-1/2 mr-4">
        <a className="flex items-center text-xl font-bold underline group"
          href="https://insight-archives.netlify.app/"
          target="_blank"
          rel="noreferrer noopener">
          Insight Archives
          <Image 
            className="w-5 h-5 mt-auto transition-transform duration-200 group-hover:translate-y-[-2.5px] group-hover:translate-x-[2.5px]"
            priority
            src={rightArrow}
            alt=""
          />
        </a>

        <ul className="list-disc text-sm pl-3 flex flex-col gap-1 pt-4"> 
          <li> Features daily quotes to inspire users and provide insights, invoking reflection </li>
          <li> Subscription feature for users to receive daily quotes in their inboxes </li>
          <li> Calendar-based archive system for users to view past quotes </li>
          <li> Uses Netlify Serverless Functions, Gemini API, and MongoDB </li>
        </ul>
      </div>

      <div className="w-1/2 hidden lg:flex items-center justify-center">
        <a href="https://insight-archives.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105"
            priority
            src={insightArchivesSnapshot}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default InsightArchives;