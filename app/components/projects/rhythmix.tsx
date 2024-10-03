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

      <div className="w-full lg:w-7/12 lg:mr-5">
      {/* <div className="w-full lg:mr-10"> */}
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

        <ul className="list-disc text-sm pl-3 flex flex-col gap-1 pt-4"> 
          <li> Enhances a user&apos;s Spotify listening experience with both generalized and personalized music recommendations, seamlessly integrated with Spotify&apos;s API </li>
          <li> Users can craft a personalized playlist by choosing from 126 genres and modifying up to 14 unique attributes </li>
          <li> Integrated song search functionality with React Bootstrap and Spotify API for users to search for their favorite songs, add them to a pool, and generate tailored recommendations </li>
        </ul>
      </div>

      <div className="w-5/12 hidden lg:flex items-center justify-center">
        <a href="https://rhythm-ix.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl hover:scale-105 w-full"
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