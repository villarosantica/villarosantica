import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

// Percorsi relativi dalla cartella public (non usare src/)
const images = [
  '/uploads/hero-carousel-photo/1.jpg',
  '/uploads/hero-carousel-photo/2.jpg',
  '/uploads/hero-carousel-photo/3.jpg',
  '/uploads/hero-carousel-photo/4.jpg',
];

export default function HeroCarousel() {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      autoplay: 5000,
      animationDuration: 1000,
      perView: 1,
    });
    glide.mount();
  }, []);

  return (
    <div className="glide relative">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((src, i) => (
            <li key={i} className="glide__slide">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Bottoni freccia */}
      <div
        className="glide__arrows absolute top-1/2 left-0 w-full flex justify-between px-4 z-10"
        data-glide-el="controls"
      >
        <button
          className="glide__arrow glide__arrow--left bg-black/50 text-white text-xl px-4 py-2 rounded-full hover:bg-black/70"
          data-glide-dir="<"
        >
          ‹
        </button>
        <button
          className="glide__arrow glide__arrow--right bg-black/50 text-white text-xl px-4 py-2 rounded-full hover:bg-black/70"
          data-glide-dir=">"
        >
          ›
        </button>
      </div>
    </div>
  );
}
