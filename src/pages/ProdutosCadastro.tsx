import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProdutosCadastro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cadastro de Produtos</h1>
              <p className="text-xl text-primary-foreground/90">
                Registre novos produtos com informações completas e precisas.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="hover:shadow-elegant">
              <CardContent className="p-6 flex items-center gap-4">
                <Package2 className="w-8 h-8 text-primary" />
                <p className="text-muted-foreground">
                  Esta é uma página placeholder. Implemente aqui o formulário de cadastro conforme requisitos do sistema.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProdutosCadastro;

