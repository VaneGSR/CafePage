import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
