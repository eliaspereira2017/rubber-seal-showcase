import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cog, Layers, FlaskConical, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Tecnologias = () => {
  const technologies = [
    {
      icon: Cog,
      title: "Engenharia de Precisão",
      description: "Desenvolvimento de peças sob medida com tolerâncias precisas para aplicações críticas.",
    },
    {
      icon: Layers,
      title: "Materiais Avançados",
      description: "Seleção de compostos de borracha especiais para cada tipo de aplicação industrial.",
    },
    {
      icon: FlaskConical,
      title: "Testes Rigorosos",
      description: "Laboratório próprio para testes de resistência, durabilidade e conformidade.",
    },
    {
      icon: Settings,
      title: "Fabricação Moderna",
      description: "Equipamentos de última geração para garantir a qualidade em cada produto.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tecnologias</h1>
              <p className="text-xl text-primary-foreground/90">
                Inovação e expertise técnica em cada solução desenvolvida para atender às necessidades mais exigentes do mercado industrial.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {technologies.map((tech, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <tech.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Processo de Desenvolvimento</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nosso processo de desenvolvimento combina expertise técnica, tecnologia de ponta e rigoroso controle de qualidade para garantir soluções que atendem aos mais altos padrões industriais.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">01</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Análise Técnica</h3>
                    <p className="text-muted-foreground">
                      Avaliação detalhada das condições de operação e requisitos específicos do cliente.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">02</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Desenvolvimento</h3>
                    <p className="text-muted-foreground">
                      Criação de soluções customizadas utilizando os melhores materiais e técnicas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">03</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Validação</h3>
                    <p className="text-muted-foreground">
                      Testes rigorosos em laboratório e em campo para garantir performance ideal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tecnologias;
