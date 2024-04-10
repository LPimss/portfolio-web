import React from 'react';
import SliderText from '../SliderText';

const C1_3 = () => {
    const text = [
        'Espace de Connexion Aparte', 
        "Espace Admin Aparte",
        "Espace de connexion Promotors",
        "Espace Admin Promotors",
        "Bdd Promotors"
        
    ];
  
    const images = [
      '../img/sous_competences/c1/connexion_aparte.png', 
      '../img/sous_competences/c1/admin_aparte.png',  
      '../img/sous_competences/c1/connexion_promotors.png',
      '../img/sous_competences/c1/admin_promotors.png',
      '../img/sous_competences/c1/bdd_promotors.png'
      
  
    ];
  
  return (
      <div>
        <h2 className="text-center font-bold text-4xl mt-8 mb-8">Mettre en place et vérifier les niveaux d’habilitation associés à un service</h2>
        <SliderText images={images} text={text} />
      </div>
    );
}

export default C1_3;
