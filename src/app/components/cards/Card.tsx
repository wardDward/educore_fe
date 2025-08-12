import { CardProps } from "@/app/interface/Card";
import Link from "next/link";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function Card({
  id,
  image,
  title,
  author,
  occupation,
  description,
  lesson_count,
  student_count,
  price,
  ratings,
}: CardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="bg-white rounded-lg  w-full sm:w-[350px] md:w-[300px] lg:w-[300px] h-auto border-gray-200 shadow-lg border-[1px] hover:bg-slate-100 cursor-pointer"
    >
      <img
        src={image}
        alt=""
        className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-t-md"
      />

      <div className="p-2">
        <h3 className="line-clamp-2 text-md font-semibold mb-2 text-gray-800 h-[47px]">
          {title}
        </h3>

        <p className="text-[12px] text-black mb-2">
          {author}
          <span className="text-gray-500"> - {occupation}</span>
        </p>

        <p className="line-clamp-3 text-xs text-gray-600">{description}</p>

        {[student_count, lesson_count].every(
          (val) => val !== null && val !== undefined
        ) && (
          <>
            <div className="flex items-center flex-wrap justify-between my-3">
              <span className="text-gray-600 text-sm">
                Lessons: {lesson_count}
              </span>
              <span className="text-gray-600 text-sm">
                Students: {student_count}
              </span>
            </div>

            <div className="flex items-center flex-wrap justify-between mt-3 mb-5">
              <span className="text-gray-800 text-sm">Price: {price}</span>
              <span className="text-gray-800 text-sm flex items-center">
                Ratings: {ratings === null ? ratings : 0}
                <BsFillStarFill className="text-md ml-1" fill="gold" />
              </span>
            </div>

            <div className="flex justify-center items-center">
              <button className="text-purpleIndigo border-[1px] py-[4px] lg:py-1 px-3 lg:px-2 mx-1 text-xs lg:text-sm hover:text-white hover:bg-purpleIndigo rounded-lg cursor-pointer">
                Add To Cart
              </button>
              <button className="text-purpleIndigo border-[1px] py-[4px] lg:py-1 px-3 lg:px-2 mx-1 text-xs lg:text-sm hover:text-white hover:bg-purpleIndigo rounded-lg cursor-pointer">
                Enroll Now
              </button>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Card;
