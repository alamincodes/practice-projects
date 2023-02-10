import React from "react";

const Feature = () => {
  return (
    <section className="container mx-auto mt-16 ">
      <div className="flex items-center">
        {/* left */}
        <div>
          <h2 className="text-5xl w-3/4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            The future is now and you just need to realize it. Step into future
            toady & make it happen
          </h2>
          <p className="text-gray-500 my-5 w-3/4">
            Lorem ipsum dolor sit amet consectetur. Massa blandit a nibh
            condimentum ut. Nulla felis vel fusce id bibendum mi ac. Purus in
            amet sem ac. Lorem ipsum dolor sit amet consectetur. Massa blandit a
            nibh condimentum ut. Nulla felis vel fusce id bibendum mi ac. Purus
            in amet sem ac.
          </p>
        </div>
        {/* right */}
        <div>
          {/* item */}
          <div>
            <div className="h-2 w-[200px] mb-2 rounded-3xl bg-gradient-to-r from-primary to-secondary"></div>
            <h3 className="text-2xl">Fast and Easy to use</h3>
            <p className="text-gray-500 my-2">
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum. Amet in malesuada
              non.
            </p>
          </div>
          {/* item */}
          <div>
            <div className="h-2 w-[200px] mb-2 rounded-3xl bg-gradient-to-r from-primary to-secondary"></div>
            <h3 className="text-2xl">Fast and Easy to use</h3>
            <p className="text-gray-500 my-2">
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum. Amet in malesuada
              non.
            </p>
          </div>
          {/* item */}
          <div>
            <div className="h-2 w-[200px] mb-2 rounded-3xl bg-gradient-to-r from-primary to-secondary"></div>
            <h3 className="text-2xl">Fast and Easy to use</h3>
            <p className="text-gray-500 my-2">
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum. Amet in malesuada
              non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
