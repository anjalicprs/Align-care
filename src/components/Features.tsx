import { Card } from "@/components/ui/card";
import { 
  Network, 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Network,
      title: "Seamless Connection",
      description: "Connect doctors and hospitals through our advanced networking platform",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant platform ensuring patient data security and privacy",
      color: "from-accent to-accent-light"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications and updates for all your medical connections",
      color: "from-success to-primary"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Build relationships with verified healthcare professionals",
      color: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our streamlined registration process",
      color: "from-accent to-success"
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Improve patient outcomes through better healthcare coordination",
      color: "from-success to-accent"
    }
  ];

  const benefits = [
    "Verified healthcare professionals",
    "Direct hospital partnerships",
    "Streamlined credentialing process",
    "24/7 technical support",
    "Mobile-responsive platform",
    "Advanced search and filtering"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Align to Health
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bridge the gap between healthcare professionals and medical institutions,
            creating a unified ecosystem for better patient care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card animate-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Everything You Need in One Platform
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                <p className="mb-6 opacity-90">
                  Join thousands of healthcare professionals already using our platform
                  to improve patient care and streamline operations.
                </p>
                <div className="flex items-center text-white/80 group cursor-pointer">
                  <span className="mr-2">Learn more about our process</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}