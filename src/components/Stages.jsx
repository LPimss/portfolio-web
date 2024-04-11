import React from 'react';
import { Link } from 'react-router-dom';


const Stages = () => {
  return (
<div>
      <h2 className="text-center font-bold text-5xl mt-8">Stages</h2>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap justify-center gap-8 mx-10">
          {/* Première ligne de divs */}
          <div className="border border-aparte1 p-8 w-80 h-auto rounded-xl">
            <img className=' mx-auto w-auto h-24' src='../img/aparte.png'></img>
            <p className='mt-6 text-center text-promotors-blue'>J'ai réalisé un stage de 8 semaines dans l'entreprise Aparté. <br></br>C'est une entreprise d'art et sculptures située à Roubaix <br></br>L'objectif était de créer un site web en collaboration avec un élève de ma section ainsi qu'un élève de section communication.<br></br> Le site devait être à la fois vitrine et initiation à l'art.</p>
            <Link to="/Aparte"><p className='mt-6 text-center text-aparte1 font-bold underline '>Découvrir</p></Link>


          </div>
          <div className=" border-promotors-green border p-8 w-80 h-auto rounded-xl">
            <img className=' mx-auto w-auto h-auto' src='../img/promotors.jpeg'></img>
            <p className='mt-6 text-center text-promotors-blue'>J'ai réalisé un stage de 6 semaines dans l'entreprise Pro'Motors59.<br></br> C'est une entreprise d'achat et vente de véhicules d'occasions située à Quesnoy-Sur-Deûle.<br></br> L'objectif est de réaliser un site internet en collaboration avec un élève de ma section.<br></br> Le site comprendra une partie vitrine avec la possibilité à l'admin d'ajouter/supprimer des véhicules et à l'utilisateur de mettre des véhicules en favoris.</p>
            <Link to="/Promotors"><p className='mt-6 text-center text-promotors-green font-bold underline '>Découvrir</p></Link>


          </div>
       </div>
      </div>
    </div>
  );
}

export default Stages;