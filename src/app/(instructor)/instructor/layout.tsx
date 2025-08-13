"use client"
import React, { ReactNode, useState } from "react";
import Sidebar from "@/app/_components/Sidebar";
import {Links} from '@/app/interface/Links'
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { MdForum } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdOutlinePlayLesson } from "react-icons/md";

type LayoutProps = {
  children: ReactNode
} 
function Layout({children}: LayoutProps) {
  const [links, setLinks] = useState<Links[]>([
    {
      name: "Dashboard",
      path: "/instructor/",
      icon: <MdDashboard size={20} />,
      type: "link",
    },
    {
      name: "Courses",
      path: "#",
      icon: <FaBook size={20} />,
      type: "group",
      items: [
        {
          name: "Your Courses",
          path: "/instructor/courses",
          icon: <FaPen size={20} />,
          type: "link",
        },
        {
          name: "Taken Course",
          path: "/taken_courses",
          icon: <MdOutlinePlayLesson size={20} />,
          type: "link",
        },
      ],
    },
    {
      name: "Browse",
      path: "#",
      icon: <MdExplore size={20} />,
      type: "link",
    },
    {
      name: "Forum",
      path: "#",
      icon: <MdForum size={20} />,
      type: "link",
    },
    {
      name: "Settings",
      path: "#",
      icon: <FaGears size={20} />,
      type: "group",
      items: [
        {
          name: "Profile",
          path: "/profile",
          icon: <IoPersonCircle size={20} />,
          type: "link",
        },
        {
          name: "Logout",
          path: "/logout",
          icon: <IoLogOut size={20} />,
          type: "link",
        },
      ],
    },
  ]);
  return (
    <section className="flex">
      <Sidebar links={links} title="Instructor"/>
      <main className="flex flex-col w-full md:w-[calc(100%-180px)] lg:w-[calc(100%-250px)] ml-0 md:ml-[180px] lg:ml-[250px] p-2">
          {children}
      </main>
    </section>
  );
}

export default Layout;
