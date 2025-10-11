import React from 'react';

const Button02 = ({ text = "Button 02" }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
      {text}
    </button>
  );
};

export default Button02;