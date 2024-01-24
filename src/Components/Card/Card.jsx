import { useContext } from "react";
import View_modal from "../View_modal/View_modal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Login_register_modal } from "../Login_register_modal/Login_Register_Modal";
import { Book_modal } from "../Book_modal/Book_modal";

const Card = ({ data, refetch }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-[350px] md:w-[350px] border px-6 py-4 mx-auto rounded-2xl space-y-6">
      {/* Card Image */}
      <img
        className="w-[350px] h-[190px] bg-black/20 rounded-2xl"
        src={data?.image}
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
        <button className="hover:text-white px-6 border border-black rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-black">
          <View_modal id={data?._id} text="View Details" />
        </button>
        {user ? (
          <Book_modal refetch={refetch} text="Book Now" id={data?._id} />
        ) : (
          <Login_register_modal text="Book Now" />
        )}
      </div>
    </div>
  );
};
export default Card;
