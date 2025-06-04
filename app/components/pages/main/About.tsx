import RadialCircularBluredBlock from "../../features/RadialCircularBluredBlock";
import SectionHead from "../../features/SectionHead";
import { AboutDetails, AboutImage } from "./features/AboutFeatures";

const About = () => {
  return (
    <section className="min-h-screen pt-8 relative" id="about">
      <RadialCircularBluredBlock position={{ top: 500, left: 400 }} />
      <RadialCircularBluredBlock position={{ top: 200, left: 100 }} />
      <RadialCircularBluredBlock position={{ top: 500, right: 100 }} />
      <RadialCircularBluredBlock position={{ top: 200, right: 400 }} />
      <SectionHead title="About Me" />
      <div
        className="flex-row-reverse flex items-center justify-between
gap-8
max-lg:flex-col-reverse
min-h-[70vh] 
      "
      >
        <div className="flex-1 max-lg:w-full flex justify-end">
          <AboutImage />
        </div>
        <div className="flex-1">
          <AboutDetails />
        </div>
      </div>
    </section>
  );
};

export default About;
