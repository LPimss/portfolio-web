import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Accueil from './components/Accueil';
import Projets from './components/Projets';
import Stages from './components/Stages';
import Realisations from './components/Realisations';
import Certifications from './components/Certifications';
import Competences from './components/Competences';
import C1_1 from './components/Sous-Competences/c1.1';
import C1_2 from './components/Sous-Competences/c1.2';
import C1_3 from './components/Sous-Competences/c1.3';
import C1_4 from './components/Sous-Competences/c1.4';
import C1_5 from './components/Sous-Competences/c1.5';
import C1_6 from './components/Sous-Competences/c1.6';
import C2_1 from './components/Sous-Competences/c2.1';
import C2_2 from './components/Sous-Competences/c2.2';
import C2_3 from './components/Sous-Competences/c2.3';
import C3_1 from './components/Sous-Competences/c3.1';
import C3_2 from './components/Sous-Competences/c3.2';
import C3_3 from './components/Sous-Competences/c3.3';
import C4_1 from './components/Sous-Competences/c4.1';
import C4_2 from './components/Sous-Competences/c4.2';
import C4_3 from './components/Sous-Competences/c4.3';
import C5_1 from './components/Sous-Competences/c5.1';
import C5_2 from './components/Sous-Competences/c5.2';
import C5_3 from './components/Sous-Competences/c5.3';
import C6_1 from './components/Sous-Competences/c6.1';
import C6_2 from './components/Sous-Competences/c6.2';
import C6_3 from './components/Sous-Competences/c6.3';
import C6_4 from './components/Sous-Competences/c6.4';

import Promotors from './components/Realisations/Promotors';
import Aparte from './components/Realisations/Aparte';
import Guetprimeur from './components/Realisations/Guetprimeur';
import Cashcash from './components/Realisations/Cashcash';
import ParcoursCertif from './components/Realisations/ParcoursCertif';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Accueil/>} />
        <Route path="Stages" element={<Stages/>} /> 
        <Route path="Competences" element={<Competences/>} /> 
        <Route path="Realisations" element={<Realisations/>} /> 
        <Route path="Certifications" element={<Certifications/>} /> 
        <Route path="projets" element={<Projets/>} />

        <Route path="/c1.1" element={<C1_1 />} />
        <Route path="/c1.2" element={<C1_2 />} />
        <Route path="/c1.3" element={<C1_3 />} />
        <Route path="/c1.4" element={<C1_4 />} />
        <Route path="/c1.5" element={<C1_5 />} />
        <Route path="/c1.6" element={<C1_6 />} />

        <Route path="/c2.1" element={<C2_1 />} />
        <Route path="/c2.2" element={<C2_2 />} />
        <Route path="/c2.3" element={<C2_3 />} />

        <Route path="/c3.1" element={<C3_1 />} />
        <Route path="/c3.2" element={<C3_2 />} />
        <Route path="/c3.3" element={<C3_3 />} />

        <Route path="/c4.1" element={<C4_1 />} />
        <Route path="/c4.2" element={<C4_2 />} />
        <Route path="/c4.3" element={<C4_3 />} />

        <Route path="/c5.1" element={<C5_1 />} />
        <Route path="/c5.2" element={<C5_2 />} />
        <Route path="/c5.3" element={<C5_3 />} />

        <Route path="/c6.1" element={<C6_1 />} />
        <Route path="/c6.2" element={<C6_2 />} />
        <Route path="/c6.3" element={<C6_3 />} />
        <Route path="/c6.4" element={<C6_4 />} />

        <Route path="/Promotors" element={<Promotors />} />
        <Route path="/Aparte" element={<Aparte />} />
        <Route path="/Guetprimeur" element={<Guetprimeur />} />
        <Route path="/Cashcash" element={<Cashcash />} />
        <Route path="/ParcoursCertif" element={<ParcoursCertif />} />
      </Route>
    </Routes>
  );
}

export default App;