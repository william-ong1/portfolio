import { FaExternalLinkAlt } from 'react-icons/fa';
import AnimateOnScroll from '../AnimateOnScroll';

interface ResearchItem {
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}

const researchItems: ResearchItem[] = [
  {
    title: "Learning to Learn: Modeling Neural Connectivity During BCI-Driven Plasticity",
    description: "Performed statistical and machine learning analyses on M1 neural activity data from mice to identify neural connectivity changes during brain-computer interface (BCI) modulation.",
    date: "2024",
    link: "/research/learning-to-learn.pdf",
    tags: ["Machine Learning", "Statistical Analysis", "Neural Data Analysis"]
  },
  {
    title: "VIBA-Net: A Multimodal Framework for Infant Behavior Annotation",
    description: "Developed a privacy-preserving and computationally efficient multimodal framework to automate the annotation of parent-infant interaction videos for infant development research.",
    date: "2024",
    link: "/research/viba-net.pdf",
    tags: ["Deep Learning", "Audio Classification", "Emotion Recognition", "Object Detection"]
  }
];

export default function Research() {
  return (
    <AnimateOnScroll className="flex flex-col gap-6 w-full">
      <div className="text-2xl font-bold uppercase pt-10 mt-1 lg:pt-[5.25rem]">Research</div>
      
      <div className="space-y-6">
        {researchItems.map((item, index) => (
          <AnimateOnScroll key={index} delay={index * 100}>
            {/* <div className="bg-gradient-to-b from-[#030712]/95 to-[#030712]/95 p-5 rounded-lg shadow-inner shadow-light-blue/5"> */}
            <div className="group transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-light-blue">
                  {item.link ? (
                    <a
                      className="flex items-center gap-1.5 hover:text-light-blue/80 transition-colors group/link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </h3>
                <span className="text-xs text-gray-300">{item.date}</span>
              </div>
              <p className="text-xs text-white mb-3">{item.description}</p>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-0.5 text-[10px] rounded-full bg-blue-900/30 text-light-blue border border-light-blue/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </AnimateOnScroll>
  );
} 