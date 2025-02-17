import Banner from "@/components/Banner/Banner";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";

const Gallery = () => {
  const GalleryBanner = {
    title: "Memories",
    description: "",
    image: "/images/prof-memories.png",
  };
  return (
    <>
      <Banner fields={GalleryBanner} />
      <PhotoGallery />
    </>
  );
};

export default Gallery;
