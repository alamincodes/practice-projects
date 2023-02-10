import React from "react";

const Library = () => {
  return (
    <section className="container mx-auto bg-[#171B29] mt-9 p-6 rounded-lg">
      <div>
        {/* text */}
        <div className="flex justify-center items-center flex-col py-9">
          <h2 className="text-5xl font-bold">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              library
            </span>
          </h2>
          <div className="w-[50%] text-center my-4">
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed sit
              integer mauris gravida proin eget. Interdum suscipit massa dis
              lobortis pharetra lorem quis
            </p>
          </div>
        </div>
        {/* card */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
          {/* item */}
          <div>
            <h2 className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[60px] h-[60px] text-center rounded-l-lg rounded-tl-3xl  rounded-3xl">
              01
            </h2>
            <h2 className="font-bold text-2xl my-3">CHATBOTS</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Sit sed aliquet senectus
              porttitor hendrerit nunc nisl. Habitant est sit egestas orci
              lobortis.
            </p>
          </div>
          {/* item */}
          <div>
            <h2 className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[60px] h-[60px] text-center rounded-l-lg rounded-tl-3xl rounded-3xl">
              02
            </h2>
            <h2 className="font-bold text-2xl my-3">KNOWLEDGE BASE</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Sit sed aliquet senectus
              porttitor hendrerit nunc nisl. Habitant est sit egestas orci
              lobortis.
            </p>
          </div>
          {/* item */}
          <div>
            <h2 className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-3xl w-[60px] h-[60px] text-center rounded-l-lg rounded-tl-3xl  rounded-3xl">
              03
            </h2>
            <h2 className="font-bold text-2xl my-3">EDUCATION</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Sit sed aliquet senectus
              porttitor hendrerit nunc nisl. Habitant est sit egestas orci
              lobortis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
