import React from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link de react-router-dom

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div>
        <span className="font-bold">Portfolio de Roulez Kélian</span>
      </div>
      <nav>
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className="hover:text-gray-300">Accueil</Link>
          </li>
          <li>
            <Link to="/Competences" className="hover:text-gray-300">Compétences</Link>
          </li>
          <li>
            <Link to="/Realisations" className="hover:text-gray-300">Réalisations</Link>
          </li>
          <li>
            <Link to="/Stages" className="hover:text-gray-300">Stages</Link>
          </li>
          <li>
            <Link to="/Certifications" className="hover:text-gray-300">Certifications</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
