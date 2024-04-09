import React from 'react';

const Competences = () => {
  return (
    <div>
      <h2>Compétences</h2>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Première ligne de divs */}
          <div className="border p-4 w-96 h-80">
            <h2 className="text-lg font-bold mb-2">Titre 1</h2>
            <p>Sous-titre 1</p>
          </div>
          <div className="border p-4 w-96 h-80">
            <h2 className="text-lg font-bold mb-2">Titre 2</h2>
            <p>Sous-titre 2</p>
          </div>
          <div className="border p-4 w-96 h-80">
            <h2 className="text-lg font-bold mb-2">Titre 3</h2>
            <p>Sous-titre 3</p>
          </div>
        </div>
        {/* Deuxième ligne de divs */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="border p-4 w-96 h-80">
            <h2 className="text-lg font-bold mb-2">Titre 4</h2>
            <p>Sous-titre 4</p>
          </div>
          <div className="border p-4 w-96 h-80">
            <h2 className="text-lg font-bold mb-2">Titre 5</h2>
            <p>Sous-titre 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
