import React from "react";
import cryptocurrency from "../assets/portfolio/cryptocurrency.png";
import netflex from "../assets/portfolio/netflex.png";
import portfolio from "../assets/portfolio/portfolio.png";
import responceDark from "../assets/portfolio/responceDark.png";
import responce2 from "../assets/portfolio/responce2.png";
import responceJs2 from "../assets/portfolio/responceJs2.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      url: "https://alipourhassan.netlify.app/",
      surce: "https://github.com/aliph55/portfolio",
    },
    {
      id: 2,
      src: responceDark,
      url: "https://responce-dark-js1.netlify.app/",
      surce: "https://github.com/aliph55/responce-dark-js1",
    },
    {
      id: 3,
      src: cryptocurrency,
      url: "https://cryptocurrency-js.netlify.app",
      surce: "https://github.com/aliph55/cryptocurrency-js",
    },
    {
      id: 4,
      src: responce2,
      url: "https://recponce-js1.netlify.app/",
      surce: "https://github.com/aliph55/recponce-js1",
    },
    {
      id: 5,
      src: netflex,
      url: "https://netflex-react-js.netlify.app/",
      surce: "https://github.com/aliph55/netflex-react-js",
    },
    {
      id: 6,
      src: responceJs2,
      url: "https://responce-js2.netlify.app/",
      surce: "https://github.com/aliph55/responce-js2",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md object-cover duration-200 hover:scale-105"
              />
              <div className="flex items-center  justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={url}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
