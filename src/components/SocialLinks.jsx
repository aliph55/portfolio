import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ali-pourhassan-875891222/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aliph55",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ali.pourhassan55@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/ali_samsun2021/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0  ">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-r-md " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
