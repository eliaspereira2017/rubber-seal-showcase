import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMetro from "@/assets/hero-metro.jpg";
import heroEnergy from "@/assets/hero-energy.jpg";
import heroOilGas from "@/assets/hero-oil-gas.jpg";
import heroPulpPaper from "@/assets/hero-pulp-paper.jpg";

const slides = [
  {
    image: heroMetro,
    title: "Setor Metroferroviário",
    description: "Soluções especializadas em vedações para sistemas de transporte de alta performance",
  },
  {
    image: heroEnergy,
    title: "Setor de Energia",
    description: "Componentes de alta resistência para plantas de geração e distribuição de energia",
  },
  {
    image: heroOilGas,
    title: "Óleo e Gás",
    description: "Vedações industriais para ambientes extremos e alta pressão",
  },
  {
    image: heroPulpPaper,
    title: "Papel e Celulose",
    description: "Peças especiais em borracha para processos industriais contínuos",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl text-center text-white animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
                    >
                      Saiba Mais
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Nossos Produtos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
