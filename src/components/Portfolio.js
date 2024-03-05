import React, { useState } from 'react';
import './Portfolio.css'; // Import the CSS file

export default function Portfolio() {
  const [images, setImages] = useState([
    { src: "assets/img/portfolio/1.png", type: "We tricked you! This picture is AI generated!" }, // Specify image type
    { src: "assets/img/portfolio/2.png", type: "We tricked you! This picture is AI generated!" }, // Specify image type
    { src: "assets/img/portfolio/3.png", type: "Oops, you found the real one! I guess we have to work better on our model!" }, // Specify image type
  ]);

  const handleImageClick = (index) => {
    alert(images[index].type);
  };

  return (
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Imagination Samples</h2>
          <h3 class="section-subheading text-muted">Can you guess which pictures are real and which ones are AI generated?</h3>
        </div>
        <div class="row">
          {images.map((image, index) => (
            <div class="col-lg-4 col-sm-6 mb-4" key={index}>
              <div class="portfolio-item">
                <a class="portfolio-link" onClick={() => handleImageClick(index)}>
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img class="img-fluid" src={image.src} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Image {index + 1}</div>
                  <div class="portfolio-caption-subheading text-muted">Take a guess and click on the image to see the answer!</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
