import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialSlide?: number;
  title: string;
}

export default function ImageViewer({
  isOpen,
  onClose,
  images,
  initialSlide = 0,
  title,
}: ImageViewerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-7xl transform">
                <div className="relative">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Title */}
                  <div className="absolute left-4 top-4 z-10">
                    <h3 className="text-xl text-white font-medium">{title}</h3>
                  </div>

                  {/* Slider */}
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    initialSlide={initialSlide}
                    loop={true}
                    className="w-full max-h-[80vh]"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-[80vh]">
                          <Image
                            src={image}
                            alt={`${title} preview ${index + 1}`}
                            fill
                            className="object-contain"
                            quality={100}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
