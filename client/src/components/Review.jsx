import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getUserId } from "../utils/user";

// [ ...imports remain unchanged ]

// ⭐ Star Component
const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.014a1 1 0 00.95.69h7.392c.969 0 1.371 1.24.588 1.81l-5.983 4.345a1 1 0 00-.364 1.118l2.285 7.014c.3.922-.755 1.688-1.54 1.118L12 18.347l-5.983 4.346c-.784.57-1.838-.196-1.539-1.118l2.285-7.015a1 1 0 00-.364-1.117L1.416 11.44c-.783-.57-.38-1.811.588-1.811h7.391a1 1 0 00.95-.69l2.286-7.012z"
    />
  </svg>
);

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const Url = "https://exeinnchester.onrender.com";
  const reviewVideos = [
    {
      id: 1,
      title: "Guest Review 1",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review.mp4",
    },
    {
      id: 2,
      title: "Guest Review 2",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review3.mp4",
    },
    {
      id: 3,
      title: "Guest Review 3",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review1.mp4",
    },
    {
      id: 4,
      title: "Guest Review 4",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review2.mp4",
    },
    {
      id: 5,
      title: "Guest Review 5",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review4.mp4",
    },
    {
      id: 6,
      title: "Guest Review 6",
      videoUrl:
        "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Review5.mp4",
    },
  ];

  const currentUser = { id: getUserId() };

  const fetchReviews = async () => {
    try {
      // const res = await axios.get("${Url}/api/reviews");
      const res = await axios.get(`${Url}/api/reviews`);
      console.log("Fetched reviews:", res.data);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleEdit = (review) => {
    setText(review.comment);
    setAuthor(review.name);
    setRating(review.rating);
    setEditingId(review._id);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Url}/api/reviews/${id}`, {
        headers: { "x-user-id": currentUser.id },
      });
      fetchReviews();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete review.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!author || !text || rating < 1) {
      setError("All fields are required and rating must be at least 1.");
      setLoading(false);
      return;
    }

    try {
      const payload = { name: author, comment: text, rating };
      const config = { headers: { "x-user-id": currentUser.id } };

      if (editing) {
        await axios.put(`${Url}/api/reviews/${editingId}`, payload, config);
      } else {
        await axios.post(`${Url}/api/reviews`, payload, config);
      }

      setText("");
      setAuthor("");
      setRating(0);
      setEditing(false);
      setEditingId(null);
      fetchReviews();
    } catch (err) {
      console.error("Submit failed:", err);
      setError("Error submitting review.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handlePlay = (index) => {
      setIsPlaying(true);
      videoRefs.current.forEach((video, i) => {
        if (i !== index && video) video.pause();
      });

      if (swiperRef.current) {
        swiperRef.current.autoplay.stop();
        swiperRef.current.allowSlideNext = false;
        swiperRef.current.allowSlidePrev = false;
      }
    };

    const handlePauseOrEnd = () => {
      setIsPlaying(false);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
        swiperRef.current.allowSlideNext = true;
        swiperRef.current.allowSlidePrev = true;
      }
    };

    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.addEventListener("play", () => handlePlay(index));
        video.addEventListener("pause", handlePauseOrEnd);
        video.addEventListener("ended", handlePauseOrEnd);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("play", handlePlay);
          video.removeEventListener("pause", handlePauseOrEnd);
          video.removeEventListener("ended", handlePauseOrEnd);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Video Review Carousel */}
      <section className="bg-white py-12 px-6 max-w-7xl mx-auto rounded-3xl shadow-lg mb-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-9">
            Guest Review Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our guests say about Executive Inn through these authentic
            reviews.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviewVideos.map(({ id, title, videoUrl }, idx) => (
            <SwiperSlide key={id}>
              <div className="bg-gray-100 rounded-xl shadow-md p-4 flex flex-col items-center">
                <video
                  controls
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className="w-full rounded-lg max-h-70 object-cover"
                  aria-label={`Video review: ${title}`}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Text Review + Form */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
        {/* Review Slider */}
        <div className="md:w-2/3 bg-gray-100 p-6 rounded-xl shadow-md">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={reviews.length > 1}
            className="h-[400px]"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col justify-center h-full text-left px-10 relative">
                  {/* ⋮ Three Dot Menu */}
                  {review.userId === currentUser.id && (
                    <div className="absolute top-2 right-2 text-right z-20">
                      <button
                        title="Options"
                        className="text-xl text-gray-700 px-2 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={() =>
                          setOpenMenuId(
                            openMenuId === review._id ? null : review._id
                          )
                        }
                      >
                        ⋮
                      </button>

                      {openMenuId === review._id && (
                        <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-30">
                          <button
                            onClick={() => {
                              handleEdit(review);
                              setOpenMenuId(null);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(review._id);
                              setOpenMenuId(null);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Review Content */}
                  <p className="text-gray-700 text-lg italic mb-3">
                    "{review.comment}"
                  </p>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} filled={i <= review.rating} />
                    ))}
                  </div>
                  <p className="text-blue-700 text-right font-semibold">
                    - {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Review Form */}
        <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {editing ? "Edit Your Review" : "Write a Review"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
              rows={4}
              placeholder="Write your review"
              aria-label="Your review"
            />
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3"
              aria-label="Your name"
            />
            <div className="flex gap-1" aria-label="Rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`Set rating to ${star}`}
                >
                  <Star filled={star <= (hoverRating || rating)} />
                </button>
              ))}
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className={`py-2 px-4 rounded text-white ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading
                ? "Submitting..."
                : editing
                ? "Update Review"
                : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
