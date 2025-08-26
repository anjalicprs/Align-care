import { Button } from "@/components/ui/button";
import { Stethoscope, Hospital, User, ArrowRight, Mail } from "lucide-react";

import heroImage from "@/assets/medical-hero.jpg";
import GetInTouchForm from "./GetInTouchForm";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Hero() {
  const handleDoctorRegistration = () => {
    // Placeholder for Google form link
    console.log("Opening doctor registration form...");
    // window.open("DOCTOR_FORM_LINK", "_blank");
  };

  const handleHospitalRegistration = () => {
    // Placeholder for Google form link
    console.log("Opening hospital registration form...");
    // window.open("HOSPITAL_FORM_LINK", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medical professionals collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Stethoscope className="w-12 h-12 text-white/30" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Hospital className="w-16 h-16 text-white/20" />
      </div>
      <div className="absolute top-1/3 right-20 animate-pulse-medical">
        <User className="w-10 h-10 text-white/25" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Align to{" "}
            <span className="bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
              Health
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Where excel pays to excellence
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Connecting healthcare professionals with leading hospitals to create
            a seamless network of medical excellence.
          </p>


          {/* Registration Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-up mb-8">
            <a
              href="https://docs.google.com/forms/d/1k1-vQo-Yqg_iUGsLqiW9uFqojZsGNlvDmYi249sWFRs/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto min-w-[250px]"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full md:w-auto min-w-[250px] flex items-center justify-center"
                asChild
              >
                <span className="flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Register as Doctor
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </a>

            <Button
              variant="accent"
              size="lg"
              onClick={handleHospitalRegistration}
              className="group w-full md:w-auto min-w-[250px]"
            >
              <Hospital className="w-6 h-6 mr-3" />
              Register as Healthcare partner
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Get in Touch Button and Modal */}
          <div className="flex justify-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full md:w-auto min-w-[250px] flex items-center justify-center"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Get in Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 bg-transparent border-0 shadow-none flex justify-center items-center">
                <div className="w-full max-w-md">
                  <div className="sr-only">
                    <span id="get-in-touch-title">Get in Touch</span>
                    <span id="get-in-touch-desc">Contact us using the form below.</span>
                  </div>
                  {/* Accessible title/desc for dialog */}
                  <GetInTouchForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider">Doctors Connected</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider">Hospitals Partnered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}