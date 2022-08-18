import { useState } from "react";

const Counter = ({ title }) => {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    setNumber = number++;
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="mt-4 mb-4 text-2xl italic">{number}</p>
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
      </button>
    </>
  );
};

export default Counter;
