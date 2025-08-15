import Link from "next/link";
import Image from 'next/image'
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Links } from "../interface/Links";


export interface props {
  links: Links[];
  toggle: boolean;
  onToggle: () => void;
}
function Sidebar({ links, toggle, onToggle }: props) {
  const [isOpen, setIsOpen] = useState<any>({});
  const openGroup = (linkName: string) => {
    setIsOpen((prev: any) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };
 
  return (
    <div className={`bg-white border-r-[1px] border-slate-200 fixed inset-y-0 hidden md:flex flex-col ${toggle ? 
    'w-[180px] lg:w-[250px]' : 'w-[60px]'} p-[10px] z-[99999]`}>
      <div className="flex items-center">
        <h2 className="mb-2 pt-[10px] flex items-center">
           <div className="relative h-[40px] w-[40px]">
              <Image fill src="/icon.png" alt=""/>
            </div>
          {toggle ? (<span className="text-purpleIndigo text-xl lg:text-lg tracking-wider font-[500]">Educore</span>) : ''}
        </h2>
      </div>

      <div className="mt-2">
        {links.map((link: any) =>
          link.type === "link" ? (
            <Link
              href={link.path}
              className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
              key={link.name}
            >
              <span className="mr-2">{link.icon}</span>
              {toggle ? link.name : '' }
            </Link>
          ) : (
            <React.Fragment key={link.name}>
              <div
                className="cursor-pointer text-black flex items-center justify-between text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                onClick={() => openGroup(link.name)}
              >
                <div className="flex items-center">
                  <span className="mr-2">{link.icon}</span>
                  {toggle ? link.name : ''}
                </div>
                {toggle ? ( <IoChevronDownOutline
                  className={`transition-transform ${isOpen[link.name] ? "rotate-180" : ""
                    }`}
                  size={20}
                />) : ''}
              </div>
              {isOpen[link.name] && (
                <div className={`${toggle ? 'pl-3' : 'pl-0'} flex flex-col`}>
                  {link.items.map((l: any) => (
                    <Link
                      href={l.path}
                      key={l.name}
                      className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                    >
                      <span className="mr-2">{l.icon}</span>
                       {toggle ? l.name : ''}
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
