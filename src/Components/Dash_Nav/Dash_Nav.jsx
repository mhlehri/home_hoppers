const Dash_Nav = () => {
  return (
    <div className="w-full h-fit px-10 bg-black/90 text-center text-white flex flex-col gap-3">
      <h2 className="text-4xl">Home Hoppers</h2>
      <div>
        <h4>Name: </h4>
        <p>House Owner</p>
      </div>
      <ul className="flex gap-5 mx-auto py-5">
        <li className="bg-white text-black px-6 py-2 rounded-lg">Dashboard</li>
        <li className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-lg">
          Go back to Home
        </li>
      </ul>
    </div>
  );
};

export default Dash_Nav;
