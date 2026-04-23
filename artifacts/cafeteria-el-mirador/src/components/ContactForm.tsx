import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos pronto para confirmar tu reserva o duda.",
        className: "bg-primary text-primary-foreground border-primary",
      });
      form.reset();
    }, 800);
  }

  return (
    <section id="contacto" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[600px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/interior.jpg" 
              alt="Interior de la cabaña" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>

          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Reserva tu Mesa
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              ¿Quieres asegurar el mejor lugar para ver el atardecer? ¿Tienes un evento especial? Escríbenos y prepararemos todo para tu visita.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" className="py-6 rounded-xl bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="correo@ejemplo.com" className="py-6 rounded-xl bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Dinos para cuándo es tu reserva o qué dudas tienes..." 
                          className="min-h-[150px] resize-none rounded-xl bg-background/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-lg group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar mensaje
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
