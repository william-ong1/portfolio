import Image from "next/image";
import rightArrow from '@/public/images/right-arrow.svg';
import rhythmixSnapshot from '@/public/images/rhythmix-snapshot.png';

const Rhythmix = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-5">

      <div className="w-full flex lg:hidden items-center justify-center pb-4">
        <a href="https://rhythm-ix.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-2xl transform transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#bbcced]"
            priority
            src={rhythmixSnapshot}
            alt=""
          />
        </a>
      </div>

      <div className="w-full lg:w-7/12 lg:mr-5">
      {/* <div className="w-full lg:mr-10"> */}
        <a className="flex items-center text-lg font-bold underline group"
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

        <ul className="list-disc text-xs pl-3 flex flex-col gap-1.5 pt-4"> 
          <li> Elevates a user&apos;s Spotify experience with fully-customizable music recommendations </li>
          <li> Create personalized playlists with up to 126 genres and 14 unique attributes </li>
          <li> Note: Spotify revoked access to key Web API endpoints, disabling many Rhythmix features. Here&apos;s a past <a className="text-white underline" href="https://youtu.be/LjRbrwCBr7U" target="_blank" rel="noreferrer noopener"> demo</a> &#58;&#41; </li>
          </ul>
      </div>

      <div className="w-5/12 lg:w-6/12 hidden lg:flex items-center justify-center pt-8 lg:-ml-3.5">
        <a href="https://rhythm-ix.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Image
            className="rounded-lg transform transition-all duration-300 ease-out hover:shadow-md hover:shadow-[#bbcced]"
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