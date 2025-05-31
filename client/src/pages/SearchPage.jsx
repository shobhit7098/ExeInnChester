import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SearchPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get("query")?.trim() || "";

  const pages = [
    {
      title: "Amenities",
      path: "/amenities",
      body: "Book today and enjoy your stay at Executive Inn, Chester, SC. Testimonials: We create memorable experiences. The best hotel in Chester, SC, offering old‑world charm and comfort. Executive Inn was...",
    },
    {
      title: "Restaurants",
      path: "/restaurants",
      body: "Restaurants near Executive Inn: T & M Restaurant, 140 Church St, Chester. Phone: (803) 377‑2720. Our kitchen 1844 J A Cochran Bypass Chester, SC 29706 Phone: (803) 581‑2665...",
    },
    {
      title: "Attractions",
      path: "/attractions",
      body: "Attractions near Executive Inn: Chester State Park (since 1930s), a haven for hiking, picnicking, boating and fishing...",
    },
    {
      title: "Contact Us",
      path: "/contact",
      body: 'Contact us to book a room. "I really enjoyed my stay, the staff were amazing. If excellent accommodations is what you\'re looking for, choose this hotel." Kaya, Jennifer...',
    },
    {
      title: "Home",
      path: "/",
      body: "Extended stay available. Our facility Executive Inn, Chester, SC is an excellent choice for travelers visiting Chester and surrounding areas. Offering many helpful amenities designed to enhance your stay...",
    },
  ];

  const results = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.body.toLowerCase().includes(q.toLowerCase())
  );

  const highlight = (text) => {
    if (!q) return text;
    const regex = new RegExp(`(${q})`, "gi");
    return text.split(regex).map((chunk, idx) =>
      regex.test(chunk) ? (
        <span key={idx} className="bg-yellow-200">
          {chunk}
        </span>
      ) : (
        chunk
      )
    );
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-2xl font-semibold mb-8">
          Search Results for <span className="text-blue-700">“{q}”</span>
        </h1>

        {q && results.length === 0 && (
          <p className="text-black text-3xl text-bold">
            Sorry, but nothing matched your search terms. Please try again with
            different keywords.
          </p>
        )}

        {results.length > 0 &&
          results.map((page) => (
            <article key={page.path} className="mb-12 border-b pb-6">
              <h2 className="text-xl font-bold mb-1">{page.title}</h2>
              <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                {highlight(page.body)}
              </p>
              <Link to={page.path} className="text-xs font-semibold underline">
                Continue Reading
              </Link>
            </article>
          ))}
      </main>
      <Footer />
    </>
  );
}
