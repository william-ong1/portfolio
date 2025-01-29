import Image from "next/image";
import UWLogo from '@/public/images/uw.svg';
import CCLogo from '@/public/images/clark-college.png';

const Education = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-24">
      <div className="text-2xl font-bold mt-1 uppercase"> Education </div>

      <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-5">
        <div className="w-full flex lg:hidden justify-center items-center">
          <Image
            className="rounded-2xl h-3/4 w-3/4 p-4"
            priority
            src={UWLogo}
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2 lg:mr-4 flex flex-col">
          <div className="flex items-center text-lg font-bold">
            University of Washington
          </div>

          <div className="text-sm font-bold">
            BS in Computer Science
          </div>

          <div className="text-xs">
            <p> Graduating in December 2025 </p>
            <p> GPA: 3.8/4.0 </p>
            <br/>
            <p className="font-bold"> Relevant Coursework: </p>
            <p> Machine Learning, Algorithms, Software Design, Data Structures & Parallelism, Data Management, Systems Programming </p>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex justify-center items-center">
          <Image
            className="rounded-2xl h-auto w-4/5"
            priority
            src={UWLogo}
            alt=""
          />
        </div>
      </div>

      <div className="rounded-2xl bg-dark-eclipse w-full lg:h-auto flex flex-col lg:flex-row p-5">
        <div className="w-full flex lg:hidden justify-center items-center">
          <Image
            className="rounded-2xl h-3/4 w-3/4 p-4"
            priority
            src={CCLogo}
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:mr-2.5">
          <div className="flex items-center text-lg font-bold">
            Clark College
          </div>

          <div className="text-sm font-bold">
            AST in Computer Science
          </div>

          <div className="text-xs">
            <p> Graduated in 2023 </p>
            <p> GPA: 3.92/4.0 </p>
            <br/>
            <p className="font-bold"> Relevant Coursework: </p>
            <p> Object-Oriented Programming, Programming Tools, Theory of Computation </p>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex justify-center items-center">
          <Image
            className="rounded-2xl h-5/8 w-11/12 px-2"
            priority
            src={CCLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Education;