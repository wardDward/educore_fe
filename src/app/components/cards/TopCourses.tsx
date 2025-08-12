import Card from '@/app/components/cards/Card'
import ProductData from "@/app/data/data.json";
function TopCourses() {
  return (
    <div className="p-[20px] md:p-[20px] flex justify-center items-center">
      <div>
        <h3 className="text-center md:text-start text-2xl text-gray-800 mb-5">
          Top courses
        </h3>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
}

export default TopCourses;
