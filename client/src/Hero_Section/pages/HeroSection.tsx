import prism from "../assets/prism.png";
import HeroMessage from "../components/HeroMessage";

const HeroSection: React.FC = () => {
  return (
    <div className="m-4 flex min-h-[80vh] grow flex-col items-center justify-center rounded bg-white">
      <div className="flex w-full max-w-7xl flex-col items-center justify-around gap-12 rounded p-4 lg:flex-row lg:gap-12 lg:p-8">
        <HeroMessage />

        <img
          src={prism}
          aria-label="prism-photo"
          alt="prism-photo"
          className="h-full w-full max-w-[696px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
