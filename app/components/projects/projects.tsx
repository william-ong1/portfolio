import Rhythmix from "./rhythmix";
import InsightArchives from "./insight-archives";

const Projects = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-24">
      <div className="text-2xl font-bold mt-1 uppercase"> Projects </div>
        <Rhythmix />
        <InsightArchives />
    </div>
  );
};

export default Projects;