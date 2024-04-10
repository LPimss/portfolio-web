import React from 'react'
import Slider from '../Slider';

function Promotors() {
    const images = [
        '../img/promotors_screen/accueil.png', 
        '../img/promotors_screen/catalogue.png',
        '../img/promotors_screen/detailVehicule.png',
        '../img/promotors_screen/connexion.png',
        '../img/promotors_screen/inscription.png',
        '../img/promotors_screen/contact.png',
        '../img/promotors_screen/profil.png',
        '../img/promotors_screen/saisieVehicules.png',
        '../img/promotors_screen/ajouterImage.png',
        '../img/promotors_screen/ajouterImage2.png',
    ];

    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-8 mb-8">Pro'Motors 59</h2>
            <Slider images={images} />
            <p className='mx-auto w-1/2 text-center mb-32 text-xl'>Voici quelques images du site internet.<br></br>
             Nous avons dû respecter une charte graphique bien précise.<br></br>
              Il possible pour l'administrateur d'ajouter des véhicules au catalogue.<br></br>
              Les utilisateurs peuvent se connecter et mettre en favoris des véhicules, ils peuvent aussi changer leurs infos personnelles eux-mêmes<br></br>
              Il reste pas mal de corrections visuels, et quelques changements pratiques au niveau du traitement, je suis toujours en contact avec l'entreprise et le projet se terminera donc prochainement.
              <br></br>Il est trouvable à l'adresse : <a className="underline" href="https://promotors59.wstr.fr">promotors59.wstr.fr</a> Pour avoir un meilleur visuel.
              </p>
        </div>
    )
}

export default Promotors
