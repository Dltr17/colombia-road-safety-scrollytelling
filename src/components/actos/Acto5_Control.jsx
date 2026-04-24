import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Baby, ShieldCheck, Users, Share2, Home, CheckCircle2, MousePointerClick, Earth, UserRoundKey } from "lucide-react";
import { ConfettiButton } from "../ui/confetti";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Acto5_Control = () => {
  const [promised, setPromised] = useState(true); // Iniciamos en false para la interacción
  const [selectedActor, setselectedActor] = useState(null);

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
    // min-h-screen solo en el contenedor padre. py-12 para dar aire arriba/abajo.
    <section className="min-h-screen py-12 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full space-y-4">

        {/* BLOQUE 1: HEADER (Full Width por defecto) */}
        <div className="text-center space-y-2 mb-4">
          <h2 className="text-vial-blue font-geist-bold uppercase tracking-[0.3em] text-sm animate-pulse">
            Detrás de cada estadística hay alguien que te espera.
          </h2>
          <h1 className="text-4xl md:text-5xl font-geist-black tracking-tighter leading-none">
            ¿A quién escuchas hoy antes de arrancar?
          </h1>
        </div>

        {/* BLOQUE 2: GRID DE DOS COLUMNAS */}
        {/* Usamos items-center para que la órbita y la card se alineen al medio verticalmente */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center border-y border-slate-50 py-10">

          {/* COLUMNA IZQUIERDA: LA ÓRBITA */}
          <div className=" md:col-span-1 flex items-center justify-center overflow-hidden">
              <span className="text-[10px] font-black text-center uppercase text-slate-400">
                <UserRoundKey size={80} strokeWidth={1.75} className="text-vial-blue/60" />
                </span>
                

            {/* Órbita única: pasamos los actores como hijos */}
            <OrbitingCircles radius={100} duration={20} path={true} >
              {actores.map((actor) => (
                <button
                  key={actor.id}
                  onClick={() => setselectedActor(actor)}
                  className={`p-4 rounded-full transition-all duration-500 shadow-sm ${selectedActor?.id === actor.id
                      ? `${actor.bg} scale-125 text-white shadow-xl`
                      : "bg-white border text-vial-blue hover:scale-110"
                    }`}
                >
                  <actor.icon size={20} />
                </button>
              ))}
            </OrbitingCircles>
          </div>

          {/* COLUMNA DERECHA: EL VISOR */}
          <div className=" md:col-span-3 flex items-center justify-center ">
            {selectedActor ? (
              <div key={selectedActor.id} className="animate-in fade-in slide-in-from-right-8 duration-500 w-full ">
                <Card className=" border-0   w-full">
                  <CardContent className="p-8 space-y-4 relative">
                    <div className="relative z-10">
                      <div className={`${selectedActor.bg} text-white px-5 py-1 rounded-full text-[10px] font-geist-black tracking-widest inline-block uppercase`}>
                        Influencia: {selectedActor.value}%
                      </div>
                    </div>

                    <selectedActor.icon className={`absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 opacity-[0.1] ${selectedActor.color} pointer-events-none`} />

                    <div className="space-y-2 relative z-10">
                      <h3 className={`text-5xl font-geist-black italic tracking-tighter leading-none ${selectedActor.color}`}>
                        La voz de {selectedActor.label}
                      </h3>
                      <p className="text-xl md:text-2xl text-slate-700 font-geist-medium leading-tight max-w-lg">
                        "{selectedActor.desc}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-50 relative z-10 flex justify-between items-center">
                      <span className="text-[10px] font-mono text-slate-300 tracking-[0.4em] uppercase font-bold">{selectedActor.desc1}</span>
                      <span className={`text-[180px] font-geist-black opacity-[0.1] absolute -bottom-10 -right-4 leading-none ${selectedActor.color}`}>
                        {Math.floor(selectedActor.value)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center space-y-8 animate-in fade-in duration-700 md:col-span-3 flex items-center justify-center ">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto border border-slate-100 shadow-sm animate-bounce">
                  <MousePointerClick className="text-slate-300" size={32} />
                </div>
                <p className="font-geist-medium text-slate-400 italic max-w-[200px] mx-auto">
                  Haz clic en una de las voces de tu órbita
                </p>
              </div>
            )}
          </div>
        </div>

        {/* BLOQUE 3: EL COMPROMISO (Full Width) */}
        <div className="flex flex-col items-center justify-center w-full pt-4 space-y-4">
          <p className="text-slate-400 font-geist-medium italic text-sm text-center">
            "Porque al final, lo más importante es volver a casa."
          </p>
          <div onClickCapture={() => setPromised(!promised)}>
            <ConfettiButton
              options={{
                particleCount: promised ? 0 : 150,
                spread: 80,
                colors: ["#14b8a6", "#DB1A1A", "#2C687B"],
                origin: { y: 0.8 }
              }}
              className={`min-w-100 py-6 rounded-full font-geist-black uppercase tracking-widest transition-all duration-500 shadow-2xl text-vial-bg border-none
                ${promised
                  ? "bg-vial-red scale-95 shadow-vial-teal/20"
                  : "bg-vial-teal hover:bg-vial-blue hover:scale-105 active:scale-95 shadow-vial_red/30"
                }`}
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

export default Acto5_Control;