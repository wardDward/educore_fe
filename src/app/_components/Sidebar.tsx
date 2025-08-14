import Link from "next/link";
import  React, {useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa6";
import { Links } from "../interface/Links";


export interface props {
  links: Links[];
  title: string;
  toggle: boolean;
  onToggle: () => void;
}
function Sidebar({ links, title = "LMS", toggle ,onToggle }: props) {
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
        <div onClick={onToggle} className="p-2 rounded-full hover:bg-slate-100 hover:text-purpleIndigo cursor-pointer">
          <FaChevronLeft size={14} className={`transition-transform ${toggle ? '-rotate-180' : ''}`}/>
        </div>
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
