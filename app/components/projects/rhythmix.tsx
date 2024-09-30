import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import rhythmixSnapshot from '@/public/images/rhythmix-snapshot.png';

const Rhythmix = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-6">

      <div className="w-full flex lg:hidden items-center justify-center pb-4">
        <a href="https://rhythm-ix.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105"
            priority
            src={rhythmixSnapshot}
            alt=""
          />
        </a>
      </div>

      <div className="w-full lg:w-1/2 lg:mr-10">
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

        <div className="text-md mt-2">
        </div>
      </div>

      <div className="w-1/2 hidden lg:flex items-center justify-center">
        <a href="https://rhythm-ix.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105"
            priority
            src={rhythmixSnapshot}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Rhythmix;