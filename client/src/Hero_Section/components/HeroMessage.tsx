const HeroMessage: React.FC = () => {
  return (
    <div className="flex h-[260px] flex-col justify-center gap-6">
      <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
        Well crafted abstract images
      </h1>
      <span className="text-lg font-normal text-neutral-600 md:text-xl">
        High quality abstract images for your projects, wallpaper and
        presentations.
      </span>
      <div className="flex gap-4 self-stretch md:w-[458px] md:gap-8">
        <button className="flex grow items-center justify-center gap-1.5 rounded border-[0.5px] border-solid border-neutral-200 bg-white px-5 py-3 text-neutral-900 md:px-6 md:py-4 md:text-lg">
          Learn More
        </button>
        <button className="flex grow items-center justify-center gap-1.5 rounded border-[0.5px] border-solid border-neutral-200 bg-indigo-700 px-5 py-3 text-white md:px-6 md:py-4 md:text-lg">
          See pricing
        </button>
      </div>
    </div>
  );
};

export default HeroMessage;
