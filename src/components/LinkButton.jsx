import React from "react";

const buttonStyle = {
  padding: '0 30vw',
}

const LinkButton = ({text}) => {
  return (
    <div className="grid" style={buttonStyle}>
      <DrawOutlineButton>{text}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 border-2 border-black font-medium text-slate-0 transition-colors duration-[400ms] hover:text-indigo-500 hover:border-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-500 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-500 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-500 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default LinkButton;