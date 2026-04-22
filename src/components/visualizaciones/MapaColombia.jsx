import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MapaColombia = ({ grupoActivo }) => {
  const svgRef = useRef();
  const geoDataRef = useRef(null);

  // Mapeo basado estrictamente en tu narrativa y el JSON de John Guerra 
  // Mapeo basado estrictamente en tu estructura de regiones
  const gruposNarrativos = {
    "Region_Pacifica": {
      ids: ["27", "52", "19", "76"], // Chocó, Nariño, Cauca, Valle del Cauca 
      color: "#DB1A1A" // Rojo Alerta 
    },
    "Region_Caribe": {
      ids: ["44", "20", "47", "13"], // Guajira, Cesar, Magdalena, Bolívar 
      color: "#DB1A1A"
    },
    "Region_Amazonia": {
      ids: ["18", "86", "50", "85"], // Caquetá, Putumayo 
      color: "#DB1A1A"
    },
    "Region_Andina": {
      ids: ["25", "15", "68", "73", "41", "63", "05", "17"], // Cundinamarca a Caldas 
      color: "#2C687B" // Azul Institucional 
    },
    "Region_Orinoquia": {
      ids: ["50", "85"], // Meta, Casanare 
      color: "#2C687B"
    },
    "Sin_Datos": {
      ids: ["91", "81", "08", "23", "94", "95", "54", "66", "70", "97", "99", "88"], 
      color: "#DB1A1A" 
    }
  };

  useEffect(() => {
    const renderMap = (data) => {
      const width = 400;
      const height = 500;
      const svg = d3.select(svgRef.current);

      const projection = d3.geoMercator().fitSize([width, height], data);
      const pathGenerator = d3.geoPath().projection(projection);

      // Dibujo de los departamentos 
      svg.selectAll(".depto")
        .data(data.features)
        .join("path")
        .attr("class", "depto")
        .attr("d", pathGenerator)
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", 0.5)
        .transition()
        .duration(500)
        .attr("fill", (d) => {
          // Usamos el ID numérico del departamento (más fiable que el nombre) 
          const id = d.properties.DPTO || d.id;
          const grupo = gruposNarrativos[grupoActivo];

          if (grupo && grupo.ids.includes(id)) {
            return grupo.color;
          }
         
          return "#CBD5E1"; // Fondo neutro [cite: 6]
        });
    };

    if (!geoDataRef.current) {
      d3.json("/colombia.json").then(data => {
        geoDataRef.current = data;
        renderMap(data);
      });
    } else {
      renderMap(geoDataRef.current);
    }
  }, [grupoActivo]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg ref={svgRef} className="w-full h-full max-w-[450px] drop-shadow-2xl"></svg>
    </div>
  );
};

export default MapaColombia;