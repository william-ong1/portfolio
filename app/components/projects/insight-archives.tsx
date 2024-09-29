import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import insightArchivesSnapshot from '@/public/images/insight-archives-snapshot.png';

const InsightArchives = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full h-50 flex flex-row p-4">
      <div className="w-1/2 mr-10">
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

        <div className="text-xl mt-2">
          〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰     
        </div>
      </div>

      <div className="w-1/2">
        <Image
          className="rounded-2xl"
          priority
          src={insightArchivesSnapshot}
          alt=""
        />
      </div>
    </div>
  );
};

export default InsightArchives;