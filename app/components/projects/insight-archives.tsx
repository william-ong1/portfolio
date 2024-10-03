import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import insightArchivesSnapshot from '@/public/images/insight-archives-snapshot.png';

const InsightArchives = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-6">

      <div className="w-full flex lg:hidden items-center justify-center pb-4">
        <a href="https://insightarchives.live" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105"
            priority
            src={insightArchivesSnapshot}
            alt=""
          />
        </a>
      </div>

      <div className="w-full lg:w-7/12 mr-5">
      {/* <div className="w-full mr-4"> */}
        <a className="flex items-center text-xl font-bold underline group"
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

        <ul className="list-disc text-sm pl-3 flex flex-col gap-1 pt-4"> 
          <li> Features daily updated quotes retrieved from Gemini API to inspire users and promote personal reflection </li>
          <li> Subscription feature via Brevo API and MongoDB for users to recieve the daily quote directly in their inboxes </li>
          <li> Calendar-based archive system for users to effortlessly browse and access past quotes </li>
          <li> Automated quote updates with Netlify&apos;s serverless functions, Gemini API, Octokit, and cron jobs </li>
        </ul>
      </div>

      <div className="w-5/12 hidden lg:flex items-center justify-center">
        <a href="https://insightarchives.live" target="_blank" rel="noreferrer noopener">
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