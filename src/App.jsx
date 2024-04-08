import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Accueil from './components/Accueil';
import Projets from './components/Projets';
import Competences from './components/Competences';
import Stages from './components/Stages';
import Realisations from './components/Realisations';
import Certifications from './components/Certifications';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Accueil/>} />
        <Route path="Competences" element={<Competences/>} /> 
        <Route path="Stages" element={<Stages/>} /> 
        <Route path="Realisations" element={<Realisations/>} /> 
        <Route path="Certifications" element={<Certifications/>} /> 
        <Route path="projets" element={<Projets/>} />
      </Route>
    </Routes>
  );
}

export default App;
