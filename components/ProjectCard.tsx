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
  date: string;
  images: string[];
  gradient: string;
  github?: string;
  demo?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  date,
  images,
  github,
  demo,
  tags,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <p className="text-sm text-blue-600 mb-4">{date}</p>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">Source</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm font-medium">Live Demo</span>
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
        initialSlide={currentImageIndex}
      />
    </>
  );
}
