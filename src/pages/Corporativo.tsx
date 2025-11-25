import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Corporativo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporativo</h1>
              <p className="text-xl text-primary-foreground/90">
                Conheça nossa história, valores e o compromisso com a excelência em soluções industriais.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Building2, title: "25+ Anos", description: "De experiência no mercado" },
                { icon: Users, title: "200+", description: "Profissionais qualificados" },
                { icon: Award, title: "ISO 9001", description: "Certificação de qualidade" },
                { icon: Target, title: "1000+", description: "Projetos entregues" },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground mb-2">{item.title}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Nossa História</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fundada há mais de 25 anos, nossa empresa se consolidou como referência no fornecimento de vedações e peças especiais em borracha para os setores mais exigentes da indústria brasileira. Nossa trajetória é marcada pela busca constante da excelência técnica e pelo compromisso com a satisfação dos nossos clientes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fornecer soluções técnicas inovadoras em vedações industriais, garantindo qualidade, confiabilidade e suporte especializado para nossos clientes nos setores metroferroviário, energia, óleo e gás, e papel e celulose.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Visão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser reconhecida como a empresa líder em soluções de vedações industriais na América Latina, estabelecendo novos padrões de qualidade e inovação no setor.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Valores</h2>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Excelência técnica em todas as entregas</li>
                  <li>• Compromisso com a qualidade e segurança</li>
                  <li>• Inovação constante em processos e produtos</li>
                  <li>• Integridade e transparência nas relações</li>
                  <li>• Sustentabilidade e responsabilidade ambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporativo;
