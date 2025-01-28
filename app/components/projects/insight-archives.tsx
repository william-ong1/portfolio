import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import insightArchivesSnapshot from '@/public/images/insight-archives-snapshot.png';

const InsightArchives = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-5">

      <div className="w-full flex lg:hidden items-center justify-center pb-4">
        <a href="https://insightarchives.live" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl transform transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#bbcced]"
            priority
            src={insightArchivesSnapshot}
            alt=""
          />
        </a>
      </div>

      <div className="w-full lg:w-7/12 mr-5">
      {/* <div className="w-full mr-4"> */}
        <a className="flex items-center text-lg font-bold underline group"
          href="https://insightarchives.live"
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

        <ul className="list-disc text-xs pl-3 flex flex-col gap-1.5 pt-4"> 
          <li> Daily updated quotes to provide inspiration and promote personal reflection </li>
          <li> Calendar-based archive system to easily browse and access past quotes </li>
          <li> Subscription feature via SendGrid API and MongoDB to send daily quotes to inboxes</li>
          <li> Automated quote updates with Netlify, <br/> Gemini API, Octokit, and cron jobs </li>
        </ul>
      </div>

      <div className="w-5/12 lg:w-6/12 hidden lg:flex items-center justify-center pt-8 lg:-ml-3.5">
        <a href="https://insightarchives.live" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl transform transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#bbcced]"
            // className="rounded-2xl transform transition-all duration-300 ease-out hover:shadow-[0_4px_8px_#bbcced,0_0_15px_#bbcced] hover:shadow-lg"
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