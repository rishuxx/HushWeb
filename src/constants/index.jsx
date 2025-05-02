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
import hero4 from "../assets/hero4.mp4";

import SiestaLogo from "../assets/SiestaLogo.svg";
import DawnLogo from "../assets/DawnLogo.svg";
import TranceLogo from "../assets/TranceLogo.svg";

import LavenderLogo from "../assets/LavenderLogo.svg";
import OrchidLogo from "../assets/OrchidLogo.svg";
import TeaLogo from "../assets/TeaLogo.svg";
import CucumberLogo from "../assets/CucumberLogo.svg";




import Shape1 from "../assets/Shape1.svg";
import Shape2 from "../assets/Shape2.svg";
import Shape3 from "../assets/Shape3.svg";
import Shape4 from "../assets/Shape4.svg";
import Shape5 from "../assets/Shape5.svg";




import Frag1 from "../assets/Frag1.svg";
import Frag2 from "../assets/Frag2.svg";
import Frag3 from "../assets/Frag3.svg";
import Frag4 from "../assets/Frag4.svg";
import Frag5 from "../assets/Frag5.svg";
import Frag6 from "../assets/Frag6.svg";
import Frag7 from "../assets/Frag7.svg";



import item1 from "../assets/Razor.svg";
import item2 from "../assets/packet.svg";

import item3 from "../assets/Brush.svg";
import item4 from "../assets/Razor2.svg";
import item5 from "../assets/Razor3.svg";
import item6 from "../assets/Brush2.svg";
import item7 from "../assets/ToothPaste.svg";



import Dry1 from "../assets/Dry1.jpg";
import Dry2 from "../assets/Dry2.jpg";
import Dry3 from "../assets/Dry3.jpg";
import Dry4 from "../assets/Dry4.jpg";
import Dry5 from "../assets/Dry5.jpg";
import Dry6 from "../assets/Dry6.jpg";
import Dry7 from "../assets/Dry7.jpg";
import Dry8 from "../assets/Dry8.jpg";




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
  moments into exceptional experiences.`,
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

export const YOUR_HOTEL = [{
  
  title: "YOUR HOTEL • YOUR PICKS",
  description: `Every hotel has a story, a vibe, a signature welcome—your toiletries should reflect that.
With our full customization service, you control everything from bottle design to
fragrance, ingredients, and branding. Whether you prefer minimalist elegance or a bold
signature look, we bring your vision to life. Create a lasting impression—your hotel
deserves nothing less.`,
}];

export const PACKAGES = [
  {
    name: "Basic",
    title: "Dawn",
    description:
      "Embracing uniqueness is an invitation to relish life’s simple joys and greet each day with a smile.",
    liquid: [
      "Hair Shampoo 25ml/35ml",
      "Shower Gel 25ml/35ml",
      "Body Lotion 25ml/35ml",
      "Conditioner 25ml/35ml",
    ],
    soap: ["Soap 20g (Pouch Pack)", "Soap 25g (Pouch Pack)"],

    dryAmenities: [
      "Dental Kit- Toothbrush/Toothpaste",
      "Shaving Kit- Razor/Shaving Gel",

      "Disposal Bag/Vanity Kit/Shower Cap",
    ],
  },
  {
    name: "Standard",
    title: "Trance",
    description:
      "Blended for pure relaxation—a carefully curated mix of precious herbs and essential oil extracts pampers the skin with gentle cleansing and mild hydration.",
    liquid: [
      "Hair Shampoo 25ml/35ml",
      "Shower Gel 25ml/35ml",
      "Body Lotion 25ml/35ml",
      "Conditioner 25ml/35ml",
    ],
    soap: ["Soap 20g (Pouch Pack)", "Soap 25g (Pouch Pack)"],

    dryAmenities: [
      "Dental Kit- Toothbrush/Toothpaste",
      "Shaving Kit- Razor/Shaving Gel",

      "Disposal Bag/Vanity Kit/Shower Cap",
    ],
  },
  {
    name: "Premium",
    title: "Siasta",
    description:
      "Defined by nature, guided by science—Siesta by Hush and Bloom is our premier luxury skincare brand.",
    liquid: [
      "Hair Shampoo 25ml/35ml",
      "Shower Gel 25ml/35ml",
      "Body Lotion 25ml/35ml",
      "Conditioner 25ml/35ml",
    ],
    soap: ["Soap 20g (Pouch Pack)", "Soap 25g (Pouch Pack)"],

    dryAmenities: [
      "Dental Kit- Toothbrush/Toothpaste",
      "Shaving Kit- Razor/Shaving Gel",

      "Disposal Bag/Vanity Kit/Shower Cap",
    ],
  },
];


export const SHAPES_BOTTLES=[

{title:"Tube",
  imgSrc:Shape1,
  imgSrc1:Shape1,
  description:"Ideal for creams, lotions, and gels, offering a sleek and convenient design for easy dispensing."
},
{
  title:"Pump",
  imgSrc:Shape2,
  imgSrc1:Shape2,
  description:"Perfect for liquid products, providing controlled dispensing and a modern look.",
},
{
  title:"Spray Bottle",
  imgSrc:Shape3,
  imgSrc1:Shape3,
  description:"Classic design suitable for a variety of products, offering versatility and elegance.",
},
{
  title:"Bar Case",
  imgSrc:Shape4,
  imgSrc1:Shape4,
  description:"Ideal for creams and balms, providing a luxurious feel and easy access to the product.",
},
{
  title:"Mini Bottle",
  imgSrc:Shape5,
  imgSrc1:Shape5,
  description:"Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
},

]




export const FRAGRANCE = [
  {
    title: "Lavender Sarenity",
    imgSrc: Frag1,
    imgSrc1: hero1,
    description: "Ideal for creams, lotions, and gels, offering a sleek and convenient design for easy dispensing.",
  },
  {
    title: "Orchid Elegance",
    imgSrc: Frag2,
    imgSrc1: hero2,
    description:
      "Perfect for liquid products, providing controlled dispensing and a modern look.",
  },
  {
    title: "Lotus Blossom",
    imgSrc: Frag3,
    imgSrc1: hero3,
    description:
      "Classic design suitable for a variety of products, offering versatility and elegance.",
  },
  {
    title: "Eucalyptus Bliss",
    imgSrc: Frag4,
    imgSrc1: hero1,
    description:
      "Ideal for creams and balms, providing a luxurious feel and easy access to the product.",
  },
  {
    title: "Persian Lemon ",
    imgSrc: Frag5,
    imgSrc1: hero2,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
  },

  {
    title: "Cucumber Delight ",
    imgSrc: Frag6,
    imgSrc1: hero2,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
  },
];

export const DRY_ITEMS = [
  {
    title: "Razor (Bamboo)",
    imgSrc: item1,
    imgSrc1:Dry1,
    description:
      "Ideal for creams, lotions, and gels, offering a sleek and convenient design for easy dispensing.",
  },
  {
    title: "Razor (Wheatstraw)",
    imgSrc: item4,
    imgSrc1:Dry2,
    description:
      "Perfect for liquid products, providing controlled dispensing and a modern look.",
  },
  {
    title: "Razor (Dorco)",
    imgSrc: item5,
    imgSrc1:Dry3,
    description:
      "Classic design suitable for a variety of products, offering versatility and elegance.",
  },
  {
    title: "Gel (Gilette)",
    imgSrc: item2,
    imgSrc1:Dry4,
    description:
      "Ideal for creams and balms, providing a luxurious feel and easy access to the product.",
  },
  {
    title: "Gel (Etic)",
    imgSrc: item2,
    imgSrc1:Dry5,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
  },

  {
    title: "Toothbrush (Wheat Brush)",
    imgSrc: item3,
    imgSrc1:Dry6,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
  },
  {
    title: "Toothbrush (White Brush)",
    imgSrc: item6,
    imgSrc1:Dry7,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
  },
  {
    title: "Dental Kit: Colgate",
    imgSrc: item7,
    imgSrc1:Dry8,
    description:
      "Perfect for liquid products, offering a sleek and modern design for easy dispensing.",
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
    type: "video",
    video: hero4, // <-- Replace with your real video path
    heading: "Details That Make Stay 'Seamless'",
    subheading:
      "Curated dry amenities that complete the experience of hospitality.",
    buttonText: "Hi Hush & Bloom",
  },

  {
    type: "image",
    image: hero1,
    heading: "A Sanctuary of Care in 'Luxury'",
    subheading:
      "Where every detail is a promise of comfort and elegance with luxury.",
    buttonText: "Hi Siesta",
  },
  {
    type: "image",
    image: hero3,
    heading: "The Essence of Refined 'Hospitality'",
    subheading:
      "Indulgent hotel toiletries and amenities that redefine guest care.",
    buttonText: "Hi Trance",
  },
  {
    type: "image",
    image: hero2,
    heading: "Details That Make Stay 'Seamless'",
    subheading:
      "Curated dry amenities that complete the experience of hospitality.",
    buttonText: "Dry Items",
  },
];





export const FAQS = [
  {
    question: "What services does Hush and Bloom offer?",
    answer:
      "HnB offers a wide range of services including personalized toiletries kits, bulk orders, and customized packaging solutions. We specialize in creating high-quality, eco-friendly products tailored to your specific needs.",
  },
  {
    question: "Are your products suitable for Vegans?",
    answer:
      "Our products are certified as Vegan-friendly, We at Kimirica do not use any animal by-products like honey, milk, gelatine, etc. Kimirica has been awarded 100% Vegan product manufacturer certification from PETA.",
  },
  {
    question: "Once opened, how long are your products safe to use?",
    answer:
      " You can find this out on the product container itself, the Period After Opening (PAO) appears as a little picture of an open jar with a number displayed in the middle. The number tells you how long an opened product can be kept (for instance, 12M indicates 12 months).",
  },
  {
    question: "What products are included in your basic toiletries kit?",
    answer:
      "Our basic toiletries kit typically includes essentials such as shampoo, conditioner, body wash, soap, toothbrush, toothpaste, and a comb. We also offer add-ons like shaving kits, shower caps, and more based on your hotel’s requirements.",
  },
  {
    question: " Do you offer dry items along with toiletries?",
    answer:
      "Yes, we provide a range of dry items such as slippers, towels, sewing kits, and vanity kits. These can be ordered individually or bundled with the toiletries kit.",
  },
  {
    question: "Can we customize the products with our hotel’s branding?",
    answer:
      "Yes, we require a minimum order quantity for customized items, typically starting from 100 units depending on the product. Please contact us for specific details based on your needs.",
  },
  {
    question: "How long does it take to fulfill an order?",
    answer:
      "Standard orders are processed within 3–5 business days. For customized products, the lead time is usually 10–15 business days, depending on the design and quantity.",
  },
];

export const FAQ_DESCRIPTION =
  "Explore quick answers to common queries in our FAQ section. Whether it's about our services, policies, or more, find the information you need. Need further assistance? Contact our customer support for personalized help!";