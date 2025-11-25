import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Package, Headphones, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Servicos = () => {
  const services = [
    {
      icon: Wrench,
      title: "Desenvolvimento Customizado",
      description: "Criação de vedações e peças especiais sob medida para necessidades específicas.",
    },
    {
      icon: Package,
      title: "Fornecimento Regular",
      description: "Programas de fornecimento contínuo com gestão de estoque e entregas programadas.",
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Equipe especializada disponível para consultoria e suporte técnico especializado.",
    },
    {
      icon: FileCheck,
      title: "Consultoria",
      description: "Análise de aplicações e recomendação de soluções otimizadas para cada caso.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços</h1>
              <p className="text-xl text-primary-foreground/90">
                Soluções completas em vedações industriais, do desenvolvimento à entrega, com suporte técnico especializado.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nossos Diferenciais</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada cliente recebe atenção dedicada de nossa equipe técnica, desde a fase de especificação até o suporte pós-venda.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Prazos Competitivos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Estrutura ágil e eficiente para atender demandas urgentes sem comprometer a qualidade dos produtos.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Garantia de Qualidade</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Todos os produtos passam por rigorosos testes de qualidade e são certificados conforme normas internacionais.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Suporte Contínuo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Acompanhamento técnico durante todo o ciclo de vida do produto, incluindo manutenção e otimização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
