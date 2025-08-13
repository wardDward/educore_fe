"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import ProductData from '@/app/_data/data.json'
import { CardProps } from '@/app/interface/Card';
import Link from 'next/link'


type ComponentProps = {
    id: string
}   
function CourseProfile({id}: ComponentProps) {

  const numericId = parseInt(id);
  const [product, setProduct] = useState<CardProps | null>();

  useEffect(() => {
    setProduct(ProductData.find((product: CardProps) => product.id === numericId));
  }, []);
  return (
    <main className="p-[5px] md:p-[50px]">
      <Link
        href="/courses"
        className="flex justify-center items-center py-1  w-[100px] px-[20px] relative text-purpleIndigo hover:bg-purpleIndigo hover:text-white rounded-full"
      >
        <MdOutlineKeyboardDoubleArrowLeft className="shrink-0 h-[18px] w-[18px]" />
        <span className="ml-1 text-sm">Courses</span>
      </Link>
      <div className="mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h3 className="
            text-lg md:text-2xl lg:text-4xl text-center lg:text-start font-bold tracking-wide text-gray-800">
              {product?.title}
            </h3>
          </div>
          <div className="">
            sdasd
          </div>
        </div>
      </div>
    </main>
  );
}

export default CourseProfile