import React from 'react';
import { Progress } from "@/components/ui/progress";

const GraficoBarrasRegion = ({ datos }) => {
  if (!datos || datos.length === 0) return null;

  return (
    <div className="mt-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-all">
      <div className="space-y-3">
        {datos.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {item.nombre}
              </span>
              <span
                className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-50"
                style={{ color: item.color }}
              >
                {(item.valor * 100).toFixed(1)}%
              </span>
            </div>

            <Progress
              value={item.valor * 100}
              className="h-3 w-full bg-slate-100 shadow-inner"
              style={{
                "--progress-foreground": item.color,
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraficoBarrasRegion;