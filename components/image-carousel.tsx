"use client";

import { useEffect, useState } from "react";

export function ImageCarousel() {
  const [images, setImages] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = 13;
  const imagesPerView = 3;
  const frameWidth = 336;
  const gapWidth = 16; // Reduced from 24 (previous px-3 * 2)
  const scrollInterval = 3600; // Increased from 3000ms to 3600ms (20% slower)

  useEffect(() => {
    // Create an array with duplicated images for smooth infinite scroll
    const duplicatedImages = [...Array(totalImages * 2)].map(
      (_, i) => i % totalImages
    );
    setImages(duplicatedImages);

    let timer: NodeJS.Timeout;

    if (!isPaused) {
      timer = setInterval(() => {
        setImages((prev) => {
          const newImages = [...prev];
          newImages.push(newImages[0]);
          newImages.shift();
          return newImages;
        });
      }, scrollInterval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPaused, scrollInterval]);

  const handleClick = () => {
    setIsPaused((prev) => !prev);
    // Resume after 2 seconds
    if (!isPaused) {
      setTimeout(() => {
        setIsPaused(false);
      }, 2000);
    }
  };

  return (
    <section className="w-full py-12 overflow-hidden bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-nunito">
            See the Magic
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-pt-sans">
            Transform your photos into beautiful Ghibli-inspired artwork
          </p>
        </div>

        {/* Outer container to center and constrain width */}
        <div
          className="mx-auto"
          style={{ maxWidth: frameWidth * 3 + gapWidth * 2 }}
        >
          {/* Viewport container with hidden overflow */}
          <div
            className="relative overflow-hidden cursor-pointer"
            onClick={handleClick}
          >
            {/* Sliding container */}
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${frameWidth + gapWidth}px)`,
              }}
            >
              {images.map((imageIndex, i) => (
                <div key={i} className="px-1.5">
                  <div className="w-[336px] overflow-hidden rounded-xl border-2 bg-card shadow-sm">
                    <div className="flex h-[240px]">
                      <div className="w-1/2">
                        <img
                          alt="Original photo"
                          className="h-full w-full object-cover"
                          src={`/originals/${imageIndex + 1}.jpeg`}
                        />
                      </div>
                      <div className="w-1/2 border-l border-border/50">
                        <img
                          alt="Ghiblified photo"
                          className="h-full w-full object-cover"
                          src={`/ghiblis/${imageIndex + 1}.jpeg`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
