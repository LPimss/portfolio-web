import React from 'react'

const Accueil = () => {
  return (
  <>
    <div className="flex flex-col items-center justify-center h-1/2 bg-gray-300">
      <div className="rounded-full w-36 h-36 bg-gray-300 flex items-center justify-center mb-4">
        <img src="..\img\shrek.png" alt="Image" className="rounded-full w-32 h-32" />
      </div>
      <div className="text-4xl">Kélian Roulez</div>
        <div className="mx-52 my-10 text-center">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
        </div>
    </div>

    <div className='flex mb-4 my-12 justify-center'>

      <div className='flex flex-col  w-1/2 items-center border-r-4 border-black'>
        <h2 className='text-xl my-8 font-semibold'>Infos</h2>
        <a href='../doc/cv.pdf' target='_blank'>
        <img className='w-56 h-80' src='..\img\cv.png' alt='CV'></img>
        <div>
          Cliquez pour obtenir un aperçu
        </div>
        </a>
      </div>

      <div className='flex flex-col justify-center items-center w-1/2'>
      <h2 className='text-xl my-8 font-semibold'>Compétences</h2>
      <div className='flex items-center gap-x-4 my-4'>
        <img className='w-12 h-12' src='..\img\html.png'></img>
        <p className='text-xl'>HTML</p>
      </div>
      <div className='flex items-center gap-x-4 my-4'>
        <img className='w-12 h-12' src='..\img\css.png'></img>
        <p className='text-xl'>CSS</p>
      </div>
      <div className='flex items-center gap-x-4 my-4'>
        <img className='w-12 h-10' src='..\img\php.png'></img>
        <p className='text-xl'>PHP</p>
      </div>
      <div className='flex items-center gap-x-4 my-4'>
        <img className='w-12 h-12' src='..\img\java.png'></img>
        <p className='text-xl'>Java</p>
      </div>
    </div>


    </div>
    
      
  </>
  )
}

export default Accueil