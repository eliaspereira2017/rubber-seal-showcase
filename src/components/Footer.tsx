import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">SI</span>
              </div>
              <span className="text-lg font-bold">Soluções Industriais</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Fornecendo soluções especializadas em vedações e peças em borracha para os setores mais exigentes da indústria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Corporativo", path: "/corporativo" },
                { name: "Tecnologias", path: "/tecnologias" },
                { name: "Serviços", path: "/servicos" },
                { name: "Compliance", path: "/compliance" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-bold text-lg mb-4">Setores</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Metroferroviário</li>
              <li>Energia</li>
              <li>Óleo e Gás</li>
              <li>Papel e Celulose</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">contato@solucoesindustriais.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Soluções Industriais. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link to="/privacidade" className="hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-accent transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
