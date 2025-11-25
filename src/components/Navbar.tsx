import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X, Package2, ListOrdered, Tags, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { hasPermission, visibleByPermission } from "@/lib/permissions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProdutosOpen, setIsProdutosOpen] = useState(false);

  const navItems = [
    { name: "Corporativo", path: "/corporativo" },
    { name: "Tecnologias", path: "/tecnologias" },
    { name: "Serviços", path: "/servicos" },
    { name: "Compliance", path: "/compliance" },
    { name: "Contato", path: "/contato" },
  ];

  const produtosSubItems = visibleByPermission([
    { name: "Cadastro de produtos", path: "/produtos/cadastro", icon: Package2, permission: "products.create" },
    { name: "Listagem de produtos", path: "/produtos/listagem", icon: ListOrdered, permission: "products.read" },
    { name: "Categorias de produtos", path: "/produtos/categorias", icon: Tags, permission: "products.categories" },
    { name: "Relatórios de estoque", path: "/produtos/relatorios-estoque", icon: BarChart3, permission: "inventory.reports" },
  ]);
  const location = useLocation();
  const isProdutosActive = produtosSubItems.some((s) => location.pathname.startsWith(s.path));

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
              <NavLink
                key={item.path}
                to={item.path}
                className="px-2"
                activeClassName="[&>button]:text-primary"
              >
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {item.name}
                </Button>
              </NavLink>
            ))}

            {produtosSubItems.length > 0 && (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger data-active={isProdutosActive} aria-label="Produtos">
                      <span className="flex items-center gap-2">
                        <Package2 className="w-4 h-4" />
                        Produtos
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-2 p-3 w-[360px] sm:w-[480px] grid-cols-1 sm:grid-cols-2">
                        {produtosSubItems.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className="group"
                            activeClassName="[&>a]:bg-accent [&>a]:text-accent-foreground"
                          >
                            <NavigationMenuLink className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none">
                              {sub.icon && <sub.icon className="w-4 h-4" />}
                              <span>{sub.name}</span>
                            </NavigationMenuLink>
                          </NavLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}

            <Link to="/contato">
              <Button className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground">
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
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                  activeClassName="[&>button]:text-primary"
                >
                  <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">
                    {item.name}
                  </Button>
                </NavLink>
              ))}

              {produtosSubItems.length > 0 && (
                <div className="border-t border-border pt-2">
                  <button
                    className="w-full flex items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsProdutosOpen((prev) => !prev)}
                    aria-expanded={isProdutosOpen}
                    aria-controls="submenu-produtos"
                  >
                    <span className="flex items-center gap-2"><Package2 className="w-4 h-4" />Produtos</span>
                    <span className="text-xs text-muted-foreground">submenu</span>
                  </button>
                  {isProdutosOpen && (
                  <div id="submenu-produtos" className="mt-1 space-y-1">
                    {produtosSubItems.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block"
                        activeClassName="[&>button]:bg-accent [&>button]:text-accent-foreground"
                      >
                        <Button variant="ghost" className="w-full justify-start">
                          {sub.icon && <sub.icon className="w-4 h-4 mr-2" />}
                          {sub.name}
                        </Button>
                      </NavLink>
                    ))}
                  </div>
                  )}
                </div>
              )}

              <Link to="/contato" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Fale Conosco</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
