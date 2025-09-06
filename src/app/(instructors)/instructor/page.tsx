import React from "react";


export const metadata = {
  title: "Dashboard"
}
function Home() {
  return (
    <div className="p-[20px]">
      <div className="w-full h-full min-h-[450px] bg-white shadow-lg border-[1px] rounded-3xl dashboard-svg p-[50px]">
        <div className="">
          <div className="flex items-center gap-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[80px] w-[80px] rounded-full border-[1px] border-slate-300"
              />
            </div>
            <div>
              <p className="text-md text-gray-900">Edward C. Taligatos</p>
              <p className="text-sm text-gray-800">Web Developer - Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
