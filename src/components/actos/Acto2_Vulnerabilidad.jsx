import React from 'react'
import { Footprints, Bike, CarFront, Bus, Car, Motorbike, Vibrate, Smartphone } from "lucide-react"
import VulnerabilityCarousel from '../subComponentes/Vulnerabilidad/VulnerabilityCarousel';


function Acto2_Vulnerabilidad() {

  const datosVial = [
    {
      actor: "Transporte Activo Vulnerable",
      valor: 66.9,
      label: "66.9%",
      desc: "Los peatones y ciclistas representan el corazón expuesto de la movilidad. El 62.96% de quienes caminan y el 70.84% de los que pedalean sienten que su seguridad es nula o deficiente. Sin una carrocería que los proteja, estos actores enfrentan una infraestructura hostil donde la fragilidad física se traduce en una sensación de peligro constante al transitar por las calles.",
      icon: <Footprints />
    },
    {
      actor: "Particular",
      valor: 67.85,
      label: "57.85%",
      desc: "Poseer un vehículo propio no garantiza tranquilidad en la vía. El 64.47% de los conductores de carro particular y el 71.23% de los motociclistas se sienten vulnerables bajo las categorías de nada o poco seguros. A pesar de viajar en su propio espacio, la interacción con el entorno urbano sigue siendo una fuente significativa de estrés y desconfianza para estos conductores.",
      icon: <Car />
    },
    {
      actor: "Motorizado No Regulado",
      valor: 80.45,
      label: "80.45%",
      desc: "En la informalidad de los bicitaxis y mototaxis, la vulnerabilidad alcanza niveles críticos. Para el mototaxismo, un alarmante 81.44% de los pasajeros reporta una percepción de inseguridad alta, mientras que en bicitaxis la cifra llega al 79.46%. Estos actores transitan al margen de la regulación, donde el riesgo parece ser el único pasajero constante en cada viaje realizado por la ciudad.",
      icon: <Motorbike />
    },
    {
      actor: "Transporte Masivo",
      valor: 75.33,
      label: "75.33%",
      desc: "El transporte masivo y las rutas escolares reflejan una crisis de confianza en el movimiento colectivo. Un impactante 74.88% de los usuarios de sistemas masivos se percibe en riesgo, sumando las categorías de nada y poco seguro. Incluso en rutas escolares o laborales, el 75.87% comparte este sentimiento, evidenciando que los desplazamientos grupales no ofrecen el resguardo esperado por la ciudadanía.",
      icon: <Bus />
    },
    {
      actor: "Transporte Público Tradicional",
      valor: 68.427,
      label: "68.42%",
      desc: "Los pilares tradicionales del transporte público enfrentan un panorama sombrío de desconfianza. En buses y colectivos, el 73.64% de los pasajeros se siente entre nada y poco seguro, mientras que en el servicio de taxi esta percepción afecta al 63.21% de los usuarios. La larga tradición de estos servicios no ha logrado construir un entorno que brinde calma o protección real.",
      icon: <CarFront />
    },
    {
      actor: "Uber, Beat, Cabify o Picap",
      valor: 65.71,
      label: "65.7%",
      desc: "Los usuarios que dependen de plataformas digitales enfrentan una paradoja de modernidad y desconfianza. Aunque se perciben como alternativas de movilidad, la realidad es que el 65.71% de quienes utilizan aplicaciones similares manifiestan sentirse entre nada y poco seguros; sin embargo registran el nivel más alto de percepcion de seguridad con un 20,00%. y obliga a preguntarnos: ¿qué están haciendo bien las plataformas que el sistema tradicional ha olvidado?",
      //icon: <Smartphone />
      icon: <Vibrate  />
    }
    
  ];

  return (
    <section className="min-h-screen flex flex-col justify-between py-16 px-12">
      <div className="w-full max-w-300 mx-auto text-center space-y-6">
<span className="text-vial_red font-geist-bold tracking-widest uppercase text-sm">Acto II</span>

        <h2 className="text-vial-blue text-6xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          El Rostro de la <span className="text-vial-teal">Vulnerabilidad</span>
        </h2>

        <p className="text-xl font-light text-vial-teal mt-2">
          Esta inseguridad no es solo geográfica; tiene medios de transporte específicos y dependiendo de cómo te muevas, el asfalto se siente más hostil. Esta fragilidad no se queda en una encuesta de opinión; se materializa en el hospital y en la morgue. A febrero de 2026, la frialdad de las cifras nos golpea con <span className='text-vial-teal font-black'>2.432 personas lesionadas</span>  por siniestros viales.
        </p>
      </div>

      <div className="w-full grow flex items-center justify-center py-5">
        <VulnerabilityCarousel items={datosVial} />
      </div>

     
    </section>
  )
}

export default Acto2_Vulnerabilidad