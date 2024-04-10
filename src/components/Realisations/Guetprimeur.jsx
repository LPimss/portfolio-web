import React from 'react'
import Slider from '../Slider';

function Guetprimeur() {
    const images = [
        '../img/guetprimeur_screen/accueil.png', 
        '../img/guetprimeur_screen/catalogue.png', 
        '../img/guetprimeur_screen/gestionCatalogue.png', 
        '../img/guetprimeur_screen/panier.png', 
        '../img/guetprimeur_screen/connexion.png', 
        '../img/guetprimeur_screen/commandes.png',
        '../img/guetprimeur_screen/Modif.png',
        '../img/guetprimeur_screen/suppr.png',
        '../img/guetprimeur_screen/politique.png', 

 
    ];

    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Guet Primeur</h2>
            <Slider images={images} />
            <p className='mx-auto w-1/2 text-center mb-32 text-xl'>Voici quelques images du site internet.<br></br>
             Nous avons crée notre propre charte graphique<br></br>
              L'admin peut gérer les stocks et les prix en fonction des saisons.<br></br>
              L'utilisateur a accès au catalogue, peut constituer un catalogue et le confirmer pour passer commande.<br></br>
              Le site est fait entièrement en php/css/SQl sans framework.
              </p>
        </div>
    );
}

export default Guetprimeur
