import React from 'react';
import { Link } from 'react-router-dom'; 

const Competences = () => {
  return (
    <div className="mb-40">
      <h2 className="text-center font-bold text-5xl mt-10 mb-16">Compétences</h2>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap justify-center gap-16 mx-10">
          {/* Première ligne de divs */}
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2 text-center pb-4">Gérer le patrimoine informatique</h2>
              <ul className='list-disc'>
            <li className='text-green-500'><Link to="/c1.1">Recenser et identifier les ressources numériques</Link></li>
            <li className='text-red-500'><Link to="">Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</Link></li>
            <li className='text-green-500'><Link to="/c1.3">Mettre en place et vérifier les niveaux d’habilitation associés à un service</Link></li>
            <li className='text-red-500'><Link to="">Vérifier les conditions de la continuité d’un service informatique</Link></li>
            <li className='text-green-500'><Link to="/c1.5">Gérer des sauvegardes</Link></li>
            <li className='text-red-500'><Link to="">Vérifier le respect des règles d’utilisation des ressources numériques</Link></li>
              </ul>
          </div>
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2 text-center pb-4">Répondre aux incidents et aux demandes d’assistance et d’évolution</h2>
            <ul className='list-disc'>
            <li className='text-green-500'><Link to="/c2.1">Collecter, suivre et orienter des demandes</Link></li>
            <li className='text-green-500'><Link to="/c2.2">Traiter des demandes concernant les services réseau et système, applicatifs</Link></li>
            <li className='text-green-500'><Link to="/c2.3">Traiter des demandes concernant les applications</Link></li>
            </ul>
          </div>
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2 text-center pb-4">Développer la présence en ligne de l’organisation</h2>
            <ul className='list-disc'>
            <li className='text-green-500'><Link to="/c3.1">Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</Link></li>
            <li className='text-red-500'><Link to="">Référencer les services en ligne de l’organisation et mesurer leur visibilité</Link></li>
            <li className='text-green-500'><Link to="/c3.3">Participer à l’évolution d’un site Web exploitant les données de l’organisation</Link></li></ul>
          </div>
        </div>
        {/* Deuxième ligne de divs */}
        <div className="flex flex-wrap justify-center gap-16 m-10">
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2  text-center pb-4">Travailler en mode projet</h2>
            <ul className='list-disc'>
            <li className='text-red-500'><Link to="">Analyser les objectifs et les modalités d’organisation d’un projet</Link></li>
            <li className='text-green-500'><Link to="/c4.2">Planifier les activités</Link></li>
            <li className='text-red-500'><Link to="">Évaluer les indicateurs de suivi d’un projet et analyser les écarts</Link></li></ul>
          </div>
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2 text-center pb-4">Mettre à disposition des utilisateurs un service informatique</h2>
            <ul className='list-disc'>
            <li className='text-red-500'><Link to="">Réaliser les tests d’intégration et d’acceptation d’un service</Link></li>
            <li className='text-green-500'><Link to="/c5.2">Déployer un service</Link></li>
            <li className='text-green-500'><Link to="/c5.3">Accompagner les utilisateurs dans la mise en place d’un service</Link></li></ul>
          </div>
          <div className="border p-8 w-96 h-96 rounded-xl">
            <h2 className="text-lg font-bold mb-2 text-center pb-4">Organiser son développement professionnel</h2>
            <ul className='list-disc'>
            <li className='text-green-500'><Link to="/ParcoursCertif">Mettre en place son environnement d’apprentissage personnel</Link></li>
            <li className='text-green-500'><Link to="/c6.2">Mettre en œuvre des outils et stratégies de veille informationnelle</Link></li>
            <li className='text-red-500'><Link to="">Gérer son identité professionnelle</Link></li>
            <li className='text-red-500'><Link to="">Développer son projet professionnel</Link></li></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
