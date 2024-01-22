import CountUp from "react-countup";
const Stats = () => {
  return (
    <section className="p-6 my-20 max-w-4xl mx-auto text-center font-mono bg-black rounded-lg text-white font-black">
      <div className="container mx-auto grid justify-center text-center grid-cols-3">
        <div className="flex flex-col justify-start m-2 lg:m-6 drop-shadow-2xl">
          <p className="text-4xl font-bold  lg:text-4xl">
            <CountUp end={27460} duration={5} />
          </p>
          <p className="text-sm sm:text-md lg:text-xl opacity-70">
            Available Houses
          </p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold  lg:text-4xl">
            <CountUp end={40000} duration={5} />
          </p>
          <p className="text-sm sm:text-md lg:text-xl opacity-70">
            Total Houses
          </p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold  lg:text-4xl">
            <CountUp end={99340} duration={10} />
          </p>
          <p className="text-sm sm:text-md lg:text-xl opacity-70">
            Satisfied Customer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
