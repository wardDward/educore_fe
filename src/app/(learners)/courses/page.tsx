import Card from "@/app/_components/cards/Card";
import React from "react";
import ProductData from "@/app/_data/data.json"
function Home() {
  return (
    <div className="p-2">
      <div>
        <h3 className="text-gray-700 text-lg text-center md:text-start">
          Your Courses
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4 mt-[20px] place-items-center">
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
      </div>
    </div>
  );
}

export default Home;
