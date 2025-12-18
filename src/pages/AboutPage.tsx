import { Helmet } from "react-helmet-async";
import { Heart, Users, Award, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import heroBurger from "@/assets/hero-burger.jpg";

const stats = [
  { number: "88+", label: "5-Star Reviews" },
  { number: "1000+", label: "Burgers Served" },
  { number: "100%", label: "Wagyu Beef" },
  { number: "2024", label: "Est." },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every burger we make is crafted with love and dedication to the perfect smash.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise. Premium wagyu, fresh ingredients, halal certified.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building more than a brand. We're creating a burger-loving family.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We aim to be the best smash burger you've ever had. Every. Single. Time.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Say Cheez Burger - Our Story</title>
        <meta name="description" content="Learn about Say Cheez Burger's journey to create the perfect wagyu smash burger in Irvine, CA. Our passion, quality, and commitment to excellence." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-pattern relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Story</span>
                <h1 className="font-display text-5xl md:text-7xl gradient-text mt-2 mb-6">
                  ABOUT US
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Say Cheez Burger started with a simple mission: to bring the best smash burgers 
                  to Irvine, California. Using only premium wagyu beef and the freshest ingredients, 
                  we've built a following of burger lovers who appreciate quality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What began as a passion project has grown into a beloved pop-up experience. 
                  Every burger is smashed to perfection, topped with caramelized grilled onions, 
                  melty American cheese, and our signature house sauce. And yes, everything is 
                  100% halal certified.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
                <img
                  src={heroBurger}
                  alt="Say Cheez Burger"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-display text-5xl md:text-6xl text-primary text-glow block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-sm uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">What Drives Us</span>
              <h2 className="font-display text-5xl md:text-6xl text-primary text-glow mt-2 mb-4">
                OUR VALUES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Smash Technique */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">The Secret</span>
              <h2 className="font-display text-5xl md:text-6xl gradient-text mt-2 mb-8">
                THE PERFECT SMASH
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our technique is simple but precise. Premium wagyu beef balls are smashed hard 
                onto a screaming hot griddle, creating that incredible crispy crust we're famous for. 
                The edges get perfectly caramelized while the center stays juicy. Add our grilled 
                onions, melty cheese, and signature sauce, and you've got burger perfection.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <span className="font-display text-4xl text-primary">01</span>
                  <h4 className="font-display text-xl text-foreground mt-2 mb-2">THE BALL</h4>
                  <p className="text-muted-foreground text-sm">Premium wagyu beef, loosely packed for maximum juiciness</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <span className="font-display text-4xl text-primary">02</span>
                  <h4 className="font-display text-xl text-foreground mt-2 mb-2">THE SMASH</h4>
                  <p className="text-muted-foreground text-sm">Hard smash on a hot griddle creates the perfect crust</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <span className="font-display text-4xl text-primary">03</span>
                  <h4 className="font-display text-xl text-foreground mt-2 mb-2">THE BUILD</h4>
                  <p className="text-muted-foreground text-sm">Grilled onions, American cheese, house sauce perfection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
