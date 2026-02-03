import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Instagram, 
  Mail, 
  MessageCircle, 
  Shield, 
  Star, 
  Target, 
  Zap 
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-ivory overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-gold tracking-wider">LIONS IDENTITY</div>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 hidden sm:flex"
          >
            Kontakt
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lion-hero.webp" 
            alt="Majestic Lion" 
            className="w-full h-full object-cover object-center opacity-60 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold via-ivory to-gold animate-fade-in-up drop-shadow-2xl">
            Lions Identity Coaching
          </h1>
          
          <div className="h-1 w-32 bg-gold mx-auto mb-8 rounded-full animate-width-grow" />
          
          <p className="text-xl md:text-3xl mb-6 text-ivory font-light tracking-wide max-w-4xl mx-auto animate-fade-in-up delay-200">
            Für Männer, die keine Maske mehr brauchen, um stark zu sein.
          </p>
          
          <div className="bg-black/40 backdrop-blur-sm border border-gold/30 p-6 rounded-xl max-w-3xl mx-auto mb-12 animate-fade-in-up delay-300 transform hover:scale-105 transition-transform duration-500">
            <p className="text-lg md:text-2xl text-gold-light font-medium leading-relaxed">
              Ich begleite Männer in Lebenskrisen mit körperlichen Schmerzen – <br className="hidden md:block" />
              zurück in ihre Löwenkraft, um mit Klarheit und Mut ihre Einzigartigkeit zu leben.
            </p>
          </div>

          <Button 
            onClick={scrollToContact}
            className="bg-gold hover:bg-warmgold text-black font-bold text-lg px-10 py-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-500"
          >
            Den ersten Schritt machen
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold/70">
          <ChevronDown className="h-10 w-10" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory leading-tight">
                Du funktionierst. <br />
                <span className="text-gold">Aber spürst du dich noch?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nach außen hin ist alles perfekt. Der Job, der Status, die Leistung. Du bist der Fels in der Brandung. 
                Aber innerlich? Da ist diese Leere. Diese Unruhe.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Vielleicht meldet sich dein Körper bereits. Rückenschmerzen, Verspannungen, Schlafstörungen. 
                Signale, die du ignorierst, weil du funktionieren musst.
              </p>
              <div className="pl-6 border-l-2 border-gold space-y-4">
                <p className="text-xl text-ivory italic">
                  "Ein Löwe im Käfig ist immer noch ein Löwe. Aber er hat vergessen, wie man brüllt."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-xl"></div>
              <div className="relative bg-graphite p-8 rounded-lg border border-white/5 shadow-2xl">
                <ul className="space-y-6">
                  {[
                    "Du fühlst dich getrieben und fremdbestimmt",
                    "Körperliche Schmerzen ohne klare medizinische Ursache",
                    "Erfolg fühlt sich leer und bedeutungslos an",
                    "Du trägst eine Maske, um Erwartungen zu erfüllen",
                    "Die Verbindung zu deiner wahren Kraft ist abgerissen"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-black/50 p-2 rounded-full mr-4 border border-gold/30 text-gold">
                        <Target className="h-5 w-5" />
                      </div>
                      <span className="text-lg text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / About Section */}
      <section className="py-24 bg-graphite relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lion-hero.webp')] bg-cover bg-fixed opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">Die Rückkehr des Königs</h2>
            <p className="text-xl text-gray-300">
              Es geht nicht darum, noch mehr zu leisten oder dich zu optimieren. 
              Es geht darum, alles abzulegen, was nicht zu dir gehört.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-gold" />,
                title: "Identität klären",
                desc: "Wer bist du, wenn niemand zuschaut? Wir legen deine wahren Werte und deine Essenz frei."
              },
              {
                icon: <Zap className="h-10 w-10 text-gold" />,
                title: "Schmerz transformieren",
                desc: "Dein Körper ist nicht dein Feind. Er ist der Wegweiser zurück zu deiner Wahrheit."
              },
              {
                icon: <Star className="h-10 w-10 text-gold" />,
                title: "Löwenkraft leben",
                desc: "Führe dein Leben mit natürlicher Autorität, Klarheit und einem offenen Herzen."
              }
            ].map((card, index) => (
              <Card key={index} className="bg-black/40 border-gold/20 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-block p-4 bg-black rounded-full border border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-ivory mb-4">{card.title}</h3>
                  <p className="text-gray-400">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Claudia */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gold/20 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                {/* Placeholder for Claudia's image if available, otherwise using a stylized abstract or keeping it dark */}
                <div className="w-full h-full bg-graphite flex items-center justify-center text-gold/20">
                  <span className="text-6xl font-serif">CV</span>
                </div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-serif font-bold text-gold">Claudia Veit</h3>
                  <p className="text-ivory">Lions Identity Coach</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif font-bold text-ivory">
                Ich sehe den Löwen in dir, <br />
                <span className="text-gold">auch wenn du ihn gerade nicht spürst.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Meine Arbeit ist nicht für jeden. Sie ist für Männer, die bereit sind, tief zu graben. 
                Die keine Lust mehr auf Oberflächlichkeit haben.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Als Expertin für Identität und körperorientierte Transformation helfe ich dir, 
                die Blockaden zu lösen, die dich klein halten. Nicht durch Reden allein, sondern durch Erleben.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={scrollToContact}
                  variant="link" 
                  className="text-gold p-0 text-lg hover:text-white transition-colors"
                >
                  Lerne mich kennen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-graphite to-black relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-8">Bereit für deine Transformation?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kein Verkaufsgespräch. Kein Druck. Ein echtes Gespräch darüber, wo du stehst und wo du hinwillst.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
            <a 
              href="https://wa.me/4917621296355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <div className="bg-black/50 border border-white/10 p-8 rounded-xl hover:border-gold/50 transition-all duration-300 hover:bg-black/80 h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-[#25D366]/20 p-4 rounded-full text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="text-gray-400">Schreib mir direkt</p>
                <span className="text-gold group-hover:underline">Nachricht senden</span>
              </div>
            </a>

            <a 
              href="mailto:claudia.veit82@gmail.com" 
              className="flex-1 group"
            >
              <div className="bg-black/50 border border-white/10 p-8 rounded-xl hover:border-gold/50 transition-all duration-300 hover:bg-black/80 h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-white/20 p-4 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">E-Mail</h3>
                <p className="text-gray-400">Für ausführliche Anfragen</p>
                <span className="text-gold group-hover:underline">E-Mail schreiben</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/lionsidentity_claudia.veit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <div className="bg-black/50 border border-white/10 p-8 rounded-xl hover:border-gold/50 transition-all duration-300 hover:bg-black/80 h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-[#E1306C]/20 p-4 rounded-full text-[#E1306C] group-hover:scale-110 transition-transform">
                  <Instagram className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Instagram</h3>
                <p className="text-gray-400">Folge meiner Arbeit</p>
                <span className="text-gold group-hover:underline">Profil besuchen</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-serif font-bold text-gold mb-6 tracking-wider">LIONS IDENTITY</div>
          <p className="text-gray-500 mb-8">
            © {new Date().getFullYear()} Lions Identity Coaching by Claudia Veit. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-gold transition-colors">Impressum</a>
            <a href="#" className="hover:text-gold transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
