import { BannerA } from "../../../Shared/Lottie/Lottie";

const Banner = () => {
  return (
    <div className="flex justify-around items-center h-56 text-center lg:text-left lg:h-[500px]">
      <div className="font-mono sm:w-2/3 lg:w-1/2 px-4 md:px-0">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-2 md:mb-5">
          Discover <br /> Your Dream Home
        </h1>
        <p className="opacity-70">
          Find Your Sanctuary, Lease Your Lifestyle. Home Hoppers - Where
          Comfort Meets Convenience.
        </p>
      </div>
      <div className="hidden lg:block md:w-56 lg:w-[300px]">
        <BannerA />
      </div>
    </div>
  );
};

export default Banner;
