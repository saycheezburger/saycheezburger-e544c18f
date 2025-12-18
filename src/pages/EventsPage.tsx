import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Clock, Bell, Instagram, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const upcomingEvents = [
  {
    title: "Grand Re-Opening Pop-Up",
    date: "Coming Soon",
    time: "5:00 PM - Until Sellout",
    location: "1 Truman Street, Irvine, CA",
    description: "We're back! Join us for our grand re-opening with a special limited menu and exclusive giveaways.",
    featured: true,
  },
];

const pastEvents = [
  {
    title: "Summer Smash Fest",
    date: "August 2024",
    location: "Irvine, CA",
    description: "An incredible turnout with over 200 burgers sold in 3 hours!",
  },
  {
    title: "Launch Day",
    date: "June 2024",
    location: "Irvine, CA",
    description: "Our very first pop-up. The beginning of something special.",
  },
];

const EventsPage = () => {
  return (
    <>
      <Helmet>
        <title>Events & Pop-Ups | Say Cheez Burger</title>
        <meta name="description" content="Find upcoming Say Cheez Burger pop-up events in Irvine, CA. Don't miss our next smash burger experience!" />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-pattern relative">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Pop-Up Events</span>
            <h1 className="font-display text-6xl md:text-8xl gradient-text mt-2 mb-4">EVENTS</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We operate as a pop-up. Follow us on Instagram to never miss an event!
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">
              UPCOMING EVENTS
            </h2>

            <div className="max-w-3xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl animate-fade-in ${
                    event.featured ? "bg-card neon-border" : "bg-card border border-border"
                  }`}
                >
                  {event.featured && (
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
                      ✨ FEATURED EVENT
                    </span>
                  )}
                  <h3 className="font-display text-3xl md:text-4xl text-primary mb-4">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://instagram.com/saycheezburger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-lg rounded-lg hover:bg-gold-light transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                      FOLLOW FOR UPDATES
                    </a>
                    <a
                      href="https://maps.google.com/?q=1+Truman+Street+Irvine+CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-display text-lg rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                      <MapPin className="w-5 h-5" />
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notification CTA */}
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
                <Bell className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm">NEVER MISS AN EVENT</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-primary text-glow mb-4">
                GET NOTIFIED
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We sell out fast! Turn on Instagram notifications and subscribe to our newsletter 
                to be the first to know about upcoming pop-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/saycheezburger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border rounded-lg text-foreground font-display text-xl hover:border-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  @saycheezburger
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-primary text-center mb-12">
              PAST EVENTS
            </h2>

            <div className="max-w-3xl mx-auto grid gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-1">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-display text-lg">{event.date}</span>
                      <p className="text-muted-foreground text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Events CTA */}
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center p-8 bg-card rounded-xl border border-primary/30">
              <h2 className="font-display text-4xl text-primary mb-4">BOOK US FOR YOUR EVENT</h2>
              <p className="text-muted-foreground mb-6">
                Want Say Cheez Burger at your private party, corporate event, or special occasion? 
                We'd love to smash some burgers for you and your guests!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-xl rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold"
              >
                <ExternalLink className="w-5 h-5" />
                INQUIRE NOW
              </a>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default EventsPage;
