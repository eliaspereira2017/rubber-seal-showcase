import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileCheck, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance</h1>
              <p className="text-xl text-primary-foreground/90">
                Comprometimento com as mais altas normas de qualidade, segurança e responsabilidade empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Certificações e Normas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mantemos certificações atualizadas e seguimos rigorosamente as normas nacionais e internacionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Shield,
                  title: "ISO 9001:2015",
                  description: "Sistema de Gestão da Qualidade certificado",
                },
                {
                  icon: FileCheck,
                  title: "ISO 14001",
                  description: "Gestão Ambiental e Sustentabilidade",
                },
                {
                  icon: Award,
                  title: "ISO 45001",
                  description: "Segurança e Saúde Ocupacional",
                },
                {
                  icon: BookOpen,
                  title: "Normas Técnicas",
                  description: "ABNT, ASTM e normas internacionais",
                },
              ].map((cert, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Política de Qualidade</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa política de qualidade estabelece diretrizes claras para garantir que todos os produtos e serviços atendam aos mais altos padrões de excelência. Realizamos auditorias internas regulares e investimos continuamente em treinamento e capacitação de nossa equipe.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Responsabilidade Ambiental</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estamos comprometidos com práticas sustentáveis em todos os aspectos de nossa operação. Implementamos programas de redução de resíduos, eficiência energética e uso responsável de recursos naturais. Nossos processos são constantemente revisados para minimizar o impacto ambiental.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Segurança e Saúde Ocupacional</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A segurança de nossos colaboradores é prioridade máxima. Mantemos programas abrangentes de prevenção de acidentes, treinamentos regulares e equipamentos de proteção individual de alta qualidade. Nosso índice de acidentes está entre os mais baixos do setor.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Código de Conduta</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Nosso código de conduta estabelece princípios éticos que orientam todas as nossas relações comerciais:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Integridade e transparência em todas as transações</li>
                  <li>• Respeito aos direitos humanos e trabalhistas</li>
                  <li>• Combate à corrupção e práticas anticompetitivas</li>
                  <li>• Proteção de dados e informações confidenciais</li>
                  <li>• Relacionamento ético com fornecedores e parceiros</li>
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

export default Compliance;
