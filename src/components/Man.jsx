import React from "react";
// import fb from "../Images/icons/facebook.svg";
// import { MdOutlineStickyNote2 } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import man from "../Images/man.png";
const Man = () => {
  return (
    <section className="container mx-auto my-32">
      <div>
        <div className="flex justify-evenly">
          {/* text and button */}
          <div className="">
            <h2 className="w-[400px] text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-primary to-secondary">
              The possibilities are beyond your imagination.
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Gravida a pretium id id
              lacus tellus mauris quis scelerisque.{" "}
            </p>
            <div className="flex items-center space-x-3 my-6">
              <a href="">
                <FaFacebookF className="h-9 w-9 p-1 rounded-full bg-gradient-to-t from-primary to-secondary" />
              </a>
              <a href="">
                <FaFacebookF className="h-9 w-9 p-1 rounded-full bg-gradient-to-t from-primary to-secondary" />
              </a>
              <a href="">
                <FaFacebookF className="h-9 w-9 p-1 rounded-full bg-gradient-to-t from-primary to-secondary" />
              </a>
              <a href="">
                <FaFacebookF className="h-9 w-9 p-1 rounded-full bg-gradient-to-t from-primary to-secondary" />
              </a>
              <a href="">
                <FaFacebookF className="h-9 w-9 p-1 rounded-full bg-gradient-to-t from-primary to-secondary" />
              </a>
            </div>
            <button className="btn">Contact Us</button>
          </div>
          {/* ---img-- */}
          <div>
            <div className="gradient ">
              <img
                src={man}
                className="h-[414px] w-[604px] mt-9 object-contain"
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="text-gray-500 w-2/3">
            <p className="flex items-center mb-3">
              <span className="mr-3 flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[20px] h-[20px] text-center rounded-l-lg rounded-tl-3xl rounded-3xl">
                <BsCheck className="text-white" />
              </span>
              Lorem ipsum dolor sit amet, consectetur .
            </p>
            <p className="flex items-center mb-3">
              <span className="mr-3 flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[20px] h-[20px] text-center rounded-l-lg rounded-tl-3xl rounded-3xl">
                <BsCheck className="text-white" />
              </span>
              Lorem ipsum dolor sit amet, consectetur amet.
            </p>
            <p className="flex items-center mb-3">
              <span className="mr-3 flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[20px] h-[20px] text-center rounded-l-lg rounded-tl-3xl rounded-3xl">
                <BsCheck className="text-white" />
              </span>
              Lorem ipsum consectetur dolor sit amet, consectetur .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Man;
<h2>Men</h2>;
