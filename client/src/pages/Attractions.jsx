import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import History from "./History";

const CottonHills =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/CottonHills.jpg";
const Farmers =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Farmers.jpg";
const Attraction =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Attractions.webp";
const GolfClub =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/GolfClub.jpg";
const Historic =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Historic.jpg";
const Lake =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Lake.jpg";
const Museum =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Museum.jpeg";
const Park =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Park.jpg";
const Rocky =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Rocky.jpg";
const SkyDive =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Skydive.jpg";
const TMuseum =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/TMuseum.jpg";
const Trail =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/Trail.jpg";
const YMCA =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Attractions/YMCA.jpg";
export default function Attractions() {
  const attractions = [
    {
      title: "Chester State Park",
      image: Park,
      description:
        "Since opening in the 1930s, Chester State Park near Chester, South Carolina, has been a haven for hiking, picnicking, boating, and fishing for the surrounding communities in the Piedmont Region of South Carolina. The park offers a beautiful natural landscape, perfect for outdoor enthusiasts seeking to explore the scenic trails and enjoy the tranquil waters. Whether you’re looking for a peaceful day in nature or an active adventure, Chester State Park has something for everyone.",
      link: "https://southcarolinaparks.com/chester",
    },
    {
      title: "Chester Museum",
      image: Museum,
      description:
        "Located at a historic 1860s mill site overlooking a waterfall near the center of town, Chester Museum at The Mill features two floors of award-winning permanent and seasonal changing exhibits. The building was purchased in 2000 and has since been transformed into a vibrant cultural hub, showcasing the rich history and heritage of Chester and its surrounding areas. Visitors can explore fascinating artifacts and learn about the local history in an engaging environment.",
      link: "http://chesterhistoricalsociety.org/",
    },
    {
      title: "Transportation Museum",
      image: TMuseum,
      description:
        " The Transportation Museum boasts a varied collection that includes a 1916 Ford, a 1921 LaFrance fire truck, and a 1906 Model N Ford. Visitors can also see early buggies, a cotton wagon, and even an old cotton scale. One of the highlights is a 1925 school bus that was used in the Wellridge Community. This museum offers a unique glimpse into the history of transportation in the region and is a must-visit for history buffs and families alike.",
      link: "http://chesterschistory.org/transportation-museum.html",
    },
    {
      title: "Cotton Hills Farm",
      image: CottonHills,
      description:
        " Cotton Hills Farm has been a cherished part of the Wilson Family since 1882. Located in Cowpens, South Carolina, our family-owned farm specializes in cotton and grain while also cultivating a wide variety of fresh fruits and vegetables. We take pride in selling our produce directly from the farm, both wholesale and at our three retail locations.",
      link: "http://www.cottonhillsfarm.com/",
    },
    {
      title: "Skydive Carolina",
      image: SkyDive,
      description:
        "Located just across the North Carolina state line in Chester, SC, Skydive Carolina is conveniently situated about an hour's drive from Charlotte and Columbia, making it easily accessible from Asheville, Greenville, Spartanburg, and Charleston. Our full-service dropzone offers exhilarating tandem skydiving experiences and comprehensive programs for those looking to learn how to skydive.",
      link: "https://www.skydivecarolina.com/",
    },
    {
      title: "Historic Brattonsville",
      image: Historic,
      description:
        "Historic Brattonsville showcases the rich history of the Scots-Irish and African Americans in the South Carolina upcountry, primarily through the preservation and interpretation of the Bratton community's story. Visitors can explore more than 30 historic structures dating from the 17th to the late 19th century.",
      link: "https://chmuseums.org/brattonsville/",
    },
    {
      title: "Chester YMCA",
      image: YMCA,
      description:
        "The Chester Family YMCA is in the heart of the Chester community. Located on W. Hutidred Road, just west of Jefferson Davis Highway, you'll find programs and activities for the entire family",
      link: "https://www.ymcarichmond.org/locations/chester/",
    },
    {
      title: "Chester Glof Club",
      image: GolfClub,
      description:
        "The Chester Golf Club is located in rural Chester County, six miles west of I-77 off of exit 62, only minutes from Charlotte or Columbia. The course, which opened in 1971, was designed by Russell Breeden.",
      link: "https://www.playchester.com/",
    },
    {
      title: "LAKE WATER PARK",
      image: Lake,
      description:
        "Lake Wateree offers fishing and boating opportunities that cater to anyone looking for fun on South Carolina lakes. Numerous Lake Wateree fishing tournaments are hosted here every year.",
      link: "https://southcarolinaparks.com/lake-wateree",
    },
    {
      title: "Farmers & Artisans Market",
      image: Farmers,
      description:
        "The Chester Farmers and Artisan Market (Chester Market) connects local farmers and artisans with community members to increase awareness and support for local agriculture and art. Local produce and high-quality crafts are available for sale at the market.",
      link: "https://www.chestersc.org/farmers-market/",
    },
    {
      title: "Rocky Creek Trail",
      image: Trail,
      description:
        " The Rocky Creek Trail is a 1.6-mile out-and-back trail located along Rocky Creek, a tributary of the Catawba River. This natural surface trail is suitable for hiking and biking. At the river access, taking a left will lead visitors on a 0.2-mile walk to a scenic waterfall, while a right turn leads to a pleasant trail with scenic views of Rocky Creek.",
      link: "https://www.carolinathreadtrailmap.org/trails/trail/rocky-creek-trail",
    },
    {
      title: "Rocky Creek Sporting Clays",
      image: Rocky,
      description:
        "Rocky Creek Sporting Clays is the Carolinas' premier sporting clays adventure. It welcomes all shooters, regardless of skill level—from those who have never held a gun before to tournament shooters who fire thousands of shells a year.",
      link: "https://rockycreeksportingclays.com/",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[500px] mt-10 overflow-hidden">
        <img
          src={Attraction}
          alt="coffee area "
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />
        <div className="absolute inset-0 flex items-top justify-center">
          <blockquote className="text-white font-semibold text-3xl md:text-5xl text-center  pt-60 ">
            Attractions Near Executive Inn Chester
          </blockquote>
        </div>
      </section>
      <section className="bg-white p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/30 backdrop-blur-md shadow-lg border-t-4 border-gray-700 hover:border-yellow-600 transition duration-300 p-6 text-center cursor-pointer overflow-hidden rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto mb-4 w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-6 text-sm">{item.description}</p>
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                CLICK HERE FOR MORE INFO
              </span>
            </a>
          ))}
        </div>
      </section>
      <History></History>
      {/* Services Section */}
      <section className="flex justify-center items-center py-24 px-4 bg-white">
        <div className="relative w-full max-w-5xl text-white text-center rounded-md shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#acafb3] blur-[50px] opacity-80 z-0" />
          <div className="relative bg-[#141340]/90 backdrop-blur-md px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 z-10 rounded-md">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
              We Provide You Excellent Services Every{" "}
              <br className="hidden md:block" />
              Step Of The Way
            </h2>
            <button className="bg-[#d6b062] hover:bg-[#c9a346] text-black font-medium px-6 py-3 transition duration-300">
              Book A Room →
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
