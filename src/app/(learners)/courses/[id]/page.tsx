import React from "react";
import ProductData from '@/app/_data/data.json'
import type { Metadata } from 'next'
import CourseProfile from "./_component/CourseProfile";
import { CardProps } from "@/app/interface/Card";


type Pageprops = {
  params: {id: string}
}
export async function generateMetadata({params}: Pageprops):Promise<Metadata>{
  const numericId = parseInt(params.id)
  const product = ProductData.find((product: CardProps) => product.id === numericId)

  return {
    title: product?.title
  }
}

function Home({params}: Pageprops) {
  
  return (
    <CourseProfile id={params.id}/>
  );
}

export default Home;
