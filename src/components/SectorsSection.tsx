import { Train, Zap, Droplet, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sectors = [
  {
    icon: Train,
    title: "Metroferroviário",
    description: "Vedações de alta performance para sistemas de transporte de massa, garantindo segurança e durabilidade.",
  },
  {
    icon: Zap,
    title: "Energia",
    description: "Componentes especializados para geração e distribuição de energia, resistentes a altas temperaturas.",
  },
  {
    icon: Droplet,
    title: "Óleo e Gás",
    description: "Soluções robustas para ambientes extremos, alta pressão e exposição a produtos químicos agressivos.",
  },
  {
    icon: FileText,
    title: "Papel e Celulose",
    description: "Peças especiais para processos contínuos, com resistência a umidade e produtos químicos.",
  },
];

const SectorsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Setores de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise em soluções industriais para os segmentos mais exigentes do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <sector.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
