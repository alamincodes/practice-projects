import React from "react";
import Img1 from "../Images/cardImg/1.png";
import Img2 from "../Images/cardImg/2.png";
import Img3 from "../Images/cardImg/3.png";
import Img4 from "../Images/cardImg/4.png";
import Img5 from "../Images/cardImg/5.png";
import Img6 from "../Images/cardImg/6.png";
const Cards = () => {
  return (
    <section className="container mx-auto my-32">
      <div className="grid grid-cols-3 gap-6">
        {/* card */}
        <div className="bg-[#171B29] row-span-3 flex flex-col p-4 h-[880px] rounded-lg">
          <img src={Img1} alt="" />
          <div>
            <div className="flex items-center my-2">
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Category
              </h3>
              <p className="text-gray-500 ml-4">January 01, 2022</p>
            </div>
            <div>
              <p className="text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Donec lectus enim
                feugiat donec purus odio sit lectus.
              </p>
              <div className="flex items-center my-[400px]">
                <img src={Img6} alt="" />
                <h3 className="ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ebad Shafiq
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-[#171B29] h-[434px] flex flex-col p-4 rounded-lg">
          <img src={Img2} alt="" />
          <div>
            <div className="flex items-center my-2">
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Category
              </h3>
              <p className="text-gray-500 ml-4">January 01, 2022</p>
            </div>
            <div>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet consectetur. Donec lectus enim
                feugiat donec purus odio sit lectus.
              </p>
              <div className="flex items-center">
                <img src={Img6} className="w-8 h-7 object-contain mt-3" alt="" />
                <h3 className="ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ebad Shafiq
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-[#171B29] h-[434px] flex flex-col p-4 rounded-lg">
          <img src={Img3} alt="" />
          <div>
            <div className="flex items-center my-2">
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Category
              </h3>
              <p className="text-gray-500 ml-4">January 01, 2022</p>
            </div>
            <div>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet consectetur. Donec lectus enim
                feugiat donec purus odio sit lectus.
              </p>
              <div className="flex items-center">
                <img src={Img6} className="w-8 h-7 object-contain mt-3" alt="" />
                <h3 className="ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ebad Shafiq
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-[#171B29] h-[434px] flex flex-col p-4 rounded-lg">
          <img src={Img4} alt="" />
          <div>
            <div className="flex items-center my-2">
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Category
              </h3>
              <p className="text-gray-500 ml-4">January 01, 2022</p>
            </div>
            <div>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet consectetur. Donec lectus enim
                feugiat donec purus odio sit lectus.
              </p>
              <div className="flex items-center">
                <img src={Img6} className="w-8 h-7 object-contain mt-3" alt="" />
                <h3 className="ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ebad Shafiq
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-[#171B29] h-[434px] flex flex-col p-4 rounded-lg">
          <img src={Img5} alt="" />
          <div>
            <div className="flex items-center my-2">
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Category
              </h3>
              <p className="text-gray-500 ml-4">January 01, 2022</p>
            </div>
            <div>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet consectetur. Donec lectus enim
                feugiat donec purus odio sit lectus.
              </p>
              <div className="flex items-center">
                <img src={Img6} className="w-8 h-7 object-contain mt-3" alt="" />
                <h3 className="ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ebad Shafiq
                </h3>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Cards;
