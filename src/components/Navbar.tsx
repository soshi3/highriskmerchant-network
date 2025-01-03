import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold text-primary">
              HighRisk merchant.network
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#industries" className="text-gray-600 hover:text-primary">
                Industries
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-primary">
                Solutions
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="default" size="lg">
              Get Started
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};