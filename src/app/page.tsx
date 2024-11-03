import BlogsAndArticles from "@/components/BlogsAndArticles";
import BookService from "@/components/BookService";
import Brands from "@/components/Brand";
import Category from "@/components/Category";
import Client from "@/components/Client";
import CustomServices from "@/components/CustomServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import PerformanceParts from "@/components/PerformanceParts";
import PremiumParts from "@/components/PremiumParts";
import Quotation from "@/components/Quotation";
import Robot from "@/components/Robot";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Quotation/>
      <Offers/>
      <Category/>
      <PremiumParts/>
      <PerformanceParts/>
      <Brands/>
      <CustomServices/>
      <BookService/>
      <BlogsAndArticles/>
      <Client/>
      <Footer/>
      <Robot/>
    </main>
  );
}
