"use client"
import React, { ReactNode, useState } from 'react'
import Sidebar from '../_components/Sidebar';
import Navbar from './_components/Navbar';
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { MdForum } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { Links } from '../interface/Links';

interface LayoutProps {
    children: ReactNode
}
function Layout({ children }: LayoutProps) {
    const [links, setLinks] = useState<Links[]>([
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard size={20} />,
            type: "link",
        },
        {
            name: "Courses",
            path: "/courses",
            icon: <FaBook size={20} />,
            type: "link",
        },
        {
            name: "Browse",
            path: "/browses",
            icon: <MdExplore size={20} />,
            type: "link",
        },
        {
            name: "Forum",
            path: "/forums",
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
    const [toggle, setToggle] = useState<boolean>(true)

    const sendData = () => {
        setToggle((prev) => !prev)
        console.log(toggle)
   }
    return (
        <section className="flex">
            <Sidebar links={links} title={"Learners"} toggle={toggle} onToggle={sendData} />
            <div className="flex flex-col w-full md:w-[calc(100%-180px)] lg:w-[calc(100%-250px)] ml-0 md:ml-[180px] lg:ml-[250px]">
                <Navbar/>
                {children}
            </div>
        </section>
    )
}

export default Layout