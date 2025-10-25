import React, { useState } from 'react';
import Header from '../components/ui/Header';

const imageCategories = {
  
  "Handrails": [],
  "Trafford Sheet Work": [
    "WhatsApp Image 2025-07-20 at 18.13.21.jpeg",
    "WhatsApp Image1 2025-07-20 at 18.13.20 (1).jpeg",

    
    "WhatsApp Image2 2025-07-20 at 18.13.20 (2).jpeg"
  ],
  "Steel Frame Jally Works": ["jally1.jpeg", "jally2.jpeg"],
  "Polycarbonate Sheet Work": ["polycarbon1 (1).jpeg", "polycarbon1 (2).jpeg", "polycarbon1 (3).jpeg", "polycarbon2.jpeg"],
  "Stone Coated Sheet Work": ["stone coated sheet1 (1).jpeg", "stone coated sheet1 (2).jpeg", "stone coated sheet1 (3).jpeg"],
  "Tile Roofing Work": ["tile roof1.jpeg", "tile roof2 (1).jpeg"],
   "UPVC Sheet Work": ["upvc1.jpeg", "upvc2.jpeg"],
   "Gates": ["gate1.jpeg", "gate2 (1).jpeg", "gate2 (2).jpeg", "gate2 (3).jpeg", "gate2 (4).jpeg"],
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // No category selected by default
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const gateImages = ["gate1.jpeg", "gate2 (1).jpeg", "gate2 (2).jpeg", "gate2 (3).jpeg", "gate2 (4).jpeg"];

  const allImages = Object.values(imageCategories).flat();

  const filteredImages = selectedCategory ? imageCategories[selectedCategory] || [] : allImages;

   // Function to swap rows in the image array
  const swapRows = (images) => {
    if (!images || images.length < 15) return images; // Ensure there are at least 15 images

    const newImages = [...images]; // Create a copy to avoid modifying the original array

    // Swap rows 2 & 4
    for (let i = 0; i < 3; i++) {
      if (9 + i < images.length && 3 + i < images.length){
        [newImages[3 + i], newImages[9 + i]] = [newImages[9 + i], newImages[3 + i]];
      }
    }

    // Swap rows 3 & 5
    for (let i = 0; i < 3; i++) {
       if (6 + i < images.length && 12 + i < images.length){
        [newImages[6 + i], newImages[12 + i]] = [newImages[12 + i], newImages[6 + i]];
      }
    }

    return newImages;
  };

  const rearrangedImages = swapRows(filteredImages);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <section className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Project Gallery
          </h1>
          <p className="text-xl text-muted-foreground font-body leading-relaxed text-center">
            Explore our completed projects and see the quality of our work.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-8">
            {Object.keys(imageCategories).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                } mr-2 mb-2`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rearrangedImages.map((image) => (
              <div key={image} className="relative shadow-md">
                <img
                  src={`/assets/images/${image}`} // Assuming images are in public/assets/images
                  alt={image}
                  className="w-full h-48 object-contain rounded-md"
                  onClick={() => {
                    if (gateImages.includes(image)) {
                      setSelectedImage(image);
                      setLightboxOpen(true);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setLightboxOpen(false)}
            >
              &times;
            </button>
            <div className="max-w-4xl max-h-full overflow-auto">
              {gateImages.map((image) => (
               <img
               key={image}
               src={`/assets/images/${image}`}
               alt={image}
               className="w-full rounded-md mb-4"
             />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;