import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          reprehenderit, officia amet odio incidunt sapiente omnis corporis
          natus, praesentium ab quas quam consequuntur dicta! Reiciendis
          obcaecati harum odit, magni nobis perferendis omnis maiores tempora
          hic, rem quisquam dolores ullam, nisi earum. Quibusdam voluptatem
          tenetur vero dolores assumenda? Alias, illo nihil.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          perferendis obcaecati debitis possimus molestiae, reiciendis tenetur
          cumque sequi soluta distinctio impedit quia expedita nostrum eum
          deserunt repellat optio corrupti vel voluptatum quaerat eius pariatur
          enim cum! Incidunt atque sed, totam, sint sit laudantium veniam a
          quibusdam accusantium distinctio, nulla voluptates?
        </p>
      </div>
    </div>
  );
};

export default About;
