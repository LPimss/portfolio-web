import React from 'react';
import { Link } from 'react-router-dom';


const Stages = () => {
  return (
<div>
      <h2 className="text-center font-bold text-5xl mt-8">Certifications</h2>
      <div className="flex flex-col items-center mt-24 h-screen">
        <div className="flex flex-wrap justify-center gap-8 mx-10">
          {/* Première ligne de divs */}
          <div className="border border-promotors-blue p-8 w-80 h-auto rounded-xl">
            <img className=' mx-auto w-auto h-24' src='../img/certif_screen/cybersecu.png'></img>
            <p className='mt-6 text-center text-promotors-blue'>
            Afin de préparer une Certification, j'ai réalisé cette année quelques tâches en rapport avec la cyber-sécurité.    

            </p>
            <Link to="/ParcoursCertif"><p className='mt-6 text-center text-promotors-blue font-bold underline '>Découvrir</p></Link>
          </div>
       </div>
      </div>
</div>   
  );
}

export default Stages;