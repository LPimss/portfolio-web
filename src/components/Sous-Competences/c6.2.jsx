import React from 'react';
import SliderText from '../SliderText';

const C6_2 = () => {
  const text = [
    'Utilisation de Feedly pour les flux RSS',
    'Utilisation de Digipad pour mettre en place les données recueillies '

    
];

const images = [
  '../img/sous_competences/c6/fluxrss.png', 
  '../img/sous_competences/c6/digipad.png'

  

];

return (
  <div>
    <h2 className="text-center font-bold text-4xl mt-8 mb-8 mx-auto w-1/2">Mettre en œuvre des outils et stratégies de veille informationnelle</h2>
    <SliderText images={images} text={text} />
  </div>
);
}

export default C6_2;
