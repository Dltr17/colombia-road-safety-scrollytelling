import React from 'react';

const GraficoBarrasRegion = ({ datos }) => {
  if (!datos || datos.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
      <div className="space-y-4">
        {datos.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">
                {item.nombre}
              </span>
              <span className="text-sm font-mono font-bold" style={{ color: item.color }}>
                {(item.valor * 100).toFixed(1)}%
              </span>
            </div>
            {/* Contenedor de la barra */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${item.valor * 100}%`,
                  backgroundColor: item.color 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraficoBarrasRegion;