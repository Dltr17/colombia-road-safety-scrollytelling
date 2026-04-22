import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MapaColombia from '../visualizaciones/MapaColombia';
import GraficoBarrasRegion from '../visualizaciones/GraficoBarrasRegion';

import regiones from '../../data/regiones.json';

// Sub-componente para detectar el scroll en cada bloque narrativo
const SectionNarrativa = ({ idGrupo, setGrupo, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // Se activa cuando el 60% de la sección es visible
  });

  useEffect(() => {
    if (inView) {
      setGrupo(idGrupo);
    }
  }, [inView, idGrupo, setGrupo]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center px-8 py-20 border-b border-border/50 last:border-0">
      {children}
    </div>
  );
};

const Acto1_MapaMiedo = () => {
  const [grupoActivo, setGrupoActivo] = useState("periferia");

  return (
    <div className="relative flex flex-col md:flex-row bg-white">

      {/* COLUMNA IZQUIERDA: Texto Narrativo (Scrollable) */}
      <div className="w-full md:w-2/5 z-10 bg-white/90 backdrop-blur-sm">


        {/* Bloque 1: Pacífico y Caribe (Periferia) */}
        <SectionNarrativa idGrupo="Region_Pacifica" setGrupo={setGrupoActivo}>
          <h2 className="text-4xl font-bold text-vial-blue mb-6">La Crisis en la Periferia</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            En el <strong>Chocó</strong>, la cifra es casi absoluta con un <strong>98,08%</strong>[cite: 15]. La inseguridad vial dibuja una frontera invisible en los extremos del país[cite: 12].
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Pacifica.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Caribe" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-red/80 mb-6">El Caribe Central</h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>La Guajira (95,64%)</strong> y el <strong>Cesar (80,89%)</strong> mantienen la tensión alta[cite: 15, 17]. El asfalto aquí es un escenario de riesgo constante[cite: 16].
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Caribe.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Amazonia" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-red/80 mb-6">Puerta de la Amazonía y Llanos</h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>Caquetá (86,05%)</strong> se posiciona como un punto crítico [cite: 18], reflejando la hostilidad que enfrenta el ciudadano en estas zonas alejadas[cite: 17].
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Amazonia.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Andina" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-blue mb-6">Región Andina y el Contraste</h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Mientras en el corazón del país el miedo persiste [cite: 19], <strong>Caldas</strong> reporta solo un <strong>16,08%</strong> de inseguridad [cite: 25], siendo el oasis de esta radiografía[cite: 25].
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Andina.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Sin_Datos" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-slate-400 mb-6 italic">
            Zonas Silenciosas
          </h3>
          <p className="text-xl text-slate-500 leading-relaxed italic">
            Esta radiografía aún tiene zonas en blanco. Departamentos como
            <strong> Amazonas, Arauca y San Andrés</strong> permanecen "silenciosos"[cite: 21].
            Esta falta de datos es un mensaje: lo que no medimos, no lo podemos proteger.
          </p>
        </SectionNarrativa>

      </div>

      {/* COLUMNA DERECHA: Mapa Fijo (Sticky) */}
      <div className="sticky top-0 h-screen w-full md:w-3/5 flex items-center justify-center bg-slate-50 overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center p-12">

          <div className="mb-8 text-center">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
              Visualización de Riesgo Territorial
            </h4>
            <p className="text-vial-blue font-bold text-xl">
              {grupoActivo === "periferia" && "Zonas Críticas: Pacífico y Caribe"}
              {grupoActivo === "caribe-sur" && "Tensión en el Litoral y Sur"}
              {grupoActivo === "centro-llanos" && "Percepción en Región Andina y Llanos"}
              {grupoActivo === "seguridad" && "Contraste de Seguridad: Caldas"}
            </p>
          </div>

          {/* El Mapa recibe el ID del grupo para ejecutar la lógica de D3 */}
          <MapaColombia grupoActivo={grupoActivo} />

          {/* Leyenda Dinámica */}
          <div className="mt-10 flex gap-6 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-3 h-3 bg-[#DB1A1A] rounded-full"></span> Crítico (+90%)
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-3 h-3 bg-[#8CC7C4] rounded-full"></span> Seguro (-20%)
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-3 h-3 bg-slate-200 rounded-full"></span> Sin datos
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Acto1_MapaMiedo;