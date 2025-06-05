import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/navigation";

// Updated helper to use index for view number
function getImageDescription(url, index) {
  if (!url) return "Room image";

  const filename = url.split("/").pop()?.split(".")[0] || "";
  const keyword = filename.replace(/\d+/g, "").toLowerCase();

  let readable = "";
  switch (keyword) {
    case "king":
      readable = "Deluxe King Room";
      break;
    case "queen":
      readable = "Standard Queen Room";
      break;
    case "jacuzzi":
      readable = "Executive Suite with Jacuzzi";
      break;
    default:
      readable = "Room image";
  }

  return `${readable} - View ${index + 1}`;
}

const roomData = [
  {
    name: "Deluxe Room",
    price: "$109/night",
    description:
      "Spacious and modern room with a luxurious king-size bed and elegant decor. Includes a work desk, flat-screen TV, free Wi-Fi, and premium amenities.",
    rating: 4.8,
    reviews: 312,
    images: [
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/king1.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/king2.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/king3.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/king4.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/king5.jpg",
    ],
  },
  {
    name: "Standard Room",
    price: "$89/night",
    description:
      "Comfortable room with a queen-size bed and essential amenities. Perfect for solo travelers or small families with TV, Wi-Fi, and A/C.",
    rating: 4.6,
    reviews: 208,
    images: [
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen1.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen2.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen3.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen4.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen5.jpg",
    ],
  },
  {
    name: "Executive Suite",
    price: "$139/night",
    description:
      "Elegant suite featuring a king bed and private in-room Jacuzzi for relaxation. Ideal for romantic stays, with a seating area, TV, and upgraded bath amenities.",
    rating: 4.9,
    reviews: 145,
    images: [
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/jacuzzi1.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/jacuzzi2.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/jacuzzi3.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/jacuzzi5.jpg",
      "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/jacuzzi6.jpg",
    ],
  },
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      <Helmet>
        <title>Rooms at Executive Inn | Book Deluxe & Suites</title>
        <meta
          name="description"
          content="Browse and book clean, beautiful rooms at Executive Inn. Choose from Deluxe Rooms, Standard Rooms, and Executive Suites."
        />
      </Helmet>

      <Navbar />

      <header
        className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-4xl font-bold text-center"
        style={{
          backgroundImage:
            "url(https://executiveinn.s3.eu-north-1.amazonaws.com/assets/RoomBook/queen6.jpg)",
        }}
        role="banner"
        aria-label="Hero Section"
      >
        Stay in Style: Elegant, Spacious & Fully Equipped Executive Suites
      </header>

      <main className="py-12 px-4 max-w-6xl mx-auto">
        <section>
          <h1 className="text-3xl font-bold mb-8 text-center">Our Rooms</h1>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {roomData.map((room, index) => (
              <article
                key={index}
                className="shadow-md rounded-lg overflow-hidden border"
              >
                <div className="relative w-full h-64">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full h-full"
                  >
                    {room.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-64">
                          <img
                            src={img}
                            alt={getImageDescription(img, i)}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs md:text-sm p-2 text-center">
                            {getImageDescription(img, i)}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                  <p className="text-gray-700 mb-2">{room.description}</p>
                  <p className="text-gray-700 mb-2">{room.price}</p>
                  <div
                    className="flex items-center mb-4"
                    aria-label="Room rating"
                  >
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span>
                      {room.rating} ({room.reviews} reviews)
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    aria-label={`Book ${room.name}`}
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black opacity-30"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Book {selectedRoom.name} on:
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.booking.com/hotel/us/executive-inn-chester.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4Aq68hcIGwAIB0gIkMWY0YTU1ZDAtM2YyNy00MmI5LTk0Y2MtOWQxZmVhZjYwOGJj2AIF4AIB&sid=4630d3e20794c9a1c8eaeb5a91b2cc79&aid=304142&ucfs=1&arphpl=1&checkin=2025-07-08&checkout=2025-07-09"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Booking.com
              </a>
              <a
                href="https://www.expedia.com/Chester-Hotels-Executive-Inn-Chester.h100961773.Hotel-Information?chkin=2025-6-19&chkout=2025-6-20&rm1=a2&regionId=7209&searchId=83296654-01fc-4d35-b135-4d1104fa5e98"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Expedia.com
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
