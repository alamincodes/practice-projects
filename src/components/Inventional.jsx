import React from "react";
import Finger from "../Images/finger.png";
import img1 from "../Images/icons/1.png";
import img2 from "../Images/icons/2.png";
import img3 from "../Images/icons/3.png";
import img4 from "../Images/icons/4.png";
import img5 from "../Images/icons/5.png";
const Inventional = () => {
  return (
    <section className="container mx-auto relative">
      <div className="flex justify-center items-center">
        {/* image */}
        <div className="w-[50%] absolute left-0 -z-10">
          <img src={Finger} className="" alt="" />
        </div>
        {/* text */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            What is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Inventional
            </span>
          </h2>
          <p className="text-gray-500 my-5">
            Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed sit
            integer mauris gravida proin eget. Interdum suscipit massa dis
            lobortis pharetra lorem quis. Nec viverra bibendum eu et amet enim
            mauris. Turpis integer accumsan turpis dolor lectus pretium
            vestibulum quis at.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed sit
            integer mauris gravida proin eget. Interdum suscipit massa dis
            lobortis pharetra lorem quis
          </p>

          <div className="flex justify-center items-center space-x-8 my-6">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventional;
