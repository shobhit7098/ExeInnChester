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
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-day.jpg",
    alt: "Front view of Executive Inn during the day",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/lone2.jpg",
    alt: "Facility exterior lone2 view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parking3.jpg",
    alt: "Parking area with vehicles at Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-2.jpg",
    alt: "Front view of Executive Inn building",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/frontZoom.jpg",
    alt: "Close-up front exterior of Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone.jpg",
    alt: "Facility building lone view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Door.jpg",
    alt: "Entrance door of Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone2.jpg",
    alt: "Facility exterior lone2 second view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nlone3.jpg",
    alt: "Facility exterior lone3 third view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Entry.jpg",
    alt: "Entry pathway to Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking1.jpg",
    alt: "Parking lot view 1 at Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking2.jpg",
    alt: "Parking lot view 2 at Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/Nparking3.jpg",
    alt: "Parking lot view 3 at Executive Inn",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parkingsit2.jpg",
    alt: "Parking site view 2",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/parkingsit.jpg",
    alt: "Parking site main view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/NPpool (2).jpg",
    alt: "Swimming pool area view",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Facilities/NCpool.jpg",
    alt: "Swimming pool close-up",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/night-poolArea.jpg",
    alt: "Night view of pool area",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/day-poolArea.jpg",
    alt: "Daytime view of pool area",
  },
  {
    src: "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/pool.jpg",
    alt: "Swimming pool with lounge chairs",
  },
];

const HeroSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    }

    // Cleanup: pause video on unmount
    return () => {
      if (video) video.pause();
    };
  }, [isMuted]);

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <main className="relative pt-20 min-h-screen bg-white" role="main">
      <header className="relative w-full z-[10]">
        <div className="relative w-full overflow-visible group">
          <video
            ref={videoRef}
            src="https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Vid3.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata" // preload only metadata, faster start
            poster="https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Vid3-poster.jpg" // add poster for SEO & UX
            className="w-full object-cover max-h-[600px] h-auto"
            width={800}
            height={600}
            aria-label="Executive Inn promotional video"
            tabIndex={-1}
          >
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleMuteToggle}
            className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-pressed={!isMuted}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <GiSpeakerOff size={24} />
            ) : (
              <HiMiniSpeakerWave size={24} />
            )}
          </button>

          <div
            className="absolute bottom-0 left-0 w-full z-10"
            style={{ height: "10px", backgroundColor: "#007f66" }}
          />
        </div>
        {/* SEO Text for Video */}
        <p className="sr-only">
          Promotional video showcasing Executive Inn facilities and
          surroundings.
        </p>
      </header>

      {/* Tagline */}
      <section className="py-8 px-4 md:px-10" aria-label="Promotional tagline">
        <div className="text-center">
          <h2 className="text-3xl font-bold" tabIndex={-1}>
            Extended Stay Available
          </h2>
        </div>
      </section>

      {/* Facility Section */}
      <section
        className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden bg-[#f1f1f1] shadow-[0_0_70px_-20px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-16 py-10 lg:py-14 gap-8"
        aria-label="Facility images and description"
      >
        {/* Text Block */}
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
          <hr className="border-t-3 border-gray-200 w-20 mt-2 mx-auto" />

          <motion.p
            className="text-center mt-6 whitespace-pre-line font-semibold leading-relaxed text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {`Whether you're visiting Chester or exploring the surrounding areas, Executive Inn offers a comfortable and convenient stay. Enjoy well-appointed guest rooms and thoughtful amenities such as Free Wi-Fi, Microwave, Free Parking and Pool (seasonal) and other essentials designed to enhance your visit. Located just minutes from local attractions, including the popular Italian Garden II restaurant and the Arts Council gallery, our motel puts you in the heart of it all. We look forward to making your stay in Chester both relaxing and memorable.`}
          </motion.p>
        </motion.article>

        {/* Gallery */}
        <figure
          className="grid flex-1 max-w-2xl gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          aria-label="Facility gallery"
        >
          {facilityImages.map(({ src, alt }, i) => {
            const selected = isOpen && photoIndex === i;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
                aria-label={`Open facility image ${i + 1} in lightbox: ${alt}`}
                aria-pressed={selected}
                className="relative aspect-square overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023b4f]"
              >
                {selected && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                )}

                <img
                  src={src}
                  alt={alt || `Facility ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                  width={300}
                  height={300}
                  fetchpriority={selected ? "high" : "auto"}
                />
              </button>
            );
          })}
        </figure>
      </section>

      {/* Quote Section */}
      <section
        className="relative w-full h-[500px] mt-16 overflow-hidden shadow-xl"
        aria-label="Customer quote"
      >
        <img
          src="https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/LivingRoom2.jpg"
          alt="Hotel bedroom banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={1920}
          height={500}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="text-white text-3xl font-medium text-center italic shadow-lg drop-shadow-md max-w-3xl mx-auto">
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
          tabIndex={-1}
        >
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={facilityImages.map(({ src, alt }) => ({ src, alt }))}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
            styles={{
              container: {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              },
            }}
          />
        </div>
      )}
    </main>
  );
};

export default HeroSlider;
