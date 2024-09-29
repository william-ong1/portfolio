import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import insightArchivesSnapshot from '@/public/images/insight-archives-snapshot.png';
import rhythmixSnapshot from '@/public/images/rhythmix-snapshot.png';


const Education = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-24">
      <div className="text-2xl font-bold mt-1 uppercase"> Education </div>

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
      </div>

      <div className="rounded-2xl bg-dark-eclipse w-full h-50 flex flex-row p-4">
        <div className="w-1/2 mr-10">
          <a className="flex items-center text-xl font-bold underline group"
            href="https://rhythm-ix.netlify.app/"
            target="_blank"
            rel="noreferrer noopener">
            rhythmix
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
            src={rhythmixSnapshot}
            alt=""
          />
        </div>
      </div>

      <div className="rounded-2xl bg-dark-eclipse w-full h-50 flex flex-row p-4">
        <div className="w-1/2 mr-10">
          <a className="flex items-center text-xl font-bold underline group"
            href="https://rhythm-ix.netlify.app/"
            target="_blank"
            rel="noreferrer noopener">
            rhythmix
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
            src={rhythmixSnapshot}
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Education;