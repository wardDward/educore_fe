import React from "react";
import { tabs } from "@/app/_data/tab";
import Link from "next/link"
function Home() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-600">Threads</h1>
        <button className="text-sm text-white bg-purpleIndigo hover:bg-darkPurpleIndigo py-1 px-3 font-[400] rounded-md cursor-pointer">
          Ask question
        </button>
      </div>
      {/* components */}
      <main className="mt-4">
        <div className="flex flex-wrap justify-between items-center gap-1">
          <div className="w-full max-w-[200px] text-ellipsis whitespace-nowrap ">Questions: 24,000,000</div>
          <div className="py-1 px-1 border-[1px] border-gray-600 rounded-md flex items-center w-full lg:w-[450px]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="text-xs font-[300] mx-1 hover:bg-slate-200 px-1 py-1 rounded-md cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap flex-1"
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-3 h-[1px] border border-gray-700" />
        <div className="flex flex-col justify-center  items-center">
          <div className="w-full md:w-[570px] lg:w-[700px] px-[30px] py-2 border-b border-gray-500 last:border-none">
            <div className="flex items-center">
              <div className="flex flex-col justify-center">
                <span className="text-gray-700 text-xs">0 votes</span>
                <span className="text-gray-700 text-xs">0 answer</span>
                <span className="text-gray-700 text-xs">0 views</span>
              </div>
              <div className="ml-5 w-[80%]">
                <Link href={"#"} className="w-full text-md text-blue-500 line-clamp-2 hover:underline">
                  Lorem ipsum dolor sit amet...
                </Link>
                <p className="text-xs mt-2 text-gray-600 font-[300] line-clamp-2">
                  Lorem ipsum dolor sit amet...
                </p>
                <div className="mt-2 flex flex-wrap items-center">
                  <div className="bg-gray-500/90 text-black text-xs py-1 px-3 rounded-md mr-2 mb-2">
                    <Link href="#" className="text-white hover:underline text-xs font-[300]">
                      Javascript
                    </Link>
                  </div>
                  <div className="bg-gray-500/90 text-black text-xs py-1 px-3 rounded-md mr-2 mb-2">
                    <Link href="#" className="text-white hover:underline text-xs font-[300]">
                      Laravel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;
