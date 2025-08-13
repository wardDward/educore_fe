
"use client"
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import useClickOutside from "@/app/_hooks/useClickOutside";
function SelectForm() {
  const [selectInput, setSelectInput] = useState("Select Category");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null)
  const toggle = () => {
    setOpen(!open);
  };

  useClickOutside(selectRef, toggle)
  return (
    <>
      <div className="relative">
        <div
          className="relative w-full lg:w-[250px] mt-1 lg:mt-0 py-1 px-4 border-[1px] border-gray-400 rounded-md cursor-pointer"
          onClick={() => toggle()}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{selectInput}</span>
            <FaChevronDown
              className={`${open ? "transform rotate-180" : ""
                } text-gray-600 h-[18px] w-[16px]`}
            />
          </div>
        </div>
        {open && (
          <div ref={selectRef} className="bg-white w-full lg:w-[250px] absolute top-[30px] left-0 right-0 shadow-sm p-2 flex flex-col">
            <div>
              <label htmlFor="" className="text-sm text-purpleIndigo">Search</label>
              <div className="flex items-center relative">
                <IoIosSearch className="h-5 w-5 text-gray-600 absolute left-2 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-400 py-[1px] rounded-md pl-7 pr-2 text-sm outline-none  "
                  placeholder="Search Category"
                />
              </div>
            </div>
            <span className="mt-1 text-purpleIndigo  ">Categories</span>
            <div className="h-[300px] overflow-y-auto">
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
              <div className="max-w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1 py-1 hover:bg-gray-300 rounded-md cursor-pointer z-[999]">
                dasdasdadasdasdsadasdsdasdadasdasd
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SelectForm;
