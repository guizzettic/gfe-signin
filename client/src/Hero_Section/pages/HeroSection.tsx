import prism from "../assets/prism.png";
import HeroMessage from "../components/HeroMessage";

const HeroSection: React.FC = () => {
  return (
    <div className="m-4 flex h-[780px] grow flex-col items-center justify-center rounded bg-white md:h-[992px] lg:h-[736px]">
      <div className="flex h-[668px] flex-col items-center justify-around gap-12 rounded px-3 py-12 md:h-[938px] lg:h-[718px] lg:w-[1408px] lg:flex-row lg:p-24">
        <HeroMessage />
        <img
          src={prism}
          aria-label="prism-photo"
          alt="prism-photo"
          className="flex w-full max-w-[696px] grow items-center justify-center self-stretch rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
