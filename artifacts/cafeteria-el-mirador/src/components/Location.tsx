import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative wood grain pattern/texture placeholder */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2A4B3C 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Visítanos en las Alturas
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Escapa del ruido de la ciudad sin salir de ella. Nuestra cabaña está ubicada en la parte más alta de El Tapatío, ofreciendo un refugio acogedor con vistas incomparables.
              </p>
            </div>

            <Card className="border-border bg-card shadow-lg shadow-black/5">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 font-serif">Dirección</h3>
                    <p className="text-muted-foreground">
                      Constitución de 1857 3876,<br />
                      El Tapatío, Tlaquepaque, Jalisco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 font-serif">Horario</h3>
                    <p className="text-muted-foreground">
                      Martes a Domingo: 5:00 PM - 11:30 PM<br />
                      Lunes: Cerrado
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full text-accent-foreground shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 font-serif">Teléfono</h3>
                    <p className="text-muted-foreground">
                      +52 33 1234 5678
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 group">
              <a href="https://maps.app.goo.gl/YTx2Ch2yn4gQWkF18" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Abrir en Google Maps
              </a>
            </Button>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-border relative group">
            <iframe 
              src="https://www.google.com/maps?q=Constitución%20de%201857%203876,%20El%20Tapatío,%20Tlaquepaque,%20Jalisco&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Cafetería El Mirador"
              className="grayscale-[20%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
