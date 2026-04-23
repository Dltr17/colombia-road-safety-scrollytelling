import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Acto0_Portada() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-start text-center p-6 overflow-hidden pt-[45vh]">


      <div className="absolute inset-0 z-0 opacity-[0.9] pointer-events-none">
        <DotLottieReact
          src="/animations/car_accident.lottie"
          loop
          autoplay
          layout={{
            fit: 'cover',    // Esto hace que la animación cubra toda la pantalla
            align: [0, 1]    // [X=0 (izq), Y=1 (abajo)] -> Esquina inferior izquierda
          }}
        />
      </div>

      <div className="max-w-5xl z-10 space-y-4">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-8xl font-bold text-[#2C687B] leading-[0.85] tracking-tighter">
            ¿A Quién Escuchas <br />
            <span className="text-[#991B1B] italic">Realmente</span> <br />
            en la Vía?
          </h1>
        </header>
        <div className="max-w-4xl mx-auto border-y border-slate-200 py-2 bg-white/5 backdrop-blur-[1px]">
          <p className="text-xl md:text-xl text-slate-700 font-light leading-relaxed">
            Un análisis sobre la disonancia entre la norma vial y el vínculo afectivo en Colombia.
          </p>
        </div>
      </div>

        {/* Descripción integrada en el flujo para que baje con el título */}

      {/* Indicador de interacción */}
      <div className="absolute bottom-10 z-10 animate-bounce text-slate-400">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-1 font-bold">Desliza para explorar</p>
        <span className="text-2xl">↓</span>
      </div>


    </section>
  );
}

export default Acto0_Portada;