import React from 'react';
import Slider from '../Slider';

function ParcoursCertif() {
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
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Parcous de Certification</h2>
            <Slider images={images} />
            <p className='mx-auto w-1/2 text-center mb-32 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam cupiditate quibusdam ipsam enim velit voluptatem. Hic eum perferendis eius blanditiis facere dignissimos suscipit reprehenderit voluptatum doloribus, sed sapiente non est tenetur, quod repellendus aliquam placeat qui possimus? Quae facere commodi eaque voluptates earum voluptatum incidunt sequi atque quod, eum cum beatae neque quos, iste amet accusamus sint, nemo nihil maxime.</p>
        </div>
    );
}

export default ParcoursCertif;