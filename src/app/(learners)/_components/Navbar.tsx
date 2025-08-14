import React from "react";
import { LuMessageCircle } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-white h-[100px] flex items-center justify-between px-[20px] border-b-[2px] border-purpleIndigo">
      <div>Panghide and show ng sidebar</div>
      <div className="flex items-center gap-2">
        <div className="hover:text-purple-600 transition duration-200 cursor-pointer hover:scale-130">
          <LuMessageCircle size={26} />
        </div>
        <div className="hover:text-purple-600 transition duration-200 cursor-pointer hover:scale-130">
          <MdNotificationsNone size={28} />
        </div>
        <Link href="#" className="hover:scale-130">
          <img
            src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D˝"
            className="h-[30px] w-[30px] rounded-full border-[1px] border-darkPurpleIndigo"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
