import { Link } from "react-router-dom";
import { useState } from "react";

export const Add_new_modal = ({ text }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const bedrooms = form.bed.value;
    const bathrooms = form.bath.value;
    const size = form.size.value;
    const image = form.img.value;
    const date = form.date.value;
    const rent = form.rent.value;
    const number = form.number.value;
    const des = form.des.value;
    const email = "fdfd";
    const owner_name = "lehri";
    console.log(
      name,
      address,
      city,
      bedrooms,
      bathrooms,
      size,
      image,
      date,
      rent,
      number,
      des,
      email,
      owner_name
    );
  };
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-black text-white p-2 rounded-lg mb-4"
      >
        {text}
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center overflow-y-scroll  z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
      >
        <form
          onSubmit={handleSubmit}
          onClick={(e_) => e_.stopPropagation()}
          className={`w-full md:w-96 lg:w-[600px] h-fit px-6 py-2 my-4 bg-white drop-shadow-2xl rounded-lg  ${
            openModal
              ? "opacity-1 duration-300 translate-y-0"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <svg
            onClick={() => setOpenModal(false)}
            className="w-10 mx-auto mr-0 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#000"
              ></path>
            </g>
          </svg>
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">
            Add New
          </h1>
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                placeholder="John Doe"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                required
                id="address"
                type="text"
                placeholder="Baipail, Savar"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-2">
                City
              </label>
              <input
                required
                id="city"
                type="text"
                placeholder="Dhaka"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="bed" className="block mb-2">
                Bedrooms
              </label>
              <input
                required
                id="bed"
                type="text"
                placeholder="3 or more"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="bath" className="block mb-2">
                Bathrooms
              </label>
              <input
                required
                id="bath"
                type="text"
                placeholder="2 or more"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="size" className="block mb-2">
                Size
              </label>
              <input
                required
                id="size"
                type="text"
                placeholder="X or Y sqft"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="img" className="block mb-2">
                Image
              </label>
              <input
                required
                id="img"
                type="text"
                placeholder="provide img link"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="date" className="block mb-2">
                Available Date
              </label>
              <input
                required
                id="date"
                type="date"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="rent" className="block mb-2">
                Monthly rent
              </label>
              <input
                required
                id="rent"
                type="text"
                placeholder="$400"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="number" className="block mb-2">
                Phone Number
              </label>
              <input
                required
                id="number"
                type="number"
                placeholder="+880"
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="des" className="block mb-2">
                Description
              </label>
              <textarea
                required
                id="des"
                placeholder="All data to know renter....."
                className="p-2 block w-full outline-none border rounded-md"
              />
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-6 shadow-lg border rounded-md border-black block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
