"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: "1", src: "/images/gallery/living-room.jpg", alt: "Clean living space" },
  { id: "2", src: "/images/gallery/corporate-office.jpg", alt: "Clean office workspace" },
  { id: "3", src: "/images/gallery/sofa-care.jpg", alt: "Upholstery care" },
  { id: "4", src: "/images/gallery/glass-cleaning.jpg", alt: "Glass partitions" },
  { id: "5", src: "/images/gallery/floor-care.jpg", alt: "Floor restoration" },
  { id: "6", src: "/images/gallery/workstation-floor.jpg", alt: "Commercial floors" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* Pure Image Grid - No Writings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8EDF1] bg-[#F7FAFC] cursor-pointer hover:border-[#087EB5]/40 hover:shadow-md transition-all duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md text-[#17191C]">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal - Pure Image Only */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={selectedImage}
              alt="Clean Elegance Gallery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
