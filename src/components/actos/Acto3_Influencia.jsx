import React from 'react'

function Acto3_Influencia() {
  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-4xl font-bold text-vial-blue">La Paradoja de la Influencia</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          ¿Qué nos hace frenar? Mientras la <strong>Policía</strong> influye en un 58.2%, el poder de los vínculos es devastador: 
          la <strong>Pareja (94.9%)</strong> y los <strong>Hijos (94.8%)</strong> son los verdaderos guardianes de la vida.
        </p>
        
        {/* Aquí irá una gráfica de barras horizontal simple con D3 o CSS puro */}
        <div className="w-full space-y-4 pt-10">
            <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden">
                <div className="absolute h-full bg-vial-red w-[94.9%] flex items-center px-4 text-xs font-bold text-white">PAREJA: 94.9%</div>
            </div>
            <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden">
                <div className="absolute h-full bg-vial-blue w-[58.2%] flex items-center px-4 text-xs font-bold text-white">POLICÍA: 58.2%</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Acto3_Influencia