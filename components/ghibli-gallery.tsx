"use client";

import { useEffect, useState } from "react";
import { ImageModal } from "./image-modal";

export function GhibliGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // All non-numbered image filenames from the ghiblis folder
    const imageFiles = [
      "Gm6wY7EWsAACUA-.jpeg",
      "Gm67uHaXwAAagV_.jpeg",
      "Gm67uHdXEAAXiWT.jpeg",
      "Gm7GmmLbYAI2U8-.jpeg",
      "Gm7KVLdbYAMm4sK.jpeg",
      "Gm7KphzbYAE1oUB.jpeg",
      "Gm7Pet0bYAEjQxB.jpeg",
      "Gm7VbDebEAAhE-y.jpeg",
      "Gm7aHCYbIAAC5hw.jpeg",
      "Gm7aICIbIAA3QMR.jpeg",
      "Gm7hCmYbYAEvDT9.jpeg",
      "Gm7kmyVXUAAq-F8.jpeg",
      "Gm7njL3W4AA1vHe.jpeg",
      "Gm7tfl-bYAIz0r_.jpeg",
      "Gm7z_ktWwAAA6qQ.jpeg",
      "Gm9vDevWsAAbNgw.jpeg",
    ];
    setImages(imageFiles);
  }, []);

  return (
    <section className="w-full py-12 overflow-hidden bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-nunito">
            Gallery
          </h2>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 [column-fill:_balance] space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`break-inside-avoid group ${
                  // Randomly apply different sizes to create visual interest
                  Math.random() > 0.7 ? "scale-95" : "scale-100"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-xl border-2 bg-card p-1.5 
                    shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out 
                    transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer`}
                  onClick={() => setSelectedImage(`/ghiblis/${image}`)}
                >
                  <img
                    src={`/ghiblis/${image}`}
                    alt={`Ghiblified artwork ${index + 1}`}
                    className="w-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage ?? ""}
      />
    </section>
  );
}
