import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Links } from "../interface/Links";
import useClickOutside from "../_hooks/useClickOutside";

export interface props {
  links: Links[];
  toggle: boolean;
  onToggle: () => void;
}

function Sidebar({ links, toggle, onToggle }: props) {
  const [isOpen, setIsOpen] = useState<any>({});
  const sidebar = useRef<HTMLDivElement>(null)
  const openGroup = (linkName: string) => {
    setIsOpen((prev: any) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  //for link closing
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      onToggle();
    }
  };

  useClickOutside(sidebar, onToggle)

  return (
    //translate condition is for sm/mobile reso hidding the sidebar
    <div
      ref={sidebar}
      className={`bg-white border-r border-slate-200 fixed inset-y-0 flex flex-col
        transform transition-transform duration-300 ease-in-out z-[99999]
        ${toggle ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
        ${toggle ? "w-[250px]" : "w-[60px]"}
        p-[10px]`}
    >
      <div className="flex items-center">
        <h2 className="mb-2 pt-[10px] flex items-center">
          <div className="relative h-[40px] w-[40px]">
            <Image fill src="/icon.png" alt="" />
          </div>
          {toggle && (
            <span className="text-purpleIndigo text-xl lg:text-lg tracking-wider font-[500]">
              Educore 
            </span>
          )}
        </h2>
      </div>

      <div className="mt-2">
        {links.map((link: any) =>
          link.type === "link" ? (
            <Link
              href={link.path}
              onClick={handleLinkClick}
              className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
              key={link.name}
            >
              <span className="mr-2">{link.icon}</span>
              {toggle ? link.name : ""}
            </Link>
          ) : (
            <React.Fragment key={link.name}>
              <div
                className="cursor-pointer text-black flex items-center justify-between text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                onClick={() => openGroup(link.name)}
              >
                <div className="flex items-center">
                  <span className="mr-2">{link.icon}</span>
                  {toggle ? link.name : ""}
                </div>
                {toggle && (
                  <IoChevronDownOutline
                    className={`transition-transform ${
                      isOpen[link.name] ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                )}
              </div>
              {isOpen[link.name] && (
                <div className={`${toggle ? "pl-3" : "pl-0"} flex flex-col`}>
                  {link.items.map((l: any) => (
                    <Link
                      href={l.path}
                      onClick={handleLinkClick}
                      key={l.name}
                      className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                    >
                      <span className="mr-2">{l.icon}</span>
                      {toggle ? l.name : ""}
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;
