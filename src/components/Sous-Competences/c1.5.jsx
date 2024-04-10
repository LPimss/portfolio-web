import React from 'react';
import { useState } from 'react';

const C1_5 = () => {
    const [showPdf, setShowPdf] = useState(false);

    const handleClick = () => {
        setShowPdf(true);
    };

    return (
      <div className="w-screen h-screen">
      <iframe src="../doc/sauvegarde.pdf" className="w-1/2 h-full mx-auto" title="PDF Viewer">
          <p>Votre navigateur ne prend pas en charge les PDF. Vous pouvez le télécharger à la place.</p>
      </iframe>
  </div>
    );
};

export default C1_5;
