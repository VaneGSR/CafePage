import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-view.jpg"
          alt="Vista panorámica desde la cafetería al atardecer"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white flex flex-col items-center pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          TLAQUEPAQUE, JALISCO
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          Cafetería El Mirador
        </h1>
        
        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 text-white/90 drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Café de especialidad, pizzas a la leña y hamburguesas gourmet con la mejor vista de la ciudad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20">
            <a href="#menu">Ver Menú</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
            <a href="#contacto">Reservar</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#menu" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
