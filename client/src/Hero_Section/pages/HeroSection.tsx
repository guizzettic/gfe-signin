import prism from "../assets/prism.png";
import HeroMessage from "../components/HeroMessage";

const HeroSection: React.FC = () => {
  return (
    <div className="m-4 flex h-[780px] grow flex-col items-center justify-center rounded">
      <div className="flex h-[668px] flex-col items-center justify-around gap-12 bg-red-400 px-3 py-12">
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
