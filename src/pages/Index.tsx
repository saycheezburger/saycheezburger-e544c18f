import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Say Cheez Burger | Premium Wagyu Smash Burgers in Irvine, CA</title>
        <meta
          name="description"
          content="Experience the best halal wagyu smash burgers in Irvine, CA. Say Cheez Burger serves premium quality burgers at exclusive pop-up events."
        />
        <meta name="keywords" content="smash burger, wagyu, halal, Irvine, California, pop-up, food truck" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Testimonials />
        <Newsletter />
        <Location />
      </main>
      <Footer />
    </>
  );
};

export default Index;
