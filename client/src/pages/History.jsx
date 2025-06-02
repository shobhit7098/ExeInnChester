import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
const Pool =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/pool-image3.jpg";
export default function () {
  const heroImg = Image;
  const cardData = [
    { id: "01", text: "Warm Service" },
    { id: "02", text: "Comfortable Rooms" },
    { id: "03", text: "Great Location" },
  ];

  return (
    <>
      <WhyChooseUs cards={cardData} heroImg={heroImg} />
      <section className="bg-white pt-30 ">
        <main className="max-w-6xl mx-auto px-8 py-18  font-sans">
          <div className="flex flex-col md:flex-row md:space-x-10">
            {/* Photo */}
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/6c935c1f-1a8b-47a3-b15f-13b4a9d5b732.jpg"
                alt="Woman in Motel"
                className="w-[300px] h-[350px] object-cover"
                width={300}
                height={350}
              />
            </div>
            {/* Copy */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-9 text-[17px] leading-[20px] mb-2 text-gray-700">
              <h1 className="col-span-full text-[28px] leading-[28px] text-[1a1a3d] flex items-center font-semibold">
                <span className="inline-block w-0.5 h-8 bg-[bfa15a] mr-3" />
                Executive Inn Chester, SC
              </h1>

              <div>
                <p className="font-medium mb-3">Immaculate Cleanliness</p>
                <p className="mb-4">
                  At Executive Inn Chester, cleanliness is key to a memorable
                  stay. Our rooms, along with common areas, washrooms,
                  restaurant, and staircases, are meticulously maintained by our
                  dedicated housekeeping team to ensure the highest standards of
                  hygiene and comfort.
                </p>

                <p className="font-semibold mb-4">
                  Exceptional Service from Our Friendly Staff
                </p>
                <p className="mb-3">
                  At Executive Inn Chester, our staff is the heart of your
                  experience. From check-in to checkout, we provide warm,
                  professional service to ensure your stay is seamless and
                  enjoyable.
                </p>
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    We believe exceptional service starts with a positive
                    attitude. Our team is dedicated to making you feel at home
                    with a friendly and genuine approach throughout your stay.
                  </li>
                  <li>
                    Whether you're exploring local attractions or need guidance,
                    our staff is eager to share helpful insights, ensuring you
                    make the most of your visit.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-3">
                  Prime Location for Convenience and Safety
                </p>
                <p className="mb-4">
                  Executive Inn Chester’s central location offers easy access
                  for both business and leisure, saving you time and ensuring a
                  secure, well-connected stay.
                </p>

                <p className="font-medium mb-3">Customer-Centric Service</p>
                <p className="mb-4">
                  Your satisfaction is our priority. At Executive Inn Chester,
                  we provide personalized service to make every guest feel
                  valued, ensuring many return time after time.
                </p>

                <p className="font-medium mb-3">Complimentary Wi-Fi & HBO</p>
                <p>
                  Stay connected with free high-speed Wi-Fi and HBO, perfect for
                  both work and relaxation.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

const ParallaxCard = ({ idx, id, text, progress }) => {
  const y = useTransform(progress, [0, 1], [0, (idx + 1) * 60]);
  const scale = useTransform(progress, [0, 1], [1, 0.92]);
  const opacity = useTransform(progress, [0, 0.9, 1], [1, 1, 0]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      style={{ transform, opacity }}
      className="bg-white/90 shadow-xl  rounded-lg p-12 w-[300px] md:w-[350px] text-center border-l-[6px] border-yellow-500 transition-transform duration-300"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-3xl font-semibold text-blue-900 mb-2">{id}</h3>
      <p className="text-gray-700 text-sm">{text}</p>
    </motion.div>
  );
};

const WhyChooseUs = ({ cards, heroImg }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Starts tracking once top of section hits top of viewport
  });

  const groupOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Pool})`,
      }}
    >
      {/* Fixed dark overlay */}
      <motion.div className="absolute inset-0 bg-blue-500/40 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
        <p className="text-lg mb-1">We Are Clean & Orderly</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-1">Why Choose Us</h2>
        <p className="text-lg">We are the Best in Town</p>
      </div>

      {/* Cards */}
      <motion.div
        style={{ opacity: groupOpacity }}
        className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-10 px-4 z-10"
      >
        {cards?.map((card, idx) => (
          <ParallaxCard
            key={card.id}
            idx={idx}
            id={card.id}
            text={card.text}
            progress={scrollYProgress}
          />
        ))}
      </motion.div>
    </section>
  );
};
