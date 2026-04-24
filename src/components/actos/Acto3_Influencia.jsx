import React, { useRef, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Card } from "@/components/ui/card";
import { ShieldAlert, Heart, EyeOff, ChevronDown } from "lucide-react";

const Acto3_Influencia = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="h-[600vh] relative bg-vial_bg">

      {/* --- BLOQUE DE TÍTULO (Se queda arriba mientras la ciudad aparece atrás) --- */}
      <div
        className="h-screen flex flex-col items-center justify-center sticky top-0 z-20 pointer-events-none transition-opacity duration-500"
        style={{ opacity: scrollProgress > 0.25 ? 0 : 1 }}
      >
        <div className="max-w-4xl text-center space-y-6 px-6">
          <span className="text-vial_red font-geist-bold tracking-widest uppercase text-sm">Acto III</span>
          <h2 className="text-5xl md:text-7xl font-geist-bold text-vial_blue uppercase tracking-tighter leading-none">
            La Paradoja <br /> de la Autoridad
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-geist-light leading-relaxed">
            Si el riesgo es tan evidente y las lesiones tan reales... <br className="hidden md:block" />
            <span className="text-vial_blue font-geist-medium">¿Por qué no logramos cambiar?</span>
          </p>
          <div className="pt-10 flex flex-col items-center gap-2 text-slate-400">
            <ChevronDown className="animate-bounce w-6 h-6" />
          </div>
        </div>
      </div>

      {/* --- CONTENEDOR STICKY --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-10">

        {/* CAPA 1: La Ciudad (Se construye detrás del título) */}
        <div
          className="absolute inset-0 z-0 transition-all duration-700"
          style={{
            // Empieza a aparecer desde el inicio y llega a 1 cuando el título se va
            opacity: scrollProgress < 0.1 ? scrollProgress * 10 : scrollProgress > 0.85 ? 0.2 : 1,
            filter: `grayscale(${scrollProgress > 0.4 ? (scrollProgress - 0.4) * 2.5 : 0}) blur(${scrollProgress > 0.8 ? "4px" : "0px"})`,
            transform: `scale(${1 + scrollProgress * 0.05})`,
          }}
        >
          <DotLottieReact src="/animations/Beautiful_city.lottie" loop autoplay />
        </div>

        {/* CAPA 2: El Policía (Aparece después del título) */}
        <div
          className="relative z-10 w-64 h-64 md:w-[500px] md:h-[500px] transition-all duration-500"
          style={{
            // Aparece solo después de que el título empieza a desvanecerse
            opacity: scrollProgress > 0.20 && scrollProgress < 0.8 ? 1 : 0,
            transform: `scale(${1.2 - scrollProgress * 0.3}) translateY(${scrollProgress > 0.4 ? "-20px" : "0"})`,
          }}
        >
          <DotLottieReact src="/animations/Traffic_Police.lottie" loop autoplay />
        </div>

        {/* CAPA 3: Tarjetas Narrativas */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 pointer-events-none">

          {/* Tarjeta 1: Aparece con el policía en color */}
          {scrollProgress > 0.35 && scrollProgress < 0.65 && (
            <Card className="p-6 max-w-md border-vial_blue/20 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white/90 backdrop-blur-md pointer-events-auto opacity-85">
              <div className="flex items-center gap-3 mb-2 text-vial_blue text-xl font-geist-bold uppercase italic">
                <ShieldAlert className="w-6 h-6 text-vial_blue" />
                El Uniforme como Paisaje
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Para el <span className="font-bold text-vial_blue text-xl">58.28%</span>, la instituciónalidad tiene influencia, pero el resto parece haber desarrollado una "ceguera" ante el control.
              </p>
            </Card>
          )}

          {/* Tarjeta 2: Ciudad Gris, Policía Color */}
          {scrollProgress > 0.65 && scrollProgress < 0.95 && (
            <Card className="p-6 max-w-md border-none bg-vial-red text-white shadow-2xl animate-in zoom-in duration-500 pointer-events-auto opacity-100! fill-none!">
              <div className="flex items-center gap-3 mb-2 text-xl font-geist-bold uppercase italic">
                <EyeOff className="w-6 h-6 text-white" />
                <strong> El Desafío </strong>
              </div>
              {/* Subí la opacidad del texto a 90 para que sea legible sobre el rojo */}
              <p className="opacity-90 leading-relaxed text-lg font-geist-medium text-center">
                Un grupo crítico de conductores <strong>del 14.6% </strong> decide ignorar las normas bajo la mirada directa de la ley. No es falta de conocimiento, es desconexión emocional.
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Acto3_Influencia;