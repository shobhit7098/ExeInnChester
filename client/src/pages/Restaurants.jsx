import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Image 
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/HeroImage.jpg";
const HongImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/HongKong.png";
const BantamImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Bantam.jpg";
const FishImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Fish.jpg";
const GenesImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Gene's.jpg";
const ItalianImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Italian-Garden.jpg";
const LosImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Los.jpg";
const ManhattanImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Manhattan.jpg";
const TwistedImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Twisted.jpg";
const UmiImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/UMI.jpg";
const GoldenImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/golden.webp";
const Front =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/FrontPorch.webp";
const PizzaImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/pizza.webp";
// const SubImage =
//   "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/subway.webp";
// const TacoImage =
//   "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Taco.webp";
// const littleImage =
//   "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/little.webp";
// const wendyImage =
//   "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/wendy.webp";
// const KFCImage =
//   "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/KFC.webp";
const ArbyImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Arbys.webp";
const HardeeImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Que.webp";
const BojangleImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Bojangle.webp";
const Sabor =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Sabor.jpg";
const Vinny =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/vinny.webp";

const Cyclone =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Restaurant/Cyclone.jpg";
import { Star } from "lucide-react";
export default function Restaurants() {
  const restaurants = [
    {
      name: "Italian Garden",
      image: ItalianImage,
      address: "1781 J A Cochran Bypass, Chester, SC 29706",
      phone: "(803) 581-4500",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=sin0XafCHdL6sAWlnZKICQ&q=Italian+Garden+chester+sc&oq=Italian+Garden+chester+sc&gs_l=psy-ab.12..0j0i7i30j0l2.273978.273978..275949...0.0..0.98.191.2......0....2j1..gws-wiz.......0i67j0i30.yYSvcYwlm04&ved=0ahUKEwin4_6J7rPmAhVSPawKHaWOBJEQ4dUDCAs",
      rating: 4.2,
      reviews: 486,
    },
    {
      name: "Gene's Restaurant",
      image: GenesImage, // Replace with your image path
      address: "156 Gadsden St, Chester, SC 29706",
      phone: "(803) 377-1400",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=3Cr0XdPmMZO1tAaei4HACg&q=Gene%27s+Restaurant+chester+sc&oq=Gene%27s+Restaurant+chester+sc&gs_l=psy-ab.12..0i7i30j0.39130.39130..41033...0.1..0.83.83.1......0....2j1..gws-wiz.......0i71.HEIpKcNGwYc&ved=0ahUKEwjTxJ-Y77PmAhWTGs0KHZ5FAKgQ4dUDCAs",
      rating: 4.5,
      reviews: 390,
    },

    {
      name: "Fish N Chix",
      image: FishImage,
      address: "J A Cochran Bypass, Chester, SC 29706",
      phone: "(803) 581-0039",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=byv0XfruOIfQtAXP96SoCg&q=Fish+N+Chix+chester+sc&oq=Fish+N+Chix+chester+sc&gs_l=psy-ab.12..0i7i30j0.52757.52757..55706...0.1..0.103.103.0j1......0....2j1..gws-wiz.......0i71.sRAL-cL2yM8&ved=0ahUKEwi64rLe77PmAhUHKK0KHc87CaUQ4dUDCAs",
      rating: 4.4,
      reviews: 447,
    },
    {
      name: "Hong Kong",
      image: HongImage, // Replace with your image path
      address: "1841 J A Cochran Bypass #E , Chester, SC 29706",
      phone: "(803) 377-1400",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=qCv0XZPJMciq5wLTybfoCw&q=hong+kong+chinese+chester+sc&oq=hong+kong+chester+sc&gs_l=psy-ab.1.0.0i7i30l3j0l2j0i30.56023.59165..62104...0.2..1.408.1103.7j1j4-1......0....1..gws-wiz.......0i71j0i7i10i30.5ZYzotwyE5o",
      rating: 4.1,
      reviews: 154,
    },
    {
      name: "UMI Hibachi Grill",
      image: UmiImage,
      address: "510 Bc Moore Dr, Chester, SC 29706",
      phone: " (803) 385-3600",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=6Cv0Xb79BuP45gKx5oGQCQ&q=UMI+Hibachi+Grill+chester+sc&oq=UMI+Hibachi+Grill+chester+sc&gs_l=psy-ab.12..0.76064.76064..78491...0.1..0.101.101.0j1......0....2j1..gws-wiz.......0i71.iIoT8yiFAFc&ved=0ahUKEwi-kdqX8LPmAhVjvFkKHTFzAJIQ4dUDCAs",
      rating: 4.3,
      reviews: 258,
    },
    {
      name: "Bantam Chef",
      image: BantamImage,
      address: "190 Pinckney St, Chester, SC 29706",
      phone: "(803) 377-1166",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=Nyz0XazhN4WJ5wKovIioCw&q=Bantam+Chef+chester+sc&oq=Bantam+Chef+chester+sc&gs_l=psy-ab.12..0l2.59991.59991..61601...0.1..0.92.92.1......0....2j1..gws-wiz.......0i71.ew6t17oYvz8&ved=0ahUKEwjs2OC98LPmAhWFxFkKHSgeArUQ4dUDCAs",
      rating: 4.1,
      reviews: 276,
    },
    {
      name: "Los Magueyes",
      image: LosImage, // Replace with your image path
      address: "511 Lancaster Hwy, Chester, SC 29706",
      phone: "(803) 385-3122",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&ei=diz0XdegLc-05gLFqYzYAw&q=Los+Magueyes+chester+sc&oq=Los+Magueyes+chester+sc&gs_l=psy-ab.12..0j0i30l2.91000.91000..93262...0.2..0.94.94.1......0....2j1..gws-wiz.......0i71._uO1ohsYbR4&ved=0ahUKEwjXs9vb8LPmAhVPmlkKHcUUAzsQ4dUDCAs",
      rating: 4.1,
      reviews: 373,
    },
    {
      name: "Manhattan Lounge",
      image: ManhattanImage,
      address: "1781 J A Cochran Bypass, Chester, SC 29706",
      phone: "(803) 374-0158",
      mapLink:
        "https://www.google.com/search?rlz=1C1GCEU_enUS857US857&sxsrf=ACYBGNRrLDI578U98XdK9s-6qXw6fzm6nw%3A1577110855992&ei=R80AXvKVPOqm_QbTg7OwDA&q=The+Manhattan+Lounge%2C+Chester%2C+SC&oq=The+Manhattan+Lounge%2C+Chester%2C+SC&gs_l=psy-ab.12..35i39.21248.26826..29918...0.0..0.89.615.8......0....1..gws-wiz.......35i304i39j33i299.WOvyP5xu_Qk&ved=0ahUKEwiy1d7i-8vmAhVqU98KHdPBDMYQ4dUDCAs",
      rating: 4.5,
      reviews: 59,
    },

    {
      name: "Pizza Hut",
      image: PizzaImage, // Replace with your image path
      address: " 1721 Ja Cochran Bypass, Chester, SC 29706",
      phone: "(803) 581-8288",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:18333864663145493784,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSN65maLmgICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,EgIv2TQfnmA;mv:[[34.7219753,-81.1879702],[34.6922648,-81.23001819999999]]",
      rating: 3.9,
      reviews: 439,
    },
    {
      name: "Sabor Latino Restaurant And Bar",
      image: Sabor, // Replace with your image path
      address: "1631 J A Cochran Bypass Suite F, Chester, SC 29706",
      phone: "803-385-0774",
      mapLink:
        "https://www.google.com/search?q=restaurants+in+chester+sc&sca_esv=0d1ec8b342403671&rlz=1C1CHBF_enUS878US878&tbm=lcl&ei=bN89aPifGoChnesPtt6NsQI&oq=restaurants+in+chest&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhRyZXN0YXVyYW50cyBpbiBjaGVzdCoCCAAyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKNbUJ4WWK9QcAF4AJABAJgB4gGgAeYSqgEGMC4xNS4yuAEDyAEA-AEBmAIPoALBEagCAMICBxAhGKABGArCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGJIDGIoFwgINEAAYgAQYQxjJAxiKBcICEBAAGIAEGLEDGEMYyQMYigWYAwaIBgGSBwYxLjExLjOgB4JmsgcGMC4xMS4zuAe3EcIHCDItMS4xMy4xyAeeAQ&sclient=gws-wiz-local#rlfi=hd:;si:2572244626773859881,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSNeH_d2ZuoCACFopEAAYABgCGAMiGXJlc3RhdXJhbnRzIGluIGNoZXN0ZXIgc2MqBAgDEACSARJtZXhpY2FuX3Jlc3RhdXJhbnSqAVMQASoPIgtyZXN0YXVyYW50cygAMh8QASIbV6yjcyDf0AUCWnBB7AhuBZM92b_7VyxIfVcvMh0QAiIZcmVzdGF1cmFudHMgaW4gY2hlc3RlciBzYw,y,_xLA1i7jwDY;mv:[[54.2973748,1.8133266999999997],[33.584232899999996,-85.92820499999999]]",
      rating: 4.5,
      reviews: 125,
    },
    // {
    //   name: "Subway Restaurants",
    //   image: SubImage,
    //   address: "510 Bc Moore Dr, Chester, SC 29706",
    //   phone: "(803) 581-2050",
    //   mapLink:
    //     "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:17031165470014856521,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjWigKC3Jlc3RhdXJhbnRzIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,bS6y9QBIUuM;mv:[[34.7219753,-81.1879702],[34.6922648,-81.23001819999999]]",
    //   rating: 3.6,
    //   reviews: 214,
    // },
    {
      name: "Cyclone Drive-In Restaurant",
      image: Cyclone,
      address: "249 Columbia St suite C, Chester, SC 29706",
      phone: "803-377-1500",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:15786879537692518255,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSK27x93lgICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,F-KvsusdHCE;mv:[[34.7219753,-81.1879702],[34.6922648,-81.23001819999999]]",
      rating: 4.3,
      reviews: 593,
    },
    {
      name: "Hillside Restaurant & Bar",
      image: BojangleImage,
      address: "129 Gadsden St, Chester, SC 29706",
      phone: "+1 803-377-5139",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:11015814324532430218,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSJnWr8jlgICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,fVdI57vg4m8;mv:[[34.7219753,-81.1879702],[34.6922648,-81.23001819999999]]",
      rating: 4.4,
      reviews: 118,
    },
    // {
    //   name: "Taco Bell",
    //   image: TacoImage,
    //   address: "1715 J A Cochran Bypass, Chester, SC 29706",
    //   phone: "(803) 581-4050",
    //   mapLink:
    //     "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:8037413903888372104,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSPLV9aqZqoCACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,5z9riHeZZjs;mv:[[34.7219753,-81.1879702],[34.6922648,-81.23001819999999]]",
    //   rating: 3.7,
    //   reviews: 387,
    // },
    // {
    //   name: "Waffle House",
    //   image:
    //     "https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/waffle.webp",
    //   address: "1607 J A Cochran,SC-72, Chester, SC 29706",
    //   phone: "(803) 209-6110",
    //   mapLink:
    //     "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:15932817783183749856,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSNyzi-XyrICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,vF8QpLkeE-4;mv:[[34.748197,-81.1886225],[34.6923886,-81.2133487]];start:20",
    //   rating: 3.9,
    //   reviews: 501,
    // },
    // {
    //   name: "KFC",
    //   image: KFCImage,
    //   address: "1607 J A Cochran,SC-72, Chester, SC 29706",
    //   phone: "(803) 209-6110",
    //   mapLink:
    //     "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:8273687074685019806,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSJyGsIbmgICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,AGjnCXv_5as;mv:[[34.748197,-81.1886225],[34.6923886,-81.2133487]];start:20",
    //   rating: 3.7,
    //   reviews: 362,
    // },
    {
      name: "Vinny's Taste Of Italy Restaurant",
      image: Vinny,
      address: "994 Old York Rd, Chester, SC 29706, United States",
      phone: "803-377-7007",
      mapLink:
        "https://www.google.com/search?q=restaurants+in+chester+sc&sca_esv=0d1ec8b342403671&rlz=1C1CHBF_enUS878US878&tbm=lcl&ei=bN89aPifGoChnesPtt6NsQI&oq=restaurants+in+chest&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhRyZXN0YXVyYW50cyBpbiBjaGVzdCoCCAAyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKNbUJ4WWK9QcAF4AJABAJgB4gGgAeYSqgEGMC4xNS4yuAEDyAEA-AEBmAIPoALBEagCAMICBxAhGKABGArCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGJIDGIoFwgINEAAYgAQYQxjJAxiKBcICEBAAGIAEGLEDGEMYyQMYigWYAwaIBgGSBwYxLjExLjOgB4JmsgcGMC4xMS4zuAe3EcIHCDItMS4xMy4xyAeeAQ&sclient=gws-wiz-local#rlfi=hd:;si:10590024962454228324,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSMbsg8DmgICACFopEAAYABgCGAMiGXJlc3RhdXJhbnRzIGluIGNoZXN0ZXIgc2MqBAgDEACSARJpdGFsaWFuX3Jlc3RhdXJhbnSqAVMQASoPIgtyZXN0YXVyYW50cygAMh8QASIbV6yjcyDf0AUCWnBB7AhuBZM92b_7VyxIfVcvMh0QAiIZcmVzdGF1cmFudHMgaW4gY2hlc3RlciBzYw,y,0VHMAHSkTVs;mv:[[54.2973748,1.8133266999999997],[33.584232899999996,-85.92820499999999]]",
      rating: 4.6,
      reviews: 253,
    },
    {
      name: "Que",
      image: HardeeImage,
      address: "1607 Albert Rd, Chester, SC 29706",
      phone: "+1 803-577-8233",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:9333173423519288393,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSMX9yI6muICACFonEAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjKgQIAxAAkgEQY2F0ZXJpbmdfc2VydmljZaoBUxABKg8iC3Jlc3RhdXJhbnRzKAAyHxABIhtXrKNzIN_QBQJacEHsCG4Fkz3Zv_tXLEh9Vy8yHRACIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,1maD_A4owmk;mv:[[54.308321799999995,1.8181125999999999],[33.4637315,-85.92418959999999]];start:20",
      rating: 5,
      reviews: 21,
    },
    {
      name: "Front Porch",
      image: Front,
      address: "3072 Lancaster Hwy, Richburg, SC 29729",
      phone: "+1 803-789-5029",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#lkt=LocalPoiReviews&rlfi=hd:;si:998491975739093993,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSOev8KTqgICACFolEAAYAyIZcmVzdGF1cmFudHMgaW4gY2hlc3RlciBzYyoECAMQAJIBE2FtZXJpY2FuX3Jlc3RhdXJhbnSqAVMQASoPIgtyZXN0YXVyYW50cygAMh8QASIbV6yjcyDf0AUCWnBB7AhuBZM92b_7VyxIfVcvMh0QAiIZcmVzdGF1cmFudHMgaW4gY2hlc3RlciBzYw,y,WsQp_QO2-2g;mv:[[54.308321799999995,1.8181125999999999],[33.4637315,-85.92418959999999]];start:20",
      rating: 4.4,
      reviews: 1.1,
    },
    {
      name: "Arby's",
      image: ArbyImage,
      address: "1622 J A Cochran Bypass, Chester, SC 29706",
      phone: "(800) 599-2729",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:5454965238013424692,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjWigKC3Jlc3RhdXJhbnRzIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,NWxnxjC69_c;mv:[[34.748197,-81.1886225],[34.6923886,-81.2133487]];start:20",
      rating: 3.9,
      reviews: 316,
    },
    {
      name: "Golden Wok",
      image: GoldenImage,
      address: "2091 J A Cochran Bypass, Chester, SC 29706",
      phone: "(803) 581-0422",
      mapLink:
        "https://www.google.com/search?rlz=1C1CHBF_enUS878US878&q=restaurants+in+chester+sc&npsic=0&rflfq=1&rlha=0&rllag=34699613,-81208434,766&tbm=lcl&ved=2ahUKEwjN0_uc8rPmAhVKiOAKHU_HB-4QjGp6BAgLEFg&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3american_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3chinese_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!1m4!1u22!2m2!21m1!1e1!1m5!1u15!2m2!15m1!1shas_1takeout!4e2!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!1m5!1u15!2m2!15m1!1swelcomes_1children!4e2!1m5!1u15!2m2!15m1!1shas_1childrens_1menu!4e2!1m5!1u15!2m2!15m1!1spopular_1with_1tourists!4e2!1m5!1u15!2m2!15m1!1sserves_1vegetarian!4e2!1m5!1u15!2m2!15m1!1sserves_1lunch!4e2!1m5!1u15!2m2!15m1!1sserves_1dinner!4e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sIAEqAlVT,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:14560411599412031116,l,ChlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNjSMbmrMLlgICACFowCgtyZXN0YXVyYW50cxAAGAAYAhgDIhlyZXN0YXVyYW50cyBpbiBjaGVzdGVyIHNj,y,XO8PRI0IxTs;mv:%5B%5B34.7219753,-81.1879702%5D,%5B34.6922648,-81.23001819999999%5D%5D",
      rating: 4.0,
      reviews: 204,
    },
  ];

  const sortedRestaurants = [...restaurants].sort(
    (a, b) => b.rating - a.rating
  );
  return (
    <>
      <Navbar />

      {/* ───────────── Hero ───────────── */}
      <section className="relative w-full h-[500px] mt-10 overflow-hidden">
        <img
          src={Image}
          alt="coffee area"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <blockquote className="text-gray-300 font-bold text-3xl md:text-5xl text-center pb-30">
            Restaurants Near Executive Inn Chester
          </blockquote>
        </div>
      </section>

      {/* ───────────── Cards ───────────── */}
      <section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
          {sortedRestaurants.map((r, idx) => (
            <div
              key={idx}
              className="relative border rounded-md shadow-md overflow-hidden flex flex-col bg-white/30 backdrop-blur-md"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{r.name}</h3>

                {/* ⭐⭐⭐⭐  Rating & Review Count ⭐⭐⭐⭐ */}
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.round(r.rating)
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "stroke-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {r.rating?.toFixed(1)} • {r.reviews ?? 0} reviews
                  </span>
                </div>

                <p className="text-gray-700">{r.address}</p>
                <p className="text-gray-700">{r.phone}</p>
              </div>

              <a
                href={r.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white font-bold text-center py-3 hover:bg-yellow-600 mt-auto"
              >
                look up on Google
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── CTA Banner ───────────── */}
      <div className="flex justify-center items-center py-24 px-4 bg-white">
        <div className="relative w-full max-w-5xl text-white text-center rounded-md shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#acafb3] blur-[50px] opacity-80 z-0" />
          <div className="relative bg-[#141340]/90 backdrop-blur-md px-8 py-20 z-10 rounded-md">
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
      </div>

      <Footer />
    </>
  );
}
