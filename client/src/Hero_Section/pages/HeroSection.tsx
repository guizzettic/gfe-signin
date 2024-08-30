import prism from "../assets/prism.png";
import HeroMessage from "../components/HeroMessage";

const HeroSection: React.FC = () => {
  return (
    <div className="m-4 flex h-[780px] grow flex-col items-center justify-center rounded bg-white md:h-[992px]">
      <div className="flex h-[668px] flex-col items-center justify-around gap-12 rounded px-3 py-12 md:h-[938px]">
        <HeroMessage />
        <img
          src={prism}
          aria-label="prism-photo"
          className="flex items-center justify-center self-stretch rounded-lg object-cover py-[32.12166976928711px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
