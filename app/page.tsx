import About from "./components/About_";
import Experience from "./components/Experience_";
import Projects from "./components/projects/Projects_";
import Education from "./components/education/Education";
import Profile from "./components/Profile_";
import Footer from "./components/Footer_";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl h-screen px-4 py-12 md:px-12 md:py-20 lg:px-32 lg:py-0 fade-in font-raleway">
        <div className="lg:flex lg:justify-between lg:gap-16">

          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-20">
            <Profile />
          </div>
          
          <div className="flex flex-col lg:w-7/12 lg:pb-6">
            <div id="about"> <About /> </div>
            <div id="experience"> <Experience /> </div>
            <div id="projects"> <Projects /> </div>
            <div id="education"> <Education /> </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
