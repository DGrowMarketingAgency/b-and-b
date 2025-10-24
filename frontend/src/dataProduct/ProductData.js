import unique1 from "../assets/unique (2).png";
import unique2 from "../assets/unique (3).png";
import unique3 from "../assets/unique (4).png";
import unique4 from "../assets/unique (5).png";
import unique5 from "../assets/unique (6).png";
import unique6 from "../assets/unique (1).png";
const conexaConnectionProducts = [
  {
    id: 101,
    category: "CONEXA CONNECTION",
    brand: "B&B Dental",
    name: "CONEXA Implant Alpha",
    price: 399.0,
    sku: "CONEXA-ALPHA",
    images: [
      { url: `${unique1}`, alt: "CONEXA Alpha Front" },
      { url: "../assets/unique (2).png", alt: "CONEXA Alpha Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "18 months",
      delivery: "Free shipping worldwide",
    },
    description: "Precision CONEXA implant for optimal torque control.",
    properties: [
      "Titanium Grade 5",
      "Single CONEXA connection",
      "High torque resistance",
    ],
  },
  {
    id: 102,
    category: "CONEXA CONNECTION",
    brand: "B&B Dental",
    name: "CONEXA Implant Beta",
    price: 419.0,
    sku: "CONEXA-BETA",
    images: [
      { url: "/images/conexa2.png", alt: "CONEXA Beta Front" },
      { url: "/images/conexa2b.png", alt: "CONEXA Beta Side" },
    ],
    specifications: {
      diameters: ["Ø 4.0", "Ø 4.5"],
      lengths: [10, 12, 14],
      warranty: "18 months",
      delivery: "Includes installation kit",
    },
    description: "Reliable CONEXA implant for posterior regions.",
    properties: [
      "Platform switching",
      "Color-coded instruments",
      "Autoclavable",
    ],
  },
  {
    id: 103,
    category: "CONEXA CONNECTION",
    brand: "B&B Dental",
    name: "CONEXA Implant Gamma",
    price: 439.0,
    sku: "CONEXA-GAMMA",
    images: [
      { url: "/images/conexa3.png", alt: "CONEXA Gamma Front" },
      { url: "/images/conexa3b.png", alt: "CONEXA Gamma Side" },
    ],
    specifications: {
      diameters: ["Ø 4.5", "Ø 5.0"],
      lengths: [12, 14, 16],
      warranty: "24 months",
      delivery: "Delivered within 5 days",
    },
    description: "Advanced CONEXA implant for high stability cases.",
    properties: [
      "Micro-threaded neck",
      "Grade 4 Titanium",
      "Ideal for D1-D2 bone types",
    ],
  },
];
const subperiostealImplants = [
  {
    id: 401,
    category: "SUBPERIOSTEAL IMPLANT",
    brand: "B&B Dental",
    name: "Subperiosteal Implant Delta",
    price: 599.0,
    sku: "SUBP-DELTA",
    images: [
      { url: "/images/subp1.png", alt: "Subperiosteal Delta Top" },
      { url: "/images/subp1b.png", alt: "Subperiosteal Delta Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [10, 12],
      warranty: "12 months",
      delivery: "Custom fit available",
    },
    description: "Implant for patients with severe bone loss.",
    properties: [
      "Custom framework",
      "Ideal for edentulous jaws",
      "Minimally invasive",
    ],
  },
  {
    id: 402,
    category: "SUBPERIOSTEAL IMPLANT",
    brand: "B&B Dental",
    name: "Subperiosteal Implant Sigma",
    price: 625.0,
    sku: "SUBP-SIGMA",
    images: [
      { url: "/images/subp2.png", alt: "Subperiosteal Sigma Top" },
      { url: "/images/subp2b.png", alt: "Subperiosteal Sigma Side" },
    ],
    specifications: {
      diameters: ["Ø 4.0", "Ø 4.5"],
      lengths: [12, 14],
      warranty: "12 months",
      delivery: "Includes surgical template",
    },
    description: "Subperiosteal implant for complex anatomy.",
    properties: [
      "Titanium mesh",
      "CAD/CAM design",
      "Bone adaptation technology",
    ],
  },
];
const surgicalKits = [
  {
    id: 301,
    category: "B&B SURGICAL KITS",
    brand: "B&B Dental",
    name: "Surgical Kit Prime",
    price: 899.0,
    sku: "KIT-PRIME",
    images: [
      { url: "/images/kit1.png", alt: "Surgical Kit Prime Top" },
      { url: "/images/kit1b.png", alt: "Surgical Kit Prime Open" },
    ],
    specifications: {
      diameters: ["Ø 2.0", "Ø 2.5"],
      lengths: [8, 10],
      warranty: "36 months",
      delivery: "Includes training manual",
    },
    description: "Complete surgical kit for implant procedures.",
    properties: [
      "Autoclavable tray",
      "Color-coded drills",
      "Depth stops included",
    ],
  },
  {
    id: 302,
    category: "B&B SURGICAL KITS",
    brand: "B&B Dental",
    name: "Surgical Kit Ultra",
    price: 919.0,
    sku: "KIT-ULTRA",
    images: [
      { url: "/images/kit2.png", alt: "Surgical Kit Ultra Top" },
      { url: "/images/kit2b.png", alt: "Surgical Kit Ultra Open" },
    ],
    specifications: {
      diameters: ["Ø 2.5", "Ø 3.0"],
      lengths: [10, 12],
      warranty: "36 months",
      delivery: "Includes sterilization pouch",
    },
    description: "Advanced kit for guided surgery.",
    properties: [
      "Laser-etched markings",
      "Ergonomic handles",
      "Reusable components",
    ],
  },
];
const uniqueImplants = [
  {
    id: 201,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "EV IMPLANT",
    price: 499.0,
    sku: " EV-4008",
    images: [
      { url: `${unique1}`, alt: "Unique Orion Front" },
      { url: `${unique1}`, alt: "Unique Orion Side" },
    ],
    specifications: {
      diameters: ["Ø 3.0", "Ø 3.5"],
      lengths: [6, 8, 10],
      warranty: "24 months",
      delivery: "Delivered within 5 days",
    },
    description:
      "The DURA-VIT 3P IMPLANT is suitable for all surgical procedures and excellent in all bone types, and thanks to its characteristics it guarantees better control during implant placement and high primary stability.",
    properties: [
      "Excellent in all bone types (especially D1-D2)",
      " Ensure high primary stability",
      "Ideal in sites next to sinus or nerve",
      "Suitable for all surgical procedures",
      "Grade 4 Titanium",
    ],
  },
  {
    id: 202,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "DURA-VIT 3P IMPLANT",
    price: 515.0,
    sku: "3P-3508",
    images: [
      { url: `${unique2}`, alt: "Unique Vega Front" },
      { url: `${unique2}`, alt: "Unique Vega Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "24 months",
      delivery: "Includes surgical guide",
    },
    description:
      "The DURA-VIT 3P IMPLANT is suitable for all surgical procedures and excellent in all bone types, and thanks to its characteristics it guarantees better control during implant placement and high primary stability.",
    properties: [
      " Excellent in all bone types (especially D1-D2)",
      " Ensure high primary stability",
      " Ideal in sites next to sinus or nerve",
      " Suitable for all surgical procedures",
      " Grade 4 Titanium",
    ],
  },
  {
    id: 203,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "WIDE IMPLANT",
    price: 515.0,
    sku: "WIDE-5506",
    images: [
      { url: `${unique3}`, alt: "Unique Vega Front" },
      { url: `${unique3}`, alt: "Unique Vega Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "24 months",
      delivery: "Includes surgical guide",
    },
    description:
      "The DURA-VIT PTERYGO implant is the solution designed for maxillary atrophies as an alternative to regenerative or sinus lift procedures.",
    properties: [
      "Ideal in the area behind the tuber.",

      "Ideal for supporting all-on-six.",

      "Can also be inserted with a guided technique.",

      "Grade 4 Titanium.",
    ],
  },
  {
    id: 204,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "PTERYGOID",
    price: 515.0,
    sku: "PTI-4716",
    images: [
      { url: `${unique4}`, alt: "Unique Vega Front" },
      { url: `${unique4}`, alt: "Unique Vega Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "24 months",
      delivery: "Includes surgical guide",
    },
    description:
      "The DURA-VIT PTERYGO implant is the solution designed for maxillary atrophies as an alternative to regenerative or sinus lift procedures.",
    properties: [
      " Ideal in the area behind the tuber.",

      " Ideal for supporting all-on-six.",

      " Can also be inserted with a guided technique.",

      " Grade 4 Titanium.",
    ],
  },
  {
    id: 205,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "SLIM IMPLANT",
    price: 515.0,
    sku: "3P-3008",
    images: [
      { url: `${unique5}`, alt: "Unique Vega Front" },
      { url: `${unique5}`, alt: "Unique Vega Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "24 months",
      delivery: "Includes surgical guide",
    },
    description:
      "The DURA-VIT PTERYGO implant is the solution designed for maxillary atrophies as an alternative to regenerative or sinus lift procedures.",
    properties: [
      " Ideal in the area behind the tuber.",

      " Ideal for supporting all-on-six.",

      " Can also be inserted with a guided technique.",

      " Grade 4 Titanium.",
    ],
  },
  {
    id: 206,
    category: "6 UNIQUE IMPLANT",
    brand: "B&B Dental",
    name: "MINI IMPLANT",
    price: 515.0,
    sku: "UNIQ-VEGA",
    images: [
      { url: `${unique6}`, alt: "Unique Vega Front" },
      { url: `${unique6}`, alt: "Unique Vega Side" },
    ],
    specifications: {
      diameters: ["Ø 3.5", "Ø 4.0"],
      lengths: [8, 10, 12],
      warranty: "24 months",
      delivery: "Includes surgical guide",
    },
    description:
      "The DURA-VIT MINI implant system is primarily indicated during the healing period in treatment with conventional implants for the stabilization of temporary mobile dental prostheses using a minimally invasive transmucosal technique. However, it can also be used for permanent restoration of full or partial dentures with immediate loading in both dense and soft bone. It includes mini round head and square head implants.",
    properties: [
      " The line of round head mini implants provides immediate and prolonged stability of REMOVABLE PROSTHESES, which in turn ensures the patient also excellent and quick results.",

      " The mini square head implants produce strong primary stability with immediate functionality. They are inserted mainly in the anterior areas to replace lateral, cuspid and bicuspid teeth.",
    ],
  },
];
const products = [
  ...conexaConnectionProducts,
  ...uniqueImplants,
  ...surgicalKits,
  ...subperiostealImplants,
];

export default products;
