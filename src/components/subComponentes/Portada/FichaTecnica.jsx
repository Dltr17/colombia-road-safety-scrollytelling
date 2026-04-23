import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Database, Table2, Info } from "lucide-react"


function FichaTecnica() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#2C687B] transition-colors">
                <Database size={14} /> Ficha Técnica
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="text-left space-y-4">
                    <SheetTitle className="text-[#2C687B] uppercase text-sm tracking-widest border-b pb-2">Metadatos de la Investigación</SheetTitle>
                    <SheetDescription className="text-slate-700 space-y-6 pt-4">
                        <section>
                            <h4 className="font-bold text-black flex items-center gap-2"><Table2 size={16} /> Universo de Datos</h4>
                            <p className="text-sm mt-1">Dataset procesado de 9.232 actores viales en Colombia. Sincronización con IDs DIVIPOLA para representación geoespacial.</p>
                        </section>
                        <section className="bg-slate-50 p-4 border-l-2 border-[#DB1A1A]">
                            <h4 className="font-bold text-[#DB1A1A] text-xs uppercase">Variables de Control</h4>
                            <ul className="text-xs space-y-2 mt-2 font-mono">
                                <li>• Percepción_Seguridad: [Ordinal: 1-4]</li>
                                <li>• Influencia_Afectiva: [Pareja, Hijos, Padres]</li>
                                <li>• Influencia_Coercitiva: [Policía, Sanción]</li>
                            </ul>
                        </section>
                        <section>
                            <h4 className="font-bold text-black text-xs uppercase flex items-center gap-2"><Info size={14} /> Nota de Integridad</h4>
                            <p className="text-xs italic">Se reconoce un sesgo de sub-reporte en zonas periféricas. El índice de confianza del modelo es del 95% para áreas urbanas principales.</p>
                        </section>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default FichaTecnica