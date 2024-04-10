import React from 'react';
import SliderText from '../SliderText';

const C1_3 = () => {
    const text = [
        'Carte cadeau sur le site Aparté', 
        "Presentation des formules"

        
    ];
  
    const images = [
      '../img/sous_competences/c3/cc.png', 
      '../img/sous_competences/c3/formation.png',  

      
  
    ];
  
  return (
      <div>
        <h2 className="text-center font-bold text-4xl mt-8 mb-8 mx-auto w-1/2">Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</h2>
        <SliderText images={images} text={text} />
      </div>
    );
}

export default C1_3;
