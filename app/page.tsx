import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects/projects";
import Education from "./components/education";
import Profile from "./components/profile";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div className="mx-auto h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

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
