import React, { useEffect } from 'react';
import '../styles/InspoComponent.css';

import wash from '../assets/wash.jpeg';
import braids from '../assets/knot.jpeg';
import twists from '../assets/twists.jpeg';
import corn from '../assets/corn.jpg';
import ghana from '../assets/ghana.jpeg';
import curls from '../assets/curls.jpeg';
import wig from '../assets/wig.jpeg';
import locs from '../assets/locs.jpeg';
import butterfly from '../assets/butterfly.jpeg';
import fulani from '../assets/fulani.jpeg';
import knotless from '../assets/knot.jpeg';
import passion from '../assets/passion.jpeg';
import bohemian from '../assets/boheimian.jpeg';
import bantu from '../assets/bantu.jpeg';
import micro from '../assets/micro.jpeg';

const inspoImages = [
  { src: wash, name: "wash.jpeg" },
  { src: braids, name: "braids.jpeg" },
  { src: twists, name: "twists.jpeg" },
  { src: corn, name: "corn.jpg" },
  { src: ghana, name: "ghana.jpeg" },
  { src: curls, name: "curls.jpeg" },
  { src: wig, name: "wig.jpeg" },
  { src: locs, name: "locs.jpeg" },
  { src: butterfly, name: "butterfly.jpeg" },
  { src: fulani, name: "fulani.jpeg" },
  { src: knotless, name: "knotless.jpeg" },
  { src: passion, name: "passion.jpeg" },
  { src: bohemian, name: "bohemian.jpeg" },
  { src: bantu, name: "bantu.jpeg" },
  { src: micro, name: "micro.jpeg" }
];

const InspoComponent = () => {
  useEffect(() => {
    const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let bg = entry.target;
          bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
          observer.unobserve(bg);
        }
      });
    });

    lazyBackgrounds.forEach(bg => observer.observe(bg));
  }, []);

  return (
    <div className="inspo-container">
      <div className="inspo-title">
        <p>Need Some Hair Inspo?</p>
      </div>
      <div className="inspo-grid">
        {inspoImages.map((image, index) => (
          <a key={index} href={image.src} download={image.name} className="inspo-card-link">
            <div className="inspo-card lazy-bg" data-bg={image.src}></div>
          </a>
        ))}
      </div>
      <div className="disclaimer">
        <p>*Found something you love? Click to download and show your stylist!* 💕</p>
      </div>
    </div>
  );
};

export default InspoComponent;
