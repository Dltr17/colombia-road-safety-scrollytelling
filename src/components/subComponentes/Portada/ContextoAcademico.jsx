import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { GraduationCap, BookOpen, Award } from "lucide-react"

function ContextoAcademico() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#2C687B] transition-colors">
                <GraduationCap size={16} /> Presentación | 2026
            </SheetTrigger>
            <SheetContent side="left" className="w-[400px] border-r-[#8CC7C4]">
                <SheetHeader className="text-left space-y-6">
                    <div className="bg-[#2C687B]/10 p-6 rounded-lg border border-[#2C687B]/20">
                        <Award className="text-[#2C687B] mb-2" size={32} />
                        <SheetTitle className="text-[#2C687B] text-xl leading-tight font-bold">
                            Maestría en Comunicación, Culturas Digitales y Visualización de Datos
                        </SheetTitle>
                    </div>
                    
                    <SheetDescription className="space-y-6 text-slate-700">
                        <section className="space-y-2">
                            <h4 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2">
                                <BookOpen size={14} /> Seminario de Visualización
                            </h4>
                            <p className="text-sm font-medium">
                                Proyecto final enfocado en la **Visualización Crítica de Datos**.
                            </p>
                        </section>

                        <section className="border-l-2 border-[#8CC7C4] pl-4 space-y-2">
                            <h4 className="text-[10px] font-black uppercase text-slate-400">Tesis Narrativa</h4>
                            <p className="text-sm leading-relaxed">
                                Exploración de la paradoja de la autoridad: ¿Por qué el afecto (pareja/hijos) influye en un 94.8% mientras que la ley solo en un 58.2%? 
                            </p>
                        </section>

                        <footer className="pt-8">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                Colombia 2026 | Investigación Digital
                            </p>
                        </footer>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ContextoAcademico