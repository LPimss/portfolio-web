import React from 'react';
import SliderText from '../SliderText';

function ParcoursCertif() {
    const images = [
        '../img/certif_screen/rootme.png',
        '../img/certif_screen/seela.png'

    ];

    const text = [
        'RootMe',
        'Seela'

    ];

    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Parcours de Certification</h2>
            <SliderText images={images} text={text} />
        </div>
    );
}

export default ParcoursCertif;