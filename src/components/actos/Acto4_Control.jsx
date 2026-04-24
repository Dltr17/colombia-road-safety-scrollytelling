import React from 'react';
import { Heart } from "lucide-react";

const Acto4_Control = () => {
    const agentesSecretos = [
        {
            label: "HIJOS",
            value: 94.8,
            cat: "LA RAZÓN DE TODO",
            desc: "9 de cada 10 conductores bajan la velocidad pensando en ellos."
        },
        {
            label: "PAREJA",
            value: 94.9,
            cat: "EL ANCLA EMOCIONAL",
            desc: "El vínculo más fuerte para decidir volver a casa a salvo."
        }
    ];

    return (
        <section className="min-h-screen bg-[#FFF6F6] flex flex-col items-center justify-center py-20 px-6">
            <div className="w-full max-w-2xl space-y-12">
                
                {/* Header del Acto */}
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-8 duration-1000">
                    <div className="inline-block bg-white/60 backdrop-blur-sm px-6 py-2 rounded-2xl border border-vial_red/10 mb-4">
                        <h2 className="text-vial_blue font-geist-bold uppercase tracking-[0.2em] text-sm">
                            ¿Quién tiene el control real?
                        </h2>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-geist-black text-vial_blue uppercase tracking-tighter leading-none">
                        La Ruta <br /> <span className="text-vial_red text-6xl md:text-7xl">del Corazón</span>
                    </h1>
                    <p className="text-slate-500 font-geist-medium text-lg max-w-md mx-auto leading-relaxed">
                        Donde las estadísticas dejan de ser números y se convierten en nombres.
                    </p>
                </div>

                {/* Agentes Secretos (Cards) */}
                <div className="space-y-6">
                    {agentesSecretos.map((item, index) => (
                        <div 
                            key={item.label} 
                            className="group space-y-4 bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(219,26,26,0.05)] border border-vial_red/5 transition-all hover:shadow-[0_20px_60px_rgba(219,26,26,0.12)] hover:-translate-y-1 duration-500 animate-in fade-in slide-in-from-bottom-10"
                            style={{ animationDelay: `${(index + 1) * 300}ms`, animationFillMode: 'both' }}
                        >
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-vial_red font-black tracking-[0.3em] opacity-70">
                                        {item.cat}
                                    </span>
                                    <h3 className="text-3xl font-geist-black text-vial_blue italic tracking-tighter">
                                        {item.label}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-5xl font-geist-black text-vial_red tracking-tighter">
                                        {item.value}%
                                    </span>
                                    <p className="text-[10px] font-geist-bold text-slate-400 uppercase tracking-widest">de influencia</p>
                                </div>
                            </div>

                            {/* Progress Bar Custom */}
                            <div className="relative h-14 bg-vial_red/5 rounded-2xl overflow-hidden border border-vial_red/10 shadow-inner">
                                <div
                                    className="h-full bg-vial_red flex items-center justify-end px-6 transition-all duration-[2500ms] ease-out delay-500"
                                    style={{ width: `${item.value}%` }}
                                >
                                    <Heart className="w-7 h-7 text-white fill-current animate-pulse shadow-lg" />
                                </div>
                            </div>
                            
                            <p className="text-sm text-slate-400 font-geist-medium italic leading-relaxed pl-2">
                                "{item.desc}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* El CTA Final: La Promesa */}
                <div className="pt-12 text-center space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
                    <div className="space-y-2">
                        <p className="text-vial_blue font-geist-bold text-2xl tracking-tight">
                            ¿Cuál es tu promesa hoy?
                        </p>
                        <p className="text-slate-400 text-sm font-geist-medium">
                            Tú eres el agente de cambio más importante en la vía.
                        </p>
                    </div>
                    
                    <button className="group relative overflow-hidden bg-vial_red text-white px-12 py-5 rounded-full font-geist-black uppercase tracking-widest transition-all hover:bg-vial_blue hover:scale-105 active:scale-95 shadow-xl shadow-vial_red/20">
                        <span className="relative z-10">Hacer la promesa de volver</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Acto4_Control;