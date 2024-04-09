import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Tableau de données représentant les images et leurs textes associés
const imagesData = [
  { src: 'chemin/vers/image1.jpg', text: 'Texte associé à l\'image 1' },
  { src: 'chemin/vers/image2.jpg', text: 'Texte associé à l\'image 2' },
  { src: 'chemin/vers/image3.jpg', text: 'Texte associé à l\'image 3' },
  // Ajoutez d'autres images et textes associés au besoin
];

const SliderLayout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2>Slider d'images avec texte associé</h2>
      <Slider {...settings}>
        {imagesData.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p>{image.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderLayout;
