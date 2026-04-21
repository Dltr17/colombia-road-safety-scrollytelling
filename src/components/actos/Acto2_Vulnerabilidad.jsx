import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bike, Car } from "lucide-react";


function Acto2_Vulnerabilidad() {
  
    const datos = [
    { actor: "Peatones", valor: "62.9%", icon: <User />, desc: "Se sienten inseguros al caminar." },
    { actor: "Ciclistas", valor: "70.8%", icon: <Bike />, desc: "El grupo con mayor percepción de riesgo." },
    { actor: "Apps", valor: "20.0%", icon: <Car />, desc: "Reportan los niveles más altos de confianza." }
  ];

    return (
    <section className="min-h-screen bg-vial-blue text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Rostros de la Vulnerabilidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {datos.map((d, i) => (
            <Card key={i} className="bg-white/10 border-white/20 text-white backdrop-blur-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-vial-teal rounded-lg text-vial-blue">{d.icon}</div>
                <CardTitle>{d.actor}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-2">{d.valor}</div>
                <p className="text-vial-teal/80">{d.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Acto2_Vulnerabilidad