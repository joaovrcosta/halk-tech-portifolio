import React from "react";

export default function Content() {
  return (
    <div className="bg-[#fff] py-8 px-12 h-full w-full flex flex-col justify-between">
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
      <h1 className="text-4xl text-black leading-[0.8] mt-10">HAWK</h1>
      <p className="text-black">©halk 2025</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-black font-bold">About</h3>
        <p className="text-black">Home</p>
        <p className="text-black">Projects</p>
        <p className="text-black">Our Mission</p>
        <p className="text-black">Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-black font-bold">Education</h3>
        <p className="text-black">News</p>
        <p className="text-black">Certification</p>
        <p className="text-black">Publications</p>
      </div>
    </div>
  );
};
