import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
              <p className="text-xl text-primary-foreground/90">
                Nossa equipe está pronta para atender suas necessidades e fornecer soluções personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Envie sua Mensagem</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <Input placeholder="Seu nome" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input type="tel" placeholder="(11) 91234-5678" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input placeholder="Nome da empresa" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      placeholder="Descreva sua necessidade ou dúvida"
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Informações de Contato</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Telefone</h3>
                        <p className="text-muted-foreground">+55 (11) 1234-5678</p>
                        <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">contato@solucoesindustriais.com.br</p>
                        <p className="text-muted-foreground">vendas@solucoesindustriais.com.br</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Industrial, 1000<br />
                          Distrito Industrial<br />
                          São Paulo, SP - 01234-567<br />
                          Brasil
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h3 className="font-bold text-foreground mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo e Feriados: Fechado</p>
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

export default Contato;
