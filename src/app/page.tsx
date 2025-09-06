import Image from "next/image";
import TopCourses from "@/app/_components/cards/TopCourses";
export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <section className="bg-purpleIndigo h-screen w-full flex justify-center items-center px-[20px]">
        <div className="flex items-center">
          <div className="landing-text text-center md:text-start flex flex-col w-full md:w-[49%]">
            <p className="text-white text-5xl text">Unlock Your</p>
            <div className="flex items-center text justify-center md:justify-start">
              <a
                href="#"
                className="mr-2 block text-black bg-white px-6 py-1 rounded-full transform rotate-0 md:-rotate-8 my-6 text-[25px] md:text-3xl hover:text-purpleIndigo font-[500]"
              >
                Trading
              </a>{" "}
              Potential
            </div>
            <p className="text-white-5xl text">with Our Best courses.</p>
            <div>
              <p className="text-white text-[13px] mt-[9px] font-[300] w-full md:w-[340px] lg:w-[500px] text-center md:text-start">
                Welcome to LM, the ultimate learing platform designed for
                aspring learners and seasoned investors alike. Our mission is to
                empower you with the knowledge.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center">
              <a href="#" className="reg-link">
                Learner
              </a>
              <a href="#" className="reg-link">
                Instructor
              </a>
            </div>
          </div>
          <div className="w-[49%] hidden md:block">
            <div className="relative w-[340px] h-[400px] lg:h-[500px] lg:w-[450px]">
              <Image
                src="/assets/images/landing_img.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 340px, 450px"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <TopCourses />
      <section className="flex items-center justify-center bg-purpleIndigo py-[40px]">
        <p className="text-white font-[500] italic text-sm md:text-md xl:text-lg text-center">
          "The roots of education are bitter, but the fruit is sweet" -
          Aristotle.
        </p>
      </section>
    </>
  );
}
