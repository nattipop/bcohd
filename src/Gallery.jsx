import { useRef } from "react";

const Gallery = () => {
  const containerRef = useRef(null);

  const renderGallery = () => {
    document.getElementById("pictures-button").remove()
    window.cloudinary.galleryWidget({
      container: containerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "bcohd" }],
      aspectRatio: "4:3"
    }).render()
    return;
  }

  return (
    <div>
      <button id="pictures-button" onClick={renderGallery}>View more pictures</button>
      <div id="gallery-container" ref={containerRef}></div>
    </div>
  )
}

export default Gallery;