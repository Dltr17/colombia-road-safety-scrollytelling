import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Baby, ShieldCheck, Users, Share2, Home, CheckCircle2 } from "lucide-react";
import { ConfettiButton } from "../ui/confetti";



const Acto4_Control = () => {
  const [promised, setPromised] = useState(true);


  const actores = [
    {
      id: "pareja",
      label: "Pareja",
      value: 94.9,
      icon: Heart,
      color: "text-vial-blue",
      bg: "bg-vial-teal",
      desc: "El ancla emocional. Su voz prioriza tu regreso seguro por encima de cualquier prisa.",
      desc1: "COMPROMISO DE CUIDADO MUTUO"
    },
    {
      id: "hijos",
      label: "Hijos",
      value: 94.8,
      icon: Baby,
      color: "text-vial-blue",
      bg: "bg-vial-teal",
      desc: "El máximo nivel de responsabilidad. La influencia más pura, que transforma el riesgo en cautela.",
      desc1: "EL VÍNCULO MÁS FUERTE"
    },
    {
      id: "policia",
      label: "Policía",
      value: 58.2,
      icon: ShieldCheck,
      color: "text-vial-blue",
      bg: "bg-vial-blue",
      desc: "La amenaza externa. La voz de la ley y la coerción, cuya influencia es intermitente y evitable.",
      desc1: "CONTROL INSTITUCIONAL"
    },
    {
      id: "amigos",
      label: "Amigos",
      value: 54.9,
      icon: Users,
      color: "text-vial-blue",
      bg: "bg-vial-blue",
      desc: "Los amigos y el entorno social inmediato a menudo actúan como validadores de conductas de riesgo en lugar de frenos.",
      desc1: "REFUERZO SOCIAL"
    },
    {
      id: "redes",
      label: "Redes",
      value: 36.3,
      icon: Share2,
      color: "text-vial-red",
      bg: "bg-vial-red",
      desc: "El ruido intermitente. La voz de la tendencia y el castigo público, pero con el volumen más bajo de todos.",
      desc1: "RUIDO DIGITAL"
    },
  ];



  return (
    <section className="min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full space-y-8">
        {/* Header Narrativo */}
        <div className="text-center space-y-2">

          <h2 className="text-vial_red font-geist-bold uppercase tracking-[0.3em] text-sm animate-pulse">
            Detrás de cada estadística hay alguien que te espera.
          </h2>
          <h1 className="text-4xl md:text-4xl font-geist-black tracking-tighter leading-none">
            <strong> ¿A quién escuchas hoy antes de arrancar?</strong>
          </h1>
        </div>

        {/* Sistema de Tabs Interactivos */}
        <Tabs defaultValue="hijos" className="w-full">
          <TabsList className="flex h-2 w-full backdrop-blur-sm border p-2 rounded-[2rem] shadow-xl mb-1">
            {actores.map((actor) => (
              <TabsTrigger
                key={actor.id}
                value={actor.id}
                className="flex-1 rounded-[1.5rem] py-4 flex flex-row items-center justify-center gap-3 transition-all data-[state=active]:bg-white data-[state=active]:shadow-xl data-[state=active]:scale-105"
              >
                {/* Ajusté el tamaño del icono a w-5 h-5 para que sea legible junto al texto */}
                <actor.icon className="w-5 h-5" />
                <span className="text-[11px] font-geist-black uppercase tracking-widest leading-none whitespace-nowrap">
                  {actor.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {actores.map((actor) => (
            <TabsContent
              key={actor.id}
              value={actor.id}
              className="animate-in fade-in zoom-in duration-500 outline-none"
            >
              <Card className="border-none shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white rounded-[3rem] overflow-hidden">
                <CardContent className="p-6 md:p-8 space-y-4 relative">
                  <div className="flex justify-between items-center relative z-10">
                    <div
                      className={`${actor.bg} text-white px-6 py-1 rounded-full text-[12px] font-geist-black tracking-[0.3em] shadow-lg`}
                    >
                      Influeye en el {actor.value}% de los encuestados
                    </div>
                  </div>
                  <actor.icon
                    className={`absolute top-1/2 left-10 -translate-y-1/2 w-60 h-60 opacity-10 ${actor.color} pointer-events-none`}
                  />

                  <div className="space-y-2 relative z-10">
                    <h3
                      className={`text-5xl md:text-7xl font-geist-black italic tracking-tighter leading-none ${actor.color}`}
                    >
                      La voz de {actor.label}
                    </h3>
                    <p className="text-2xl md:text-2xl text-justify text-slate-700 font-geist-medium leading-[1.1] max-w-3xl">
                      {actor.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-50 relative z-10">
                    <span className="text-[10px] font-mono text-slate-300 tracking-[0.4em] uppercase">
                      {actor.desc1}
                    </span>
                    <span
                      className={`absolute bottom-4 -right-4 text-[250px] font-geist-black opacity-15 pointer-events-none leading-none ${actor.color}`}
                    >
                      {Math.floor(actor.value)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* La Promesa Sagrada */}
        <div className="flex flex-col items-center justify-center w-full ">
          <p className="mt-6 text-slate-400 font-geist-medium italic">
            Porque al final, lo más importante es volver a casa.
          </p>
          <div onClickCapture={() => setPromised(!promised)}>
            <ConfettiButton
              options={{
                get particleCount() { return promised ? 0 : 150 }, // No dispara si ya se hizo
                spread: 80,
                colors: ["#14b8a6", "#DB1A1A", "#2C687B"],
                origin: { y: 0.6 }
              }}
              // Clases de estilo (combinamos tus clases con las de shadcn/magicui)
              className={`
              relative flex items-center justify-center gap-4 px-12 py-7 rounded-full 
              font-geist-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl 
              min-w-105 text-vial-bg border-none
              ${promised
                  ? "bg-vial-teal hover:bg-vial-blue hover:scale-105 active:scale-95 shadow-vial-bg/30"
                  : "bg-vial-teal shadow-vial-teal/30 scale-95"
                }
            `}
            >
              {promised ? (
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6" />
                  <span>Hacer mi promesa de volver</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 animate-in zoom-in">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Promesa Realizada 🎉</span>
                </div>
              )}
            </ConfettiButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acto4_Control;
