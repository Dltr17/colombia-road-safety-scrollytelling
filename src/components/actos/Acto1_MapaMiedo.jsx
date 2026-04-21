import React from 'react'

function Acto1_MapaMiedo() {
  return (
    <div className="relative flex flex-col md:flex-row bg-white">
      {/* Columna de Texto (Scroll) */}
      <div className="w-full md:w-2/5 px-8 lg:px-16">
        <div className="h-screen flex flex-col justify-center border-b border-slate-100">
          <h2 className="text-4xl font-bold text-vial-blue mb-6">Geografía del Riesgo</h2>
          <p className="text-xl text-slate-600">
            A nivel nacional, el <strong>69%</strong> de los actores viales se siente poco o nada seguro. Pero la realidad cambia drásticamente según el territorio.
          </p>
        </div>

        <div className="h-screen flex flex-col justify-center border-b border-slate-100">
          <h3 className="text-3xl font-bold text-vial-red mb-4">Chocó: El punto crítico</h3>
          <p className="text-xl text-slate-600">
            Con un alarmante <strong>98.08%</strong>, el Chocó reporta la percepción de inseguridad más alta del país. Aquí, el miedo es una constante absoluta.
          </p>
        </div>
      </div>

      {/* Columna Visual (Sticky) */}
      <div className="sticky top-0 h-screen w-full md:w-3/5 bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full h-[80%] rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center">
          <p className="text-slate-400 font-mono text-sm">[ COMPONENTE: MAPA_COLOMBIA_D3 ]</p>
          {/* <MapaColombia /> */}
        </div>
      </div>
    </div>
  )
}

export default Acto1_MapaMiedo