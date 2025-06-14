"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewer from "./ImageViewer";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  gradient: string;
  github?: string;
  demo?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  images,
  github,
  demo,
  tags,
}: ProjectCardProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Preview (clickable) */}
      <div
        className="relative h-64 w-full cursor-pointer"
        onClick={() => setIsImageViewerOpen(true)}
      >
        <Image
          src={images[0]}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
            +{images.length - 1} more
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

        {/* Removed line-clamp and added proper height */}
        <div className="min-h-[80px] mb-4">
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        images={images}
        title={title}
      />
    </div>
  );
}
