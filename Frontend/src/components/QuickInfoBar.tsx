import { Phone, MessageCircle, MapPin, Download, Clock } from "lucide-react";
import { motion } from "framer-motion";

const QuickInfoBar = () => {
  const items = [
    { icon: Clock, label: "24×7 Helpline", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: "https://wa.me/919876543210" },
    { icon: MapPin, label: "Clinic", value: "Dumdum & Nadia", href: "#contact" },
    { icon: Download, label: "App", value: "Download", href: "#" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary/5 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 py-2 md:justify-between md:gap-8">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <item.icon className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">{item.label}:</span>
              <span className="font-medium text-foreground">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickInfoBar;
