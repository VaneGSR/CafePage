export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4 text-primary-foreground">El Mirador</h3>
            <p className="text-background/70 max-w-sm">
              Una experiencia gastronómica en las alturas. Café, pizza a la leña y hamburguesas gourmet con la mejor vista de Tlaquepaque.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4 font-serif text-secondary">Proyecto Académico</h4>
            <ul className="space-y-3 text-background/80">
              <li>Nombre del Alumno: <span className="font-medium text-white">Saavedra Ramirez Vanessa Guadalupe</span></li>
              <li>Materia: <span className="font-medium text-white">Desarrollo de Aplicaciones web en la nube y moviles</span></li>
              <li>Profesor: <span className="font-medium text-white">Gutierrez Cobian Zeus Emanuel</span></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start lg:items-center">
            <h4 className="font-bold text-xl mb-4 font-serif text-secondary w-full text-left lg:text-center">Logo CUCEI</h4>
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center p-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Escudo_UdeG.svg/960px-Escudo_UdeG.svg.png"
                alt="Logo CUCEI - Universidad de Guadalajara"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-white w-full text-left lg:text-center">Calendario 2026A</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Cafetería El Mirador. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-background/60 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-background/60 hover:text-white transition-colors">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
