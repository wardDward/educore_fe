import React from "react";
import { IoIosSearch } from "react-icons/io";
import ProductData from '@/app/_data/data.json';
import Card from '@/app/_components/cards/Card';
import SelectForm from "../_components/forms/SelectForm";

function Home() {
  return (
    <section>
      <div className="w-full px-4 md:px-6 py-3">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h3 className="text-lg text-gray-700 shrink-0">Browse Courses</h3>
          <form className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <div className="relative w-full lg:w-[250px]">
                <IoIosSearch className="h-6 w-6 text-gray-600 absolute left-2 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  className="border border-gray-400 py-1 pl-10 pr-3 rounded-md w-full text-sm"
                  placeholder="Search"
                />
              </div>
              <SelectForm />
            </div>
          </form>
        </div>
        <hr className="my-5 bg-gray-400" />
        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4 mt-[20px] place-items-center">
          {ProductData.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              author={product.author}
              occupation={product.occupation}
              description={product.description}
              lesson_count={product.lesson_count}
              student_count={product.student_count}
              price={product.price}
              ratings={product.ratings}
            />
          ))}
        </main>
      </div>
    </section>
  );
}

export default Home;
