import React from 'react'
import Slider from '../Slider';

function Cashcash() {
    const images = [
        '../img/cashcash_screen/header_footer.png',
        '../img/cashcash_screen/tableClients.png', 
        '../img/cashcash_screen/detailsClient.png', 
        '../img/cashcash_screen/rechercheTechnicienParAssistant.png', 
        '../img/cashcash_screen/editerInter.png', 
        '../img/cashcash_screen/InterAValiderParTechnicien.png', 
        '../img/cashcash_screen/interValider.png', 
        '../img/cashcash_screen/stats.png', 

    ];

    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Cash-Cash</h2>
            <Slider images={images} />
            <p className='mx-auto w-1/2 text-center mb-32 text-xl'>Voici quelques images du site internet.<br></br>
             Nous avons crée notre propre charte graphique.<br></br>
             L'appli web a été faite en php/css/SQL (MVC sans framework)<br></br>
             Les assistants peuvent affecter des visites, modifier des interventions, consulter les infos des clients...<br></br>
             Tandis que le technicien peut consulter les interventions lui étant affectées, et les valider.<br></br>
             Il y a aussi un outil de stats (incomplet sur les illustrations)<br></br>
             Le jeu d'essai affiché est fictif et a été créé grâce à Laravel (Factory, Faker).      
             </p>
        </div>
    );
}

export default Cashcash
