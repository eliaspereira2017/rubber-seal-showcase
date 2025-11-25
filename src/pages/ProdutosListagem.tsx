import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ListOrdered } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProdutosListagem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Listagem de Produtos</h1>
              <p className="text-xl text-primary-foreground/90">
                Consulte e gerencie o catálogo de produtos.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="hover:shadow-elegant">
              <CardContent className="p-6 flex items-center gap-4">
                <ListOrdered className="w-8 h-8 text-primary" />
                <p className="text-muted-foreground">
                  Esta é uma página placeholder. Implemente aqui a tabela de listagem com filtros e ações.
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

export default ProdutosListagem;

