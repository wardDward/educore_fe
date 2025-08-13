import Link from "next/link";
import  React, {useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Links } from "../interface/Links";


export interface props {
  links: Links[];
  title: string;
}
// hide this when small screen make it hamburger menu use the navlinks data
function Sidebar({ links, title = "LMS" }: props) {
  const [isToggle, setIsToggle] = useState<Boolean>(true);
  const [isOpen, setIsOpen] = useState<any>({});

  const openGroup = (linkName: string) => {
    setIsOpen((prev: any) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  return (
    <div className="bg-white border-r-[1px] border-slate-200 fixed inset-y-0 hidden md:flex flex-col w-[180px] lg:w-[250px] p-[10px] z-[99999]">
      <div className="flex items-center justify-between">
        <h2 className="text-purpleIndigo text-xl lg:text-2xl tracking-wider font-[500] mb-2 pt-[10px] px-[9px]">
          {title}
        </h2>
        <label
          className="inline-flex items-center cursor-pointer"
        >
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-darkPurpleIndigo dark:peer-focus:ring-purpleIndigo rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purpleIndigo dark:peer-checked:bg-purpleIndigo"></div>
        </label>
      </div>

      <div className="mt-2">
        {links.map((link:any) =>
          link.type === "link" ? (
            <Link
              href={link.path}
              className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
              key={link.name}
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </Link>
          ) : (
            <React.Fragment key={link.name}>
              <div
                className="cursor-pointer text-black flex items-center justify-between text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                onClick={() => openGroup(link.name)}
              >
                <div className="flex items-center">
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </div>
                <IoChevronDownOutline
                  className={`transition-transform ${isOpen[link.name] ? "rotate-180" : ""
                    }`}
                  size={20}
                />
              </div>
              {isOpen[link.name] && (
                <div className="pl-3 flex flex-col">
                  {link.items.map((l:any) => (
                    <Link
                      href={l.path}
                      key={l.name}
                      className="text-black flex items-center text-sm lg:text-md p-2 hover:text-white hover:bg-purpleIndigo rounded-md w-full"
                    >
                      <span className="mr-2">{l.icon}</span>
                      {l.name}
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
