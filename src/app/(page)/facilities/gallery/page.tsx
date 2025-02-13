import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Showcase from "@/app/_components/client-components/gallery/Showcase";
import GalleryPhotos from "@/app/_components/client-components/gallery/GalleryPhotos";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="px-16">
        <div className="mt-10 w-full">
          <h1 className="text-text-60 text-3xl">Gallery</h1>
        </div>
        <Showcase />
      </main>
      <GalleryPhotos />
      <Footer />
    </>
  );
}
