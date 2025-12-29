import { motion } from "framer-motion";
import { Globe, Bell, FileText, CreditCard, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Weekly Health Reports",
    description: "Detailed updates on vitals, medications, and doctor observations",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "Instant notifications for any health concerns or emergencies",
  },
  {
    icon: Video,
    title: "Video Consultations",
    description: "Join doctor visits virtually and stay connected",
  },
  {
    icon: CreditCard,
    title: "Cashless Admission",
    description: "Hassle-free hospital admissions at partner hospitals",
  },
];

const NRIConnectPreview = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
              <Globe className="h-4 w-4" />
              For NRI Families
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Caring for Your Parents, While You're Abroad
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Distance shouldn't mean disconnection. Our NRI Family Connect program 
              keeps you informed and involved in your parents' healthcare journey, 
              no matter where in the world you are.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/nri-connect">
              <Button size="lg" className="gap-2 bg-gradient-cta hover:opacity-90">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-hero p-8 md:p-12">
              <div className="space-y-6">
                {/* Mock Dashboard Card */}
                <div className="rounded-xl bg-card/95 p-5 shadow-card backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Parent Dashboard</h4>
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                      All Good
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">120/80</p>
                      <p className="text-xs text-muted-foreground">Blood Pressure</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">98</p>
                      <p className="text-xs text-muted-foreground">SpO2</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">72</p>
                      <p className="text-xs text-muted-foreground">Heart Rate</p>
                    </div>
                  </div>
                </div>

                {/* Mock Notification */}
                <div className="rounded-xl bg-card/95 p-4 shadow-card backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Weekly Report Ready
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your mother's health report for this week is available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NRIConnectPreview;
