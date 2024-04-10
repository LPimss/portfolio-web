import React from 'react';
import Slider from '../Slider';

function Aparte() {
    const images = [
        '../img/aparte_screen/carre1.png', 
        '../img/aparte_screen/carre2.png',  
        '../img/aparte_screen/carre3.png', 
        '../img/aparte_screen/carre4.png',    
        '../img/aparte_screen/artT.png', 
        '../img/aparte_screen/cc.png', 
        '../img/aparte_screen/contact.png', 
        '../img/aparte_screen/expos.png', 
        '../img/aparte_screen/expos2.png', 
        '../img/aparte_screen/expos3.png', 
        '../img/aparte_screen/privat.png', 
        '../img/aparte_screen/privat2.png', 
        '../img/aparte_screen/video.png', 
    ];

    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Aparte</h2>
            <Slider images={images} />
            <p className='mx-auto w-1/2 text-center mb-32 text-xl'>Voici quelques images du site internet.<br></br>
             Nous avons dû respecter une charte graphique bien précise.<br></br>
              Chaque texte/image est modifiable en compte administrateur.<br></br>
              La page de contact est fonctionnelle lorsque le site web est hebergé, et possède un serveur web.
              Les textes et images étaient présents pour les tests, il fallait donc que la propriétaire du site y mette son contenu afin de finaliser,
              ça n'a jamais été fait et donc jamais été publié.</p>
        </div>
    );
}

export default Aparte;
