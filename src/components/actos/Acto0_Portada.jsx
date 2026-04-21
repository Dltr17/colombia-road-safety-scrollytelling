import React from 'react'

function Acto0_Portada() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-vial-bg text-center p-6 border-b border-border">
      <div className="max-w-4xl space-y-6">
        <span className="text-vial-red font-bold uppercase tracking-widest text-sm bg-vial-red/10 px-3 py-1 rounded-full">
          Investigación Nacional 2026
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-vial-blue leading-tight">
          ¿A Quién Escuchas <br /> Realmente en la Vía?
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
          Un análisis profundo sobre la percepción del riesgo, la autoridad y el poder de los vínculos afectivos en Colombia.
        </p>
        <div className="pt-10 animate-bounce text-slate-400">
          <p className="text-xs uppercase tracking-widest mb-2">Desliza para explorar</p>
          <span className="text-2xl">↓</span>
        </div>
      </div>
    </section>
  )
}

export default Acto0_Portada