import { CheckCircle } from "lucide-react";
import productsSeals from "@/assets/products-seals.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Excelência em Soluções Industriais
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos especializados no desenvolvimento e fornecimento de vedações e peças especiais em borracha para os segmentos industriais mais exigentes do mercado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa expertise técnica e compromisso com a qualidade garantem soluções personalizadas que atendem aos mais altos padrões de performance e durabilidade.
            </p>
            
            <div className="space-y-4">
              {[
                "Engenharia de precisão em vedações industriais",
                "Materiais de alta qualidade e durabilidade",
                "Soluções customizadas para cada aplicação",
                "Suporte técnico especializado",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={productsSeals}
                alt="Vedações industriais de alta qualidade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-hero text-primary-foreground p-8 rounded-xl shadow-elegant max-w-xs">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm">Anos de experiência em soluções industriais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
