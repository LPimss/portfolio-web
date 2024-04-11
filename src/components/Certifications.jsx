import React from 'react';
import { Link } from 'react-router-dom';


const Stages = () => {
  return (
<div>
      <h2 className="text-center font-bold text-5xl mt-8">Certifications</h2>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap justify-center gap-8 mx-10">
          {/* Première ligne de divs */}
          <div className="border border-aparte1 p-8 w-80 h-auto rounded-xl">
            <img className=' mx-auto w-auto h-24' src='../img/aparte.png'></img>
            <p className='mt-6 text-center text-promotors-blue'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, voluptatum! Harum ab exercitationem eligendi quod illum veniam doloremque sit ad tenetur cum? Veniam sint voluptas incidunt harum! Deleniti quisquam, rem reiciendis ipsa commodi magnam cumque minus inventore, magni eligendi quia beatae ad quis ullam vero laudantium? Numquam iusto est consequatur.</p>
            <Link to="/ParcoursCertif"><p className='mt-6 text-center text-aparte1 font-bold underline '>Découvrir</p></Link>
          </div>
       </div>
      </div>
</div>   
  );
}

export default Stages;