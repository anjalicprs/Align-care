import { Heart, Stethoscope } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary transition-colors underline underline-offset-2">About Us</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogTitle>About Us</DialogTitle>
                    <DialogDescription asChild>
                      <div className="bg-white/80 rounded-xl p-6 text-left text-gray-800 shadow-md">
                        <h3 className="text-2xl font-bold mb-2">About Us</h3>
                        <p className="mb-2"><b>Dr Ankit Kumar Modi</b>, MBBS from UCMS, Delhi</p>
                        <p className="mb-2"><b>Regd. Office:</b> 5/29, Jangpura B, New Delhi - 110014</p>
                        <p className="mb-2"><b>Email:</b> info.aligntoconnect@gmail.com</p>
                        <hr className="my-4" />
                        <h4 className="text-lg font-semibold mb-1">Legal Counsel</h4>
                        <p className="mb-1"><b>Umesh K Burnwal</b><br/>
                        Advocate<br/>
                        Standing Counsel, MCD<br/>
                        Sr. Panel Counsel, Govt. of India</p>
                        <p className="mb-1"><b>Contact:</b> +91-9911633057, 9315635350<br/>
                        <b>Email:</b> globaljudexlawfirm@gmail.com</p>
                        <p className="mb-1"><b>Office:</b> C-41, LGF, Jangpura Extn., New Delhi-110014</p>
                        <p className="mb-1"><b>Chamber No. 723:</b> Lawyer’s Chamber Block, Saket Courts Complex, New Delhi-17</p>
                        <p className="mb-1"><b>Chamber No. 499:</b> Lawyer’s Block-II, Delhi High Court, New Delhi-110001</p>
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="text-white/70 space-y-2">
              <p>Email: info.aligntoconnect@gmail.com</p>
              <p>Phone: 87448 25446</p>
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