"use client";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  {
    id: 1,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.13 PM (2).jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.12 PM (1).jpeg",
    width: 1600,
    height: 900,
  },
  { id: 3, src: "/images/IMG_20240725_230252.jpg", width: 3072, height: 2953 },
  { id: 4, src: "/images/MAN00946.jpg", width: 1600, height: 900 },
  { id: 5, src: "/images/MAN00961.jpg", width: 1400, height: 900 },
  { id: 6, src: "/images/MAN09997.jpg", width: 2072, height: 3000 },
  { id: 7, src: "/images/MAN00987.jpg", width: 800, height: 600 },
  {
    id: 8,
    src: "/images/WhatsApp Image 2025-02-03 at 11.32.13 PM.jpeg",
    width: 600,
    height: 600,
  },
  {
    id: 9,
    src: "/images/WhatsApp Image 2025-02-03 at 11.32.14 PM (1).jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: "/images/WhatsApp Image 2025-02-03 at 11.32.14 PM (2).jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: "/images/WhatsApp Image 2025-02-03 at 11.32.14 PM.jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.00 PM.jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 13,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.01 PM.jpeg",
    width: 800,
    height: 600,
  },
  {
    id: 14,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.10 PM.jpeg",
    width: 1000,
    height: 600,
  },
  {
    id: 15,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.11 PM (1).jpeg",
    width: 400,
    height: 600,
  },
  {
    id: 16,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.11 PM (2).jpeg",
    width: 900,
    height: 600,
  },
  {
    id: 17,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.11 PM.jpeg",
    width: 900,
    height: 600,
  },
  {
    id: 18,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.12 PM (1).jpeg",
    width: 900,
    height: 600,
  },
  {
    id: 19,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.13 PM (2).jpeg",
    width: 900,
    height: 600,
  },
  {
    id: 20,
    src: "/images/WhatsApp Image 2025-02-03 at 11.46.23 PM.jpeg",
    width: 1300,
    height: 600,
  },
  {
    id: 20,
    src: "/images/MAN09921.jpg",
    width: 900,
    height: 600,
  },
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  if (!photos || photos.length === 0) return null;

  return (
    <>
      <div className="gallery-container scroll-smooth">
        <div className="gallery-title flex justify-center">
          <h2 className="text-4xl text-white font-black">
            Professional Journey
          </h2>
        </div>
        <RowsPhotoAlbum
          photos={photos}
          componentsProps={(containerWidth) => ({
            image: { loading: (containerWidth || 0) > 600 ? "eager" : "lazy" },
          })}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
