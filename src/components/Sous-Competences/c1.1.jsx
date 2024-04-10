import React from 'react';
import SliderText from '../SliderText';

  const C1_1 = () => {
    const text = [
      'La charte graphique à respecter', 
      "L'existant : Logo",
      "L'existant : carte cadeaux",
      "L'existant : Photos"
      
  ];

  const images = [
    '../img/sous_competences/c1/charte.jpg', 
    '../img/sous_competences/c1/existant_logo.png',  
    '../img/sous_competences/c1/existant_cc.png',
    '../img/sous_competences/c1/existant_photos.png'
    

  ];

return (
    <div>
      <h2 className="text-center font-bold text-4xl mt-8 mb-8">Recenser et identifier les ressources numériques</h2>
      <SliderText images={images} text={text} />
    </div>
  );
}

export default C1_1;
