import { motion } from "framer-motion";
import { Calendar, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "September Health Advisory for Elders",
    excerpt: "Seasonal changes bring new health challenges. Here's how to keep your parents healthy this monsoon season.",
    date: "September 15, 2024",
    category: "Health Tips",
    readTime: "5 min read",
  },
  {
    title: "Managing Diabetes in Old Age",
    excerpt: "A comprehensive guide to diabetes management for seniors, including diet, exercise, and medication tips.",
    date: "September 10, 2024",
    category: "Chronic Care",
    readTime: "8 min read",
  },
  {
    title: "The Importance of Mental Health in Elders",
    excerpt: "Understanding depression and anxiety in senior citizens and how families can provide support.",
    date: "September 5, 2024",
    category: "Mental Health",
    readTime: "6 min read",
  },
  {
    title: "Home Safety Tips for Seniors",
    excerpt: "Simple modifications that can prevent falls and accidents, making homes safer for the elderly.",
    date: "August 28, 2024",
    category: "Safety",
    readTime: "4 min read",
  },
];

const upcomingEvents = [
  {
    title: "Free Health Camp at Dumdum",
    date: "October 5, 2024",
    location: "Raycare Clinic, Dumdum",
    description: "Free blood pressure, sugar, and eye checkup for elders above 60.",
  },
  {
    title: "Durga Puja Health Booth",
    date: "October 10-15, 2024",
    location: "Sreebhumi Sporting Club Pandal",
    description: "Health awareness and first aid services during puja celebrations.",
  },
  {
    title: "Diabetes Awareness Workshop",
    date: "November 14, 2024",
    location: "Online Webinar",
    description: "World Diabetes Day special workshop for patients and caregivers.",
  },
];

const Wellness = () => {
  return (
    <div className="min-h-screen">
      <QuickInfoBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-warm py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                Community & Wellness
              </span>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Health Tips, Events &{" "}
                <span className="text-gradient">Success Stories</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay informed with the latest health advisories, community events, 
                and inspiring stories from the Raycare family.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                  Health Blog
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Latest Articles
                </h2>
              </div>
              <Button variant="outline" className="hidden gap-2 md:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                Events Calendar
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Upcoming Health Events
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-soft"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                      <Calendar className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-gradient-hero p-8 text-center md:p-12"
            >
              <Users className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Share Your Story
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
                Has Raycare made a difference in your family's life? We'd love to hear 
                your story and share it with our community.
              </p>
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Submit Your Story
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wellness;
