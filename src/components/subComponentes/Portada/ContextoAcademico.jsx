import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { GraduationCap, BookOpen, Award, UserCircle } from "lucide-react"

function ContextoAcademico() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#2C687B] transition-colors">
                <GraduationCap size={16} /> Presentación | 2026
            </SheetTrigger>
            <SheetContent side="left" className="w-[400px] border-r-[#8CC7C4] overflow-y-auto">
                <SheetHeader className="text-left space-y-6">
                    <div className="bg-[#7649b6]/10 p-6 rounded-lg border border-[#2C687B]/20">
                        <Award className="text-[#7e41ac] mb-2" size={32} />
                        <SheetTitle className="text-[#7649b6] text-xl leading-tight font-bold">
                            Maestría en Comunicación, Culturas Digitales y Visualización de Datos
                        </SheetTitle>
                    </div>
                    
                    <SheetDescription className="space-y-6 text-slate-700">
                        {/* SECCIÓN DE AUTORÍA AÑADIDA */}
                        <section className="space-y-2">
                            <h4 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2">
                                <UserCircle size={14} /> Autor
                            </h4>
                            <p className="text-sm font-bold text-slate-900">
                                Diego Fernando Lotero Vásquez
                            </p>
                            <p className="text-xs text-justify leading-relaxed text-slate-500">
                                 
                                Profesional en Salud Ocupacional. Mg. Administración de Recursos Humanos. Especialista en Analítica de Datos y Gestión de Proyectos. Maestrante en Comunicación, Culturas Digitales y Visualización de Datos
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h4 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2">
                                <BookOpen size={14} /> Seminario
                            </h4>
                            <p className="text-sm font-medium">
                                Visualización de Datos
                            </p>
                            <p className="text-xs text-justify text-slate-500 italic">
                                Este scrollytelling integra analítica de datos y narrativa digital para explorar la seguridad vial desde una perspectiva humana.
                            </p>
                        </section>

                        <section className="border-l-2 border-[#8CC7C4] pl-4 space-y-2">
                            <h4 className="text-[10px] font-black uppercase text-slate-400">Tesis Narrativa</h4>
                            <p className="text-sm leading-relaxed text-justify">
                                Esta visualización explora una brecha crítica en la seguridad vial: la distancia entre lo que dicta la norma y lo que dicta el afecto. Cuestionando sobre la verdadera influencia, evidenciando que los vínculos personales superan la ley como motor de prevención. 
                            </p>
                        </section>

                        <footer className="pt-8">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                Universidad Santo Tomas. | Colombia 2026
                            </p>
                        </footer>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ContextoAcademico