import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Daughter, NRI (USA)",
    content: "Being 12,000 km away, I was always worried about my parents. Raycare's weekly updates and emergency support give me peace of mind. They truly treat my parents like family.",
    rating: 5,
  },
  {
    name: "Amit Banerjee",
    role: "Son, Kolkata",
    content: "Dr. Ray and his team have been looking after my mother for 3 years now. The home visits and 24×7 support are invaluable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sunita Das",
    role: "Patient, Age 72",
    content: "At my age, going to hospitals is difficult. Raycare brings everything to my home - doctor visits, lab tests, even medicines. They are very caring and patient.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Families
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from families who have experienced the Raycare difference
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-card p-6 shadow-soft md:p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
