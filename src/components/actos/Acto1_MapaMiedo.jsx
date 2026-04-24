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
          <h2 className="text-3xl font-bold text-vial-blue mb-6 text-center" style={{ color: "#991B1B" }}>La Crisis en la Periferia</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-justify" >
            El sentimiento de inseguridad alcanza niveles críticos en la periferia occidental. En el
            <strong style={{ color: "#991B1B" }}> Chocó</strong>, la cifra es casi absoluta con un
            <strong style={{ color: "#991B1B" }}> 98,08%</strong>, marcando una brecha de vulnerabilidad
            frente a departamentos vecinos como <strong style={{ color: "#dd2727" }}>Nariño</strong> (78,17%)
            y <strong style={{ color: "#e19393" }}>Cauca</strong> (75,74%). En este corredor del Pacífico,
            el asfalto no es una ruta de conexión, sino un escenario de riesgo constante para el ciudadano.
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Pacifica.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Caribe" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-red/80 mb-6  text-center" style={{ color: "#D97706" }}>El Caribe Central</h3>
          <p className="text-lg text-slate-600 leading-relaxed text-justify ">
            Hacia el norte, la hostilidad territorial se concentra en el litoral.
            <strong style={{ color: "#D97706" }}> La Guajira</strong> lidera la percepción de riesgo con un alarmante
            <strong style={{ color: "#D97706" }}> 95,64%</strong>. Esta tensión se extiende por el bloque de
            <strong style={{ color: "#EA580C" }}> Cesar </strong> (80,89%) y
            <strong style={{ color: "#F59E0B" }}> Magdalena </strong> (78,21%), departamentos donde el ciudadano
            se siente desprotegido, mientras que <strong style={{ color: "#f1a0a0" }}>Bolívar</strong> (70,66%)
            cierra este grupo con una cifra que, aunque menor, sigue reflejando una crisis de seguridad vial persistente.
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Caribe.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Amazonia" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-red/80 mb-6 text-center" style={{ color: "#065F46" }}>Puerta de la Amazonía y Llanos</h3>
          <p className="text-lg text-slate-600 leading-relaxed text-justify ">
            En la transición hacia la selva y las llanuras orientales, el riesgo se vuelve una constante geográfica.
            <strong style={{ color: "#065F46" }}> Caquetá (86,05%)</strong> se posiciona como el punto más crítico de este bloque,
            reflejando la hostilidad en zonas de baja conectividad. Esta percepción se mantiene alta en el
            <strong style={{ color: "#166534" }}> Meta </strong> (71,57%) y se extiende hacia
            <strong style={{ color: "#34d399" }}> Casanare </strong> (64,73%) y
            <strong style={{ color: "#6ee7b7" }}> Putumayo </strong> (63,21%), territorios donde la infraestructura
            vial sigue siendo una deuda pendiente con la seguridad del ciudadano.
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Amazonia.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Region_Andina" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-vial-blue mb-6 text-center" style={{ color: "#9A3412" }}>Región Andina y el Contraste</h3>
          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            En el centro del país, la percepción de riesgo presenta una dualidad profunda. Mientras departamentos como
            <strong style={{ color: "#c2410c" }}> Cundinamarca </strong> (71,16%) mantienen niveles de alerta elevados,
            la tendencia se quiebra al descender por la cordillera hacia el Eje Cafetero. El departamento de, <strong style={{ color: "#14b8a6" }}> Caldas </strong> se posiciona como el oasis de la radiografía nacional con apenas un <strong style={{ color: "#14b8a6" }}> 16,08% </strong> de inseguridad, evidenciando un fenómeno que responde a dinámicas locales diferenciadas.
          </p>
          <GraficoBarrasRegion
            datos={regiones.Region_Andina.detalles}
          />
        </SectionNarrativa>

        <SectionNarrativa idGrupo="Sin_Datos" setGrupo={setGrupoActivo}>
          <h3 className="text-3xl font-bold text-slate-400 mb-6 italic text-center">
            Zonas Silenciosas
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed italic text-justify text-justify">
            Es fundamental entender que este análisis es un esfuerzo por dar voz a 9.232 actores viales. Sin embargo, nuestra radiografía aún tiene zonas en blanco. Por limitaciones en la recolección, este mapa no incluye actualmente a la región de los Antiguos Territorios Nacionales (San Andrés y Providencia) ni a otros departamentos que permanecen "silenciosos" en este estudio.
            Esta falta de datos en ciertos puntos es, en sí misma, un mensaje: lo que no medimos, no lo podemos proteger. 

          </p>
        </SectionNarrativa>

      </div>

      {/* COLUMNA DERECHA: Mapa Fijo (Sticky) */}
      <div className="sticky top-0 h-screen w-full md:w-3/5 flex items-center justify-center bg-slate-50 overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center p-12">
<span className="text-vial_red font-geist-bold tracking-widest uppercase text-sm">Acto I</span>

          <div className="mb-8 text-center">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
              Visualización Percepción de Riesgo Territorial
            </h4>
          </div>

          {/* El Mapa recibe el ID del grupo para ejecutar la lógica de D3 */}
          <MapaColombia grupoActivo={grupoActivo} />

          {/* Leyenda Dinámica */}
          <div className="mt-10 flex gap-6 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100">

            <p className="text-shadow-vial-blue font-bold text-xl">
              {grupoActivo === "Region_Caribe" && "El Caribe Central"}
              {grupoActivo === "Region_Pacifica" && "La Crisis en la Periferia"}
              {grupoActivo === "Region_Amazonia" && "Puerta de la Amazonía y Llanos"}
              {grupoActivo === "Region_Andina" && "Región Andina y el Contraste"}
              {grupoActivo === "Sin_Datos" && "Zonas Silenciosas"}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Acto1_MapaMiedo;