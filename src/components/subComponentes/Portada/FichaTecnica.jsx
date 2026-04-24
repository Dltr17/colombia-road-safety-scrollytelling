import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Database, Table2, Info, ExternalLink, Filter, Search } from "lucide-react"

function FichaTecnica() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#2C687B] transition-colors">
                <Database size={14} /> Ficha Técnica
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="text-left space-y-4">
                    <SheetTitle className="text-[#2C687B] uppercase text-sm tracking-widest border-b pb-2">
                        Metadatos y Metodología
                    </SheetTitle>
                    
                    <SheetDescription className="text-slate-700 space-y-6 pt-4">
                        {/* PREGUNTA DE INVESTIGACIÓN */}
                        <section className="bg-[#2C687B]/5 p-4 rounded-lg border-l-4 border-[#2C687B]">
                            <h4 className="font-bold text-[#2C687B] text-xs uppercase flex items-center gap-2">
                                <Search size={14} /> Pregunta de estudio
                            </h4>
                            <p className="text-sm mt-2 font-medium italic">
                                "¿Quién influye más en el comportamiento vial?"
                            </p>
                        </section>

                        {/* UNIVERSO DE DATOS */}
                        <section>
                            <h4 className="font-bold text-black flex items-center gap-2 text-xs uppercase">
                                <Table2 size={16} /> Universo de Datos
                            </h4>
                            <p className="text-xs mt-2 text-justify">
                                Dataset procesado corresponde a la <strong>Encuesta territorial de comportamiento en seguridad vial</strong>  para Colombia, publicada por la Agencia Nacional de Seguridad Vial con fecha de actualización a diciembre de 2025. Esta base cuenta con <strong>9.232 registros</strong>, disponible desde el portal datos.gov 
                                La integridad del universo original se mantuvo al 100%, sin eliminación de datos faltantes, asegurando una representación fiel de la muestra territorial.
                            </p>
                        </section>

                        {/* TRATAMIENTO CON OPENREFINE */}
                        <section>
                            <h4 className="font-bold text-black text-xs uppercase flex items-center gap-2">
                                <Filter size={14} /> Limpieza y Transformación
                            </h4>
                            <p className="text-xs mt-2 text-justify">
                                Se utilizó <strong>OpenRefine</strong> para el "Data Wrangling", estandarizando variables cualitativas y ajustando la estructura para su posterior análisis exploratorio en <strong>Tableau</strong>. Este proceso permitió identificar las variables clave que dan origen a la narrativa de este storytelling.
                            </p>
                        </section>

                        {/* REFERENCIAS Y ECOSISTEMA */}
                        <section className="space-y-1 border-t pt-1">
                            <h4 className="font-bold text-black text-xs uppercase">Fuentes y Producción Previa</h4>
                            
                            <div className="space-y-2">
                                <div className="text-[11px] bg-slate-50 p-1 rounded">
                                    <p className="font-bold text-slate-900">Agencia Nacional de Seguridad Vial (2021)</p>
                                    <p>Encuesta territorial de comportamiento en seguridad vial.</p>
                                    <a href="https://www.datos.gov.co/Transporte/Encuesta-territorial-de-comportamiento-en-segurida/cm2t-qreq" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
                                        Data Source <ExternalLink size={10} />
                                    </a>
                                </div>

                                <div className="text-[11px] bg-slate-50 p-1 rounded">
                                    <p className="font-bold text-slate-900 text-xs">Lotero Vásquez, D.F. (2025)</p>
                                    <p>Seguridad Vial: Factores Clave en la Percepción de Riesgo.</p>
                                    <a href="https://public.tableau.com/app/profile/diego.lotero/viz/SeguridadVial_17615226136260/SeguridadVialFactoresClaveenlaPercepcindeRiesgoeInfluencia" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
                                        Explorar en Tableau Public <ExternalLink size={10} />
                                    </a>
                                </div>

                                <div className="text-[11px] bg-slate-50 p-1 rounded">
                                    <p className="font-bold text-slate-900 text-xs">Lotero Vásquez, D.F. (2025)</p>
                                    <p>¿A Quién Escuchas en la Vía? [Narrativa Interactiva].</p>
                                    <a href="https://view.genially.com/69054936ce2822013f1ab380/interactive-content-a-quien-escuchas-en-la-via" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
                                        Ver en Genially <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </section>

                        <footer className="pt-4 opacity-60">
                            <h4 className="font-bold text-black text-[10px] uppercase flex items-center gap-2">
                                <Info size={12} /> Nota de Integridad
                            </h4>
                            <p className="text-[10px] italic mt-1">
                                Procesamiento de datos orientado a la ética de la información: Selección de variables basada en relevancia estadística y narrativa, sin sesgo por eliminación de registros.
                            </p>
                        </footer>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default FichaTecnica