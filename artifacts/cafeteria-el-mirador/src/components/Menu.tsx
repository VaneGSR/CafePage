import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = {
  pizzas: [
    {
      id: "p1",
      name: "Margarita del Bosque",
      description: "Salsa de tomate artesanal, mozzarella fresca, albahaca y un toque de aceite de oliva.",
      price: "$185 MXN",
      image: "/images/pizza_1.jpg"
    },
    {
      id: "p2",
      name: "La Rústica",
      description: "Queso de cabra, proscuitto, arúgula fresca, higos y reducción de vinagre balsámico.",
      price: "$240 MXN",
      image: "/images/pizza_2.jpg"
    },
    {
      id: "p3",
      name: "Carnes Ahumadas",
      description: "Pepperoni, salami artesanal, salchicha italiana y tocino sobre nuestra base crujiente a la leña.",
      price: "$265 MXN",
      image: "/images/pizza_3.jpg"
    }
  ],
  hamburguesas: [
    {
      id: "h1",
      name: "La Mirador Clásica",
      description: "200g de carne de res premium, queso cheddar fundido, lechuga, tomate y aderezo de la casa en pan brioche.",
      price: "$195 MXN",
      image: "/images/burger_1.jpg"
    },
    {
      id: "h2",
      name: "Tapatía Gourmet",
      description: "Carne de res, queso gouda, cebolla caramelizada, tocino crujiente y mermelada de chile morita.",
      price: "$225 MXN",
      image: "/images/burger_2.jpg"
    },
    {
      id: "h3",
      name: "Portobello Trufado",
      description: "Hongo portobello marinado a la parrilla, queso suizo, espinaca y mayonesa de trufa negra.",
      price: "$180 MXN",
      image: "/images/burger_3.jpg"
    }
  ],
  cafe: [
    {
      id: "c1",
      name: "Latte Atardecer",
      description: "Doble espresso de granos oaxaqueños con leche texturizada y un sutil toque de vainilla y canela.",
      price: "$75 MXN",
      image: "/images/coffee_1.jpg"
    },
    {
      id: "c2",
      name: "Cold Brew Cítrico",
      description: "Café extraído en frío por 24 horas, servido sobre hielo con una rodaja de naranja deshidratada.",
      price: "$85 MXN",
      image: "/images/coffee_2.jpg"
    },
    {
      id: "c3",
      name: "Mocha de la Cabaña",
      description: "Espresso con chocolate semiamargo artesanal, leche vaporizada y cacao en polvo espolvoreado.",
      price: "$90 MXN",
      image: "/images/coffee_3.jpg"
    },
    {
      id: "c4",
      name: "Espresso Doble",
      description: "Extracción perfecta de nuestra mezcla de la casa, notas a caramelo tostado y nuez.",
      price: "$55 MXN",
      image: "/images/coffee_4.jpg"
    }
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30 bg-secondary/5 uppercase tracking-widest">
            Nuestro Menú
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Sabores a la Leña
          </h2>
          <p className="text-lg text-muted-foreground">
            Ingredientes frescos, recetas artesanales y el fuego perfecto. Descubre nuestra selección preparada al momento.
          </p>
        </div>

        <Tabs defaultValue="pizzas" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background border border-border p-1 rounded-full h-auto">
              <TabsTrigger value="pizzas" className="rounded-full px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                Pizzas 🍕
              </TabsTrigger>
              <TabsTrigger value="hamburguesas" className="rounded-full px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                Hamburguesas 🍔
              </TabsTrigger>
              <TabsTrigger value="cafe" className="rounded-full px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                Café ☕
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden group border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 bg-background">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm text-foreground font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        {item.price}
                      </div>
                    </div>
                    <CardHeader className="pb-3 pt-6">
                      <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground line-clamp-3">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
