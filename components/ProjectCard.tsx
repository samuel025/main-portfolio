"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import ImageViewer from "./ImageViewer";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  gradient: string;
  github?: string;
  demo?: string;
  tags: string[];
  isAwardWinner?: boolean;
}

export default function ProjectCard({
  title,
  description,
  images,
  github,
  demo,
  tags,
  isAwardWinner = false,
}: ProjectCardProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <div
      className={`group bg-[#11151a] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 ${
        isAwardWinner
          ? "ring-1 ring-yellow-500/50 shadow-lg shadow-yellow-500/10"
          : "shadow-lg shadow-black/20"
      }`}
    >
      {/* Image Preview (clickable) */}
      <div
        className="relative h-64 w-full cursor-pointer overflow-hidden border-b border-white/5"
        onClick={() => setIsImageViewerOpen(true)}
      >
        <Image
          src={images[0]}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-[#0c0f12]/80 backdrop-blur-md border border-white/10 text-white/90 text-xs px-3 py-1.5 rounded-full font-medium">
            +{images.length - 1} images
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${
                tag === "Grant Winner"
                  ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                  : "bg-white/5 text-white/70 border border-white/10"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        {/* Removed line-clamp and added proper height */}
        <div className="min-h-[80px] mb-6">
          <p className="text-white/60 leading-relaxed text-sm">{description}</p>
        </div>

        <div className="flex items-center justify-start gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
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
