const Card = ({ data }) => {
  return (
    <div className="max-[350px] md:w-[350px] border px-6 py-4 mx-auto rounded-2xl space-y-6">
      {/* Card Image */}
      <img
        className="w-[350px] h-[190px] bg-black/20 rounded-2xl"
        src={"https://source.unsplash.com/350x200/?house"}
        alt=""
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="font-medium md:text-xl sm:text-lg">{data?.name}</h2>
        <h4>
          <span className="font-bold">City:</span> {data?.city}
        </h4>
        <h2 className="md:text-xl text-gray-800">{data?.rent}</h2>
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex justify-between items-center font-medium">
        <button className="hover:text-white px-6 py-2 border border-black rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-black">
          View Details
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-black/70">
          Book Now
        </button>
      </div>
    </div>
  );
};
export default Card;
