import React from 'react';

const C2_3 = () => {
  return (
    <>

    <h2 className="text-center font-bold text-4xl mt-8 mb-8">Traiter des demandes concernant les applications</h2>
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

export default C2_3;
