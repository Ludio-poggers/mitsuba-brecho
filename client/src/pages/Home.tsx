import { Button } from "@/components/ui/button";
import { Heart, MapPin, ShoppingBag, Leaf, Users, Star } from "lucide-react";
import { useState } from "react";
import ProductCatalog from "@/components/ProductCatalog";

/**
 * Mitsuba Landing Page
 * Design: Alternativa Urbana Curada
 * Colors: Roxo escuro (#4A1A5C) + Amarelo neon (#FFFF00)
 * Typography: Poppins (bold titles) + Inter (body)
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/mitsuba-logo-real_7db1be4f.png"
              alt="Mitsuba Logo"
              className="h-12 w-12"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#diferencial" className="text-sm hover:text-accent transition-colors">
              Diferencial
            </a>
            <a href="#contato" className="text-sm hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
          <Button className="btn-primary">Visitar Loja</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/manus-storage/mitsuba-hero-bg_c7b7d81a.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="badge-capsule mb-4">Bem-vindo</div>
                <h1 className="heading-display text-accent leading-tight">
                  Garimpe sua identidade
                </h1>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-lg">
                Moda seminova com qualidade garantida. Sustentabilidade que faz sentido. Sua história, nosso cuidado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary text-lg px-8 py-4">
                  Explorar Coleção
                </Button>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/manus-storage/mitsuba-logo-real_7db1be4f.png"
                alt="Mascote Mitsuba"
                className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl animate-bounce"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Para Quem é o Mitsuba? */}
      <section id="sobre" className="section-dark">
        <div className="container">
          <div className="mb-12">
            <div className="badge-capsule mb-4">Público</div>
            <h2 className="heading-display text-accent mb-6">Para quem é o Mitsuba?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90">
                Nosso público é jovem e adulto, predominantemente das classes C e D, que valorizam a sustentabilidade e buscam moda com personalidade sem gastar muito.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-accent mb-1">Público Jovem</h4>
                    <p className="text-sm text-foreground/80">18 a 35 anos, conectados, criativos e autênticos</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-accent mb-1">Conscientes</h4>
                    <p className="text-sm text-foreground/80">Que se importam com sustentabilidade e economia circular</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-accent mb-1">Buscadores de Estilo</h4>
                    <p className="text-sm text-foreground/80">Que querem se expressar através da moda de forma acessível</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/mitsuba-community_34a9db87.png"
                alt="Comunidade Mitsuba"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Nosso Diferencial */}
      <section id="diferencial" className="section-dark bg-secondary/10">
        <div className="container">
          <div className="mb-12">
            <div className="badge-capsule mb-4">Diferencial</div>
            <h2 className="heading-display text-accent mb-6">O que nos torna únicos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingBag,
                title: "Curadoria de Qualidade",
                description: "Cada peça é selecionada e inspecionada com rigor para garantir qualidade e estilo.",
              },
              {
                icon: Leaf,
                title: "Economia Circular",
                description: "Promovemos sustentabilidade através da moda seminova, reduzindo desperdício.",
              },
              {
                icon: Heart,
                title: "Preços Acessíveis",
                description: "Moda de qualidade com preços justos para o público jovem de Joinville.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="section-card"
                  onMouseEnter={() => setHoveredCard(`card-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catálogo de Produtos Streetwear */}
      <ProductCatalog />

      {/* Seção: Produtos e Serviços */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-12">
            <div className="badge-capsule mb-4">Serviços</div>
            <h2 className="heading-display text-accent mb-6">O que oferecemos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/mitsuba-thrift-showcase_3eba5c97.png"
                alt="Produtos Mitsuba"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">Vestuário Selecionado</h3>
                <p className="text-foreground/90">
                  Roupas femininas, masculinas e unissex de segunda mão, cuidadosamente escolhidas por qualidade e estilo.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">Acessórios & Complementos</h3>
                <p className="text-foreground/90">
                  Bolsas, sapatos, joias e acessórios que completam seu look com personalidade.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">Serviços de Curadoria</h3>
                <p className="text-foreground/90">
                  Consultoria de estilo e intermediação de vendas para clientes que desejam vender suas peças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Sustentabilidade */}
      <section className="section-dark bg-secondary/10">
        <div className="container">
          <div className="mb-12">
            <div className="badge-capsule mb-4">Impacto</div>
            <h2 className="heading-display text-accent mb-6">Sustentabilidade em Ação</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/mitsuba-sustainability_bc5ca6c2.png"
                alt="Sustentabilidade"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90">
                Acreditamos que a moda sustentável é mais que uma tendência—é uma responsabilidade. Cada peça que você escolhe no Mitsuba é um passo em direção a um futuro mais consciente.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Reduzimos desperdício através da economia circular</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Promovemos consumo consciente e responsável</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">Apoiamos comunidades locais em Joinville</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Missão & Visão */}
      <section className="section-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <div className="badge-capsule mb-4">Missão</div>
                <h3 className="text-3xl font-bold text-accent mb-4">Nosso Propósito</h3>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Atuar na intermediação e venda de peças de vestuário e acessórios seminovos com garantia de qualidade. Nosso objetivo é entregar moda acessível principalmente para jovens, incentivando práticas de consumo sustentável e economia circular na nossa comunidade.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="badge-capsule mb-4">Visão</div>
                <h3 className="text-3xl font-bold text-accent mb-4">Nosso Futuro</h3>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Ser o brechó de referência para o público jovem de Joinville até 2030, reconhecido pela curadoria impecável de peças, inovação no atendimento online e impacto positivo na conscientização ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Contato */}
      <section id="contato" className="section-dark bg-secondary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <div className="badge-capsule mb-4 justify-center flex">Contato</div>
              <h2 className="heading-display text-accent mb-6">Venha nos visitar</h2>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-6 h-6 text-accent" />
              <span>Joinville, Santa Catarina - Brasil</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Enviar Mensagem
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Seguir nas Redes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/manus-storage/mitsuba-logo-real_7db1be4f.png"
                alt="Mitsuba Logo"
                className="h-10 w-10"
              />
            </div>
            <p className="text-sm text-foreground/60">
              © 2026 Mitsuba Brechó. Garimpe sua identidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                TikTok
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
