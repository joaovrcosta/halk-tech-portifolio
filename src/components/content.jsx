import React from "react";

export default function Content() {
  return (
    <div className="bg-[#030303] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">HAWK</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p className="text-white">Home</p>
        <p className="text-white">Projects</p>
        <p className="text-white">Our Mission</p>
        <p className="text-white">Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p className="text-white">News</p>
        <p className="text-white">Learn</p>
        <p className="text-white">Certification</p>
        <p className="text-white">Publications</p>
      </div>
    </div>
  );
};
