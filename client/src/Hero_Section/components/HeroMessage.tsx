const HeroMessage: React.FC = () => {
  return (
    <div className="flex h-[260px] flex-col justify-center gap-6">
      <h1 className="text-4xl font-semibold text-neutral-900">
        Well crafted abstract images
      </h1>
      <span className="text-lg font-normal text-neutral-600">
        High quality abstract images for your projects, wallpaper and
        presentations.
      </span>
      <div className="flex gap-4 self-stretch">
        <button className="flex grow items-center justify-center gap-1.5 rounded border-[0.5px] border-solid border-neutral-200 bg-white px-5 py-3">
          Learn More
        </button>
        <button className="gap-1.5 rounded bg-indigo-700 px-5 py-3 text-base font-medium text-white">
          See pricing
        </button>
      </div>
    </div>
  );
};

export default HeroMessage;
