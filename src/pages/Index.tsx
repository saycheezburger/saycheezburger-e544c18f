import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Say Cheez Burger | 100% Wagyu Halal Smash Burgers in Irvine, CA</title>
        <meta 
          name="description" 
          content="Say Cheez Burger - Premium 100% Wagyu halal smash burgers in Irvine, CA. Pop-up experience featuring our famous Double Smile burgers. 4.8 stars on Yelp!" 
        />
        <meta name="keywords" content="smash burger, wagyu burger, halal burger, Irvine, California, food popup, Say Cheez" />
        <link rel="canonical" href="https://saycheezburgers.com" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Hero />
        <Menu />
        <Location />
        <Footer />
      </main>
    </>
  );
};

export default Index;
