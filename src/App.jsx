import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Accueil from './components/Accueil';
import Projets from './components/Projets';


function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Accueil/>}></Route>
      <Route path="projets" element={<Projets/>}/>
    </Route>
   </Routes>
  )
}

export default App