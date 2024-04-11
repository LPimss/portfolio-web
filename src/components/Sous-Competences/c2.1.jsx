import React from 'react';

const C2_1 = () => {
  return (
    <>

    <h2 className="text-center font-bold text-4xl mt-8 mb-8">Mettre en place et vérifier les niveaux d’habilitation associés à un service</h2>
    <div className="flex justify-between w-screen h-screen">
      <iframe src="../doc/serveur.pdf" className="w-1/3 h-full mx-auto" title="PDF Viewer">
        <p>Votre navigateur ne prend pas en charge les PDF. Vous pouvez le télécharger à la place.</p>
      </iframe>
      <iframe src="../doc/InstallationGLPI.pdf" className="w-1/3 h-full mx-auto" title="PDF Viewer">
        <p>Votre navigateur ne prend pas en charge les PDF. Vous pouvez le télécharger à la place.</p>
      </iframe>
      <iframe src="../doc/UtilisationGLPI.pdf" className="w-1/3 h-full mx-auto" title="PDF Viewer">
        <p>Votre navigateur ne prend pas en charge les PDF. Vous pouvez le télécharger à la place.</p>
      </iframe>
    </div>

</>
  );
}

export default C2_1;
