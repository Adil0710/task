import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Quotation from "@/components/Quotation";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Quotation/>
      <Offers/>
      <Category/>
    </main>
  );
}
