import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Headphones, Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-elderly-care.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Trusted Elder Care in Kolkata
            </span>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">Compassion</span> | Care |{" "}
              <span className="text-secondary">Commitment</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Raycare ElderPod brings comprehensive healthcare to your loved ones. 
              24×7 medical support, home visits, and personalized care plans for 
              seniors across Kolkata and Nadia.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-cta gap-2 text-base hover:opacity-90">
                <Calendar className="h-5 w-5" />
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base">
                <Headphones className="h-5 w-5" />
                Subscribe to ElderPod
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
              {[
                { value: "10,000+", label: "Elders Cared" },
                { value: "15+", label: "Years Experience" },
                { value: "24×7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/20 md:-left-8 md:-top-8 md:h-32 md:w-32" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl bg-secondary/20 md:-bottom-8 md:-right-8 md:h-28 md:w-28" />
              
              <img
                src={heroImage}
                alt="Compassionate elder care at Raycare - nurse caring for elderly patient"
                className="relative z-10 w-full rounded-2xl shadow-card"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 left-4 z-20 rounded-xl bg-card p-4 shadow-card md:left-8 md:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Download App</p>
                    <p className="text-sm text-muted-foreground">Manage care on the go</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
