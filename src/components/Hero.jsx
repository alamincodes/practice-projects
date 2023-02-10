import React from "react";
import HeroImg from "../Images/hero.png";
const Hero = () => {
  return (
    <section className="bg-bgBlur object-center bg-no-repeat">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            <div className="bg-[#201D2A] w-[250px] py-2 rounded-full">
              <h3 className=" text-center font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ENTER INTO THE FUTURE
              </h3>
            </div>
            {/* text */}
            <div>
              <h2 className="text-5xl my-3 ">Build something with</h2>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                INVENTIONAL Open AI
              </h2>
              <p className="text-gray-500 my-3">
                Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed
                sit integer mauris gravida proin eget. Interdum suscipit massa
                dis lobortis pharetra lorem quis. Nec viverra bibendum eu et
                amet enim mauris. Turpis integer accumsan turpis dolor lectus
                pretium vestibulum quis at.
              </p>
            </div>
            {/* input */}
            <div className="flex justify-between bg-[#141A24] py-2 rounded-full w-3/3">
              <input
                className="w-[50%] outline-none bg-transparent px-5 border-none"
                type="text"
                placeholder="youremail@address.com"
              />
              <button className="btn mr-2">Contact Us</button>
            </div>
          </div>
          {/* img */}
          <div className="w-[50%]">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
