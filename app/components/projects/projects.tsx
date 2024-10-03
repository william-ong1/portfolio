import Rhythmix from "./rhythmix";
import InsightArchives from "./insight-archives";

const Projects = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-20">
      <div className="text-2xl font-bold mt-1 uppercase"> Projects </div>
        <InsightArchives />
        <div id="rhythmix"> <Rhythmix /> </div>
    </div>
  );
};

export default Projects;