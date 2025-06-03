import React, { useState, useRef, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { GiSpeakerOff } from "react-icons/gi";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const facilityImages = [
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-day.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/lone2.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parking3.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-2.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/frontZoom.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Door.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone2.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone3.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Entry.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking1.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking2.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking3.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parkingsit2.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parkingsit.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/NPpool (2).jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/NCpool.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/night-poolArea.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/day-poolArea.jpg",
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/pool.jpg",
];
const images = [
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-2.jpg",
    alt: "Close-up of striped pillows on a bed in a hotel room with soft natural light",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-copy.jpg",
    alt: "Modern hotel room with a cozy ambiance and large windows",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/night-poolArea.jpg",
    alt: "Elegant bedroom with decorative cushions and natural light",
  },
];

const HeroSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  // const [showVideo, setShowVideo] = useState(true);

  // Auto-play and mute video when it's loaded
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }, [isMuted]);

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="relative pt-20 min-h-screen bg-white">
      <header className="relative w-full z-[10]">
        <div className="relative w-full overflow-visible group">
          <video
            ref={videoRef}
            src="https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Vid3.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full object-cover max-h-[600px]"
            width={800}
            height={600}
          >
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleMuteToggle}
            className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded"
          >
            {isMuted ? <GiSpeakerOff /> : <HiMiniSpeakerWave />}
          </button>

          <div
            className="absolute bottom-0 left-0 w-full z-10"
            style={{ height: "10px", backgroundColor: "#007f66" }}
          />
        </div>
      </header>
      {/* Tagline */}
      <section className="py-8 px-4 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold" tabIndex={-1}>
            Extended Stay Available
          </h2>
        </div>
      </section>
      {/* Facility Section */}
      */
      <section
        /*  container */
        className="relative z-10 mx-auto w-2/3 overflow-hidden
          bg-[#f1f1f1] shadow-[0_0_70px_-20px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-16 py-10 lg:py-14 gap-8"
        aria-label="Facility images and description"
      >
        {/* 2 text block */}
        <motion.article
          className="flex-1 max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3
            className="mb-3 text-4xl sm:text-5xl text-center font-extrabold uppercase tracking-wide text-green-700"
            tabIndex={-1}
          >
            Our Facility
          </h3>

          {/* <hr className="mx-auto lg:mx-0  w-20 bg-gray-300 border-t-2 mt-2 " /> */}
          <hr className="border-t-3 border-gray-200 w-20 mt-2 mx-auto" />

          <motion.p
            className="text-center mt-6 whitespace-pre-line font-semibold leading-relaxed text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {`Whether you're visiting Chester or exploring the surrounding areas, Executive Inn offers a comfortable and convenient stay. Enjoy well-appointed guest rooms and thoughtful amenities such as Free Wi-Fi, Microwave, Free Parking and Pool are on season and other essentials designed to enhance your visit. Located just minutes from local attractions, including the popular Italian Garden II restaurant and the Arts Council gallery, Our Motel puts you in the heart of it all. We look forward to making your stay in Chester both relaxing and memorable`}
          </motion.p>
        </motion.article>

        {/* 3gallery */}
        <figure
          className="grid flex-1 max-w-2xl gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          aria-label="Facility gallery"
        >
          {facilityImages.map((src, i) => {
            const selected = isOpen && photoIndex === i;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
                aria-label={`Open facility image ${i + 1} in lightbox`}
                aria-pressed={selected}
                className="relative aspect-square overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023b4f]"
              >
                {/* dim thumbnail if it matches the lightbox image */}
                {selected && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                )}

                <img
                  src={src}
                  alt={`Facility ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </button>
            );
          })}
        </figure>
      </section>
      {/* Quote Section */}
      <section
        className="relative w-full h-[500px] mt-16  overflow-hidden shadow-xl"
        aria-label="Customer quote"
      >
        <img
          src="https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/LivingRoom2.jpg"
          alt="Hotel bedroom banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-white text-3xl font-medium text-center px-6 py-8  italic shadow-lg drop-shadow-md">
            “Comfortable Rooms, Friendly Staff, Free WiFi and HBO”
          </blockquote>
        </div>
      </section>
      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-transparent"
          aria-modal="true"
          role="dialog"
        >
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={facilityImages.map((src) => ({ src }))}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
            styles={{
              container: {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              },
              // Add custom styles here to set yellow bullet points and nav arrows
              // Example: Override CSS variables or provide classNames
            }}
          />
        </div>
      )}
    </main>
  );
};

export default HeroSlider;
