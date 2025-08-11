import { Heart, Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Align to Health</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Connecting healthcare professionals with leading hospitals to create
              a seamless network of medical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="text-white/70 space-y-2">
              <p>Email: info@aligntohealth.com</p>
              <p>Phone: 1-800-HEALTH</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Align to Health. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-white/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for healthcare professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}