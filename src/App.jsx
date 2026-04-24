import Acto0_Portada from "./components/actos/Acto0_Portada";
import Acto1_MapaMiedo from "./components/actos/Acto1_MapaMiedo";
import Acto2_Vulnerabilidad from "./components/actos/Acto2_Vulnerabilidad";
import Acto3_Influencia from "./components/actos/Acto3_Influencia";
import Acto4_Control from "./components/actos/Acto4_Control";
import ContextoAcademico from "./components/subComponentes/Portada/ContextoAcademico";
import FichaTecnica from "./components/subComponentes/Portada/FichaTecnica";


function App() {
  return (
   <main className="selection:bg-vial-red selection:text-white">
       
      <div className="fixed bottom-6 right-6 z-50">
        <ContextoAcademico />
        <FichaTecnica />
      </div>

      <Acto0_Portada />
      <Acto1_MapaMiedo />
      <Acto2_Vulnerabilidad />
      <Acto3_Influencia />
      <Acto4_Control />
    </main>
  );
}

export default App;