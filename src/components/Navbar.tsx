import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Corporativo", path: "/corporativo" },
    { name: "Tecnologias", path: "/tecnologias" },
    { name: "Serviços", path: "/servicos" },
    { name: "Compliance", path: "/compliance" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SI</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Soluções Industriais
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/contato">
              <Button className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:text-primary"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
