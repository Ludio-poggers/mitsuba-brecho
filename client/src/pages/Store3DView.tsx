import { Button } from "@/components/ui/button";
import Store3D from "@/components/Store3D";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Store3DView() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Voltar</span>
            </button>
          </div>
          <h1 className="text-xl font-bold text-accent">Conheça nossa Loja</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* 3D Store View */}
      <div className="container py-8">
        <div className="mb-6">
          <h2 className="heading-display text-accent mb-2">Visualize a Loja em 3D</h2>
          <p className="text-foreground/80">
            Explore os ambientes da Mitsuba e conheça como é nossa loja por dentro. 
            A câmera rotaciona automaticamente para você visualizar todos os ângulos.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30">
          <Store3D />
        </div>

        {/* Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-card/50 rounded-lg p-6 border border-border/30">
            <h3 className="text-lg font-bold text-accent mb-3">Ambientes</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>✓ Recepção e atendimento</li>
              <li>✓ Área de provador</li>
              <li>✓ Vitrines de exposição</li>
              <li>✓ Mesas de acessórios</li>
              <li>✓ Araras de roupas</li>
              <li>✓ Banheiros</li>
            </ul>
          </div>

          <div className="bg-card/50 rounded-lg p-6 border border-border/30">
            <h3 className="text-lg font-bold text-accent mb-3">Informações</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>📍 <strong>Localização:</strong> Jardin, Santa Catarina, Brasil</li>
              <li>📐 <strong>Área:</strong> 160 m²</li>
              <li>🕒 <strong>Horário:</strong> Seg-Dom 10h-19h</li>
              <li>📞 <strong>Contato:</strong> WhatsApp disponível</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate("/")}
            className="btn-primary"
          >
            Voltar à Página Principal
          </Button>
        </div>
      </div>
    </div>
  );
}
