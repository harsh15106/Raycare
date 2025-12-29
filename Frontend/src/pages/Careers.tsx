import { motion } from "framer-motion";
import { Briefcase, Stethoscope, Users, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const opportunities = [
  {
    icon: Stethoscope,
    title: "For Doctors",
    description: "Join our teleconsult panel and serve elder patients from anywhere.",
    cta: "Apply as Doctor",
    roles: ["General Physician", "Geriatric Specialist", "Cardiologist", "Diabetologist"],
  },
  {
    icon: Users,
    title: "For Healthcare Staff",
    description: "Be part of our dedicated care team serving elders across Kolkata.",
    cta: "View Openings",
    roles: ["Care Manager", "Nurse", "Paramedic", "Health Coordinator"],
  },
  {
    icon: Building,
    title: "For Partners",
    description: "Partner with us as a lab, pharmacy, or hospital collaborator.",
    cta: "Partner With Us",
    roles: ["Diagnostic Labs", "Pharmacies", "Hospitals", "Home Care Services"],
  },
];

const benefits = [
  "Flexible working hours",
  "Competitive compensation",
  "Training & development",
  "Work-life balance",
  "Impact-driven work",
  "Supportive team culture",
];

const Careers = () => {
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
                Careers
              </span>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Join the <span className="text-gradient">Raycare Family</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Be part of a team that's transforming elder care in India. 
                We're looking for passionate individuals who share our commitment to compassion.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {opportunities.map((opp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-8 shadow-soft"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <opp.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{opp.title}</h3>
                  <p className="mb-4 text-muted-foreground">{opp.description}</p>
                  
                  <div className="mb-6 space-y-2">
                    {opp.roles.map((role, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full gap-2">
                    {opp.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <div className="rounded-2xl bg-gradient-hero p-8 md:p-12">
                <div className="text-center">
                  <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
                  <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
                    Why Work With Us?
                  </h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-background/10 p-4 text-primary-foreground"
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Ready to Make a Difference?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Send us your resume at <span className="font-medium text-primary">careers@raycare.in</span> 
                {" "}or call us for more information.
              </p>
              <Button size="lg" className="gap-2 bg-gradient-cta hover:opacity-90">
                Contact HR Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
