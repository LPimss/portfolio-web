import React from 'react';
import SliderText from '../SliderText';

const C4_2 = () => {
    const text = [
        'Planificateur Guetprimeur'

        
    ];
  
    const images = [
      '../img/sous_competences/c4/planner.png', 

      
  
    ];
  
  return (
      <div>
        <h2 className="text-center font-bold text-4xl mt-8 mb-8 mx-auto w-1/2">Planifier les activités</h2>
        <SliderText images={images} text={text} />
      </div>
    );
}

export default C4_2;
