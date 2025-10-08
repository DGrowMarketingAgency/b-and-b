// products.js

import productImg1 from "../assets/unique (1).png";
import productImg2 from "../assets/unique (2).png";
import productImg3 from "../assets/unique (3).png";
// 👆 import all 8 product images

const products = [
  {
    id: 1,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT 3P IMPLANT",
    price: "$455.00",
    sku: "EV-4008",
    images: [{ url: productImg1, alt: "B&B Dental Implant - DURA-VIT 3P" }],
    specifications: {
      diameters: ["Ø 4.0", "Ø 4.0", "Ø 4.5", "Ø 5.0"],
      lengths: [8, 8, 10, 12, 14, 16],
      warranty: "12 months",
      delivery: "Delivery and Installation are all included",
    },
    description:
      "The DURA-VIT 3P IMPLANT is suitable for all surgical procedures and excellent in all bone types. Thanks to its characteristics, it guarantees better control during implant placement and high primary stability.",
    properties: [
      "Excellent in all bone types (especially D1-D2)",
      "Ensures high primary stability",
      "Ideal in sites next to sinus or nerve",
      "Suitable for all surgical procedures",
      "Made from Grade 4 Titanium",
    ],
    colourCodeGuide:
      "The colour code of the implant diameters allows intuitive selection of the surgical instruments.",
    lineDetails: {
      diameters: ["3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm"],
      lengths: ["6.5 mm", "8.0 mm", "10 mm", "12 mm", "14 mm"],
      connection: "Single CONEXA connection",
    },
    instrumentation: {
      included: ["Drills", "Compactors", "Countersinks", "Depth Stops"],
      description:
        "Inside the surgical instrumentation, there are the instruments for correct preparation of implant sites.",
    },
  },
  {
    id: 2,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT EV IMPLANT",
    price: "$420.00",
    sku: "EV-4010",
    images: [{ url: productImg2, alt: "B&B Dental Implant - DURA-VIT EV" }],
    specifications: {
      diameters: ["Ø 4.0", "Ø 4.0", "Ø 4.5", "Ø 5.0"],
      lengths: [8, 8, 10, 12, 14, 16],
      warranty: "12 months",
      delivery: "Delivery and Installation are all included",
    },
    description:
      "The DURA-VIT 3P IMPLANT is suitable for all surgical procedures and excellent in all bone types. Thanks to its characteristics, it guarantees better control during implant placement and high primary stability.",
    properties: [
      "Excellent in all bone types (especially D1-D2)",
      "Ensures high primary stability",
      "Ideal in sites next to sinus or nerve",
      "Suitable for all surgical procedures",
      "Made from Grade 4 Titanium",
    ],
    colourCodeGuide:
      "The colour code of the implant diameters allows intuitive selection of the surgical instruments.",
    lineDetails: {
      diameters: ["3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm"],
      lengths: ["6.5 mm", "8.0 mm", "10 mm", "12 mm", "14 mm"],
      connection: "Single CONEXA connection",
    },
    instrumentation: {
      included: ["Drills", "Compactors", "Countersinks", "Depth Stops"],
      description:
        "Inside the surgical instrumentation, there are the instruments for correct preparation of implant sites.",
    },
    // ...rest of details
  },
  {
    id: 3,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT PRO IMPLANT",
    price: "$499.00",
    sku: "EV-4020",
    images: [{ url: productImg3, alt: "B&B Dental Implant - DURA-VIT PRO" }],
    // ...rest of details
  },
  {
    id: 4,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT EV IMPLANT",
    price: "$420.00",
    sku: "EV-4010",
    images: [{ url: productImg2, alt: "B&B Dental Implant - DURA-VIT EV" }],
    // ...rest of details
  },
  {
    id: 5,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT PRO IMPLANT",
    price: "$499.00",
    sku: "EV-4020",
    images: [{ url: productImg3, alt: "B&B Dental Implant - DURA-VIT PRO" }],
    // ...rest of details
  },
  {
    id: 6,
    brand: "B&B DENTAL IMPLANT",
    name: "DURA-VIT EV IMPLANT",
    price: "$420.00",
    sku: "EV-4010",
    images: [{ url: productImg2, alt: "B&B Dental Implant - DURA-VIT EV" }],
    // ...rest of details
  },

  // 👇 add products up to 8
];

export default products;
