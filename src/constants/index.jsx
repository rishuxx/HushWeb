import E1 from "../assets/E1.png";
import E2 from "../assets/E2.png";
import E3 from "../assets/E3.png";
import E4 from "../assets/E4.png";


import Product1 from "../assets/Product1.jpg";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";




import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.png";

 


import SiestaLogo from "../assets/SiestaLogo.svg";
import DawnLogo from "../assets/DawnLogo.svg";
import TranceLogo from "../assets/TranceLogo.svg";


import LavenderLogo from "../assets/LavenderLogo.svg";
import OrchidLogo from "../assets/OrchidLogo.svg";
import TeaLogo from "../assets/TeaLogo.svg";
import CucumberLogo from "../assets/CucumberLogo.svg";



export const LINKS = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Products", path: "/products" },
  { text: "Contact", path: "/contact" },
];

export const ELEMENTS = [
  {
    image: E1,
    title: "VEGAN 100%",
    description: "Vegan free cosmatics with natural ingredients only.",
  },
  {
    image: E2,
    title: "PARABEN FREE",
    description: "Clean beauty, free from parabens and synthetics.",
  },
  {
    image: E3,
    title: "0% PHTHALATES",
    description: "Purely safe, zero phthalates, no harmful additives.",
  },
  {
    image: E4,
    title: "ENERGY EFFICIENT",
    description: "Green beauty, crafted with energy-saving methods.",
  },
];


export const dearPartnerText = {
  title: "Dear Partner",
  description: `Elevate your guests' stay with premium, sustainable amenities that leave a lasting impression. 
  Hush & Bloom blends beauty, innovation, and luxury—gentle on skin, kind to the planet. 
  Whether traveling or indulging in self-care, our curated collection transforms everyday 
  moments into exceptional experiences.`
};

export const SERVICES = [
  {
    id: 1,
    title: "Siesta",
    content0: "A SANTUARY OF CARE,",
    content: "WRAPPED IN A LUXURY.",
    description:
      "Defined by nature, guided by science—Siesta by Hush and Bloom is our premier luxury skincare brand. It's groundbreaking formulation merge cutting-edge scientific advancements with the purity of the natural world, delivering exceptional results. With fine fragrances and indulgent textures, Siesta offers a truly luxurious self-care experience",
    imgSrc: Product3,
    logoSrc: SiestaLogo,
    fragranceIcon: OrchidLogo,
    fragranceName: "Orchid",
  },
  {
    id: 3,
    title: "Dawn",
    content0: "WHERE THE MORNING MEETS,",
    content: "THE CALM OF LAVENDER DREAMS",
    description:
      "Embracing uniqueness is an invitation to relish life’s simple joys and greet each day with a smile. Infused with optimism, this collection is designed to spread positivity. Its uplifting fragrances and bold, colorful packaging will inspire your guests to make the most of every moment during their stay.",
    imgSrc: Product1,
    logoSrc: DawnLogo,
    fragranceIcon: LavenderLogo,
    fragranceName: "Lavender",
  },
  {
    id: 2,
    title: "Trance",
    content0: "BOTTLES THAT SPEAK IN WHISPERS,",
    content: " FROM. FEEL. FRAGRANCE.",
    description:
      "Blended for pure relaxation—a carefully curated mix of precious herbs and essential oil extracts pampers the skin with gentle cleansing and mild hydration. Perfect for individuals who appreciate refinement and sophistication, while still embracing their unique personality.",
    imgSrc: Product2,
    logoSrc: TranceLogo,
    fragranceIcon: TeaLogo,
    fragranceName: "Green Tea",
  },
];




export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary ELEMENTS.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];

export const HERO_SLIDES = [
  {
    image: hero1,
    heading: "A Sanctuary of Care in 'Luxury'",
    subheading:
      "Where every detail is a promise of comfort and elegance with luxury.",
    buttonText: "Hi Siesta",
  },
  {
    image: hero3,
    heading: "The Essence of Refined 'Hospitality'",
    subheading:
      "Indulgent hotel toiletries and amenities that redefine guest care.",
    buttonText: "Hi Trance",
  },
  {
    image: hero2,
    heading: "Details That Make Stay 'Seamless'",
    subheading:
      "Curated dry amenities that complete the experience of hospitality.",
    buttonText: "Dry Items",
  },

  {
    image: hero4,
    heading: "Details That Make Stay 'Seamless'",
    subheading:
      "Curated dry amenities that complete the experience of hospitality.",
    buttonText: "Hi Siesta",
  },
];
