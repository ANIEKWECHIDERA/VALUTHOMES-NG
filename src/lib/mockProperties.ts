interface Property {
  id: string;
  name: string;
  price?: string;
  rentRate?: string;
  description: string;
  beds: number;
  size: number;
  baths: number;
  images: string[];
  condition: "new" | "used";
  status: "available" | "sold" | "rented";
  location: string;
  category: "sale" | "rent" | "luxury" | "commercial";
  type:
    | "short-let"
    | "apartment"
    | "self-contain"
    | "bungalow"
    | "duplex"
    | "land"
    | "office-space"
    | "shop"
    | "warehouse";
  dateCreated: string;
  dateUpdated: string;
}

const mockProperties: Property[] = [
  // For Rent (15)
  {
    id: "prop001",
    name: "Ikoyi Modern Apartment",
    price: undefined,
    rentRate: "2500000", // per month
    description: "Contemporary 3-bed apartment with city views",
    beds: 3,
    size: 150,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "rent",
    type: "apartment",
    dateCreated: "2024-10-01",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop002",
    name: "Garki Self-Contain",
    price: undefined,
    rentRate: "800000", // per month
    description: "Compact self-contained unit near business district",
    beds: 1,
    size: 60,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "used",
    status: "rented",
    location: "Abuja",
    category: "rent",
    type: "self-contain",
    dateCreated: "2024-09-15",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop003",
    name: "GRA Duplex",
    price: undefined,
    rentRate: "3500000", // per month
    description: "Spacious duplex in quiet residential area",
    beds: 4,
    size: 250,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "used",
    status: "available",
    location: "Port Harcourt",
    category: "rent",
    type: "duplex",
    dateCreated: "2024-11-20",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop004",
    name: "Bodija Bungalow",
    price: undefined,
    rentRate: "1200000", // per month
    description: "Cozy bungalow with small garden",
    beds: 3,
    size: 180,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "used",
    status: "rented",
    location: "Ibadan",
    category: "rent",
    type: "bungalow",
    dateCreated: "2024-12-05",
    dateUpdated: "2025-03-20",
  },
  {
    id: "prop005",
    name: "Lekki Office Suite",
    price: undefined,
    rentRate: "2000000", // per month
    description: "Modern office space in business hub",
    beds: 1,
    size: 200,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "rent",
    type: "office-space",
    dateCreated: "2025-01-10",
    dateUpdated: "2025-03-29",
  },
  {
    id: "prop006",
    name: "Maitama Short-Let",
    price: undefined,
    rentRate: "20000", // per day
    description: "Furnished short-let apartment for visitors",
    beds: 2,
    size: 100,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "rent",
    type: "short-let",
    dateCreated: "2025-02-01",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop007",
    name: "Trans Amadi Warehouse",
    price: undefined,
    rentRate: "4000000", // per month
    description: "Large warehouse for industrial use",
    beds: 1,
    size: 500,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1586528116311-01c1d9b6c2f8",
      "https://images.unsplash.com/photo-1586528116022-ecd215db6b62",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "used",
    status: "available",
    location: "Port Harcourt",
    category: "rent",
    type: "warehouse",
    dateCreated: "2024-10-25",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop008",
    name: "Jericho Shop Space",
    price: undefined,
    rentRate: "900000", // per month
    description: "Retail shop in busy commercial area",
    beds: 1,
    size: 80,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1444201983204-c043fb9e6a84",
      "https://images.unsplash.com/photo-1507089947368-19c1af1cb8af",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "rent",
    type: "shop",
    dateCreated: "2025-01-05",
    dateUpdated: "2025-03-27",
  },
  {
    id: "prop009",
    name: "Banana Island Apartment",
    price: undefined,
    rentRate: "3000000", // per month
    description: "Upscale apartment with water views",
    beds: 3,
    size: 180,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "rent",
    type: "apartment",
    dateCreated: "2025-02-15",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop010",
    name: "Asokoro Self-Contain",
    price: undefined,
    rentRate: "1000000", // per month
    description: "Modern self-contained unit in upscale area",
    beds: 1,
    size: 70,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "rented",
    location: "Abuja",
    category: "rent",
    type: "self-contain",
    dateCreated: "2024-11-01",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop011",
    name: "Old GRA Bungalow",
    price: undefined,
    rentRate: "1500000", // per month
    description: "Classic bungalow with large compound",
    beds: 3,
    size: 200,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "used",
    status: "available",
    location: "Port Harcourt",
    category: "rent",
    type: "bungalow",
    dateCreated: "2024-12-10",
    dateUpdated: "2025-03-20",
  },
  {
    id: "prop012",
    name: "Ring Road Office",
    price: undefined,
    rentRate: "1800000", // per month
    description: "Office space with ample parking",
    beds: 1,
    size: 220,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "rent",
    type: "office-space",
    dateCreated: "2025-01-15",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop013",
    name: "Victoria Island Short-Let",
    price: undefined,
    rentRate: "25000", // per day
    description: "Luxury short-let with ocean views",
    beds: 2,
    size: 120,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "rent",
    type: "short-let",
    dateCreated: "2025-02-20",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop014",
    name: "Wuse Land Plot",
    price: undefined,
    rentRate: "500000", // per month
    description: "Land for temporary use or development",
    beds: 1,
    size: 800,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "rent",
    type: "land",
    dateCreated: "2024-10-15",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop015",
    name: "Rumuola Duplex",
    price: undefined,
    rentRate: "2800000", // per month
    description: "Modern duplex with spacious rooms",
    beds: 4,
    size: 260,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "rent",
    type: "duplex",
    dateCreated: "2025-01-25",
    dateUpdated: "2025-03-15",
  },

  // For Sale (15)
  {
    id: "prop016",
    name: "Eko Atlantic Apartment",
    price: "75000000",
    rentRate: undefined,
    description: "New 3-bed apartment in prime location",
    beds: 3,
    size: 160,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "sale",
    type: "apartment",
    dateCreated: "2025-02-10",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop017",
    name: "Jabi Duplex",
    price: "95000000",
    rentRate: undefined,
    description: "Spacious duplex with modern design",
    beds: 4,
    size: 280,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "sold",
    location: "Abuja",
    category: "sale",
    type: "duplex",
    dateCreated: "2024-11-15",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop018",
    name: "Elelenwo Bungalow",
    price: "40000000",
    rentRate: undefined,
    description: "Single-story bungalow with large plot",
    beds: 3,
    size: 200,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "used",
    status: "available",
    location: "Port Harcourt",
    category: "sale",
    type: "bungalow",
    dateCreated: "2024-12-15",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop019",
    name: "Oluyole Land",
    price: "30000000",
    rentRate: undefined,
    description: "Prime 1000sqm land for development",
    beds: 1,
    size: 1000,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "sale",
    type: "land",
    dateCreated: "2025-01-20",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop020",
    name: "Ikoyi Office Building",
    price: "120000000",
    rentRate: undefined,
    description: "Multi-story office building in business district",
    beds: 1,
    size: 350,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "sale",
    type: "office-space",
    dateCreated: "2025-02-05",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop021",
    name: "Gwarinpa Apartment",
    price: "50000000",
    rentRate: undefined,
    description: "Affordable 2-bed apartment",
    beds: 2,
    size: 130,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "used",
    status: "available",
    location: "Abuja",
    category: "sale",
    type: "apartment",
    dateCreated: "2024-10-20",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop022",
    name: "Rumuigbo Duplex",
    price: "85000000",
    rentRate: undefined,
    description: "Modern duplex with ample parking",
    beds: 4,
    size: 270,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "sale",
    type: "duplex",
    dateCreated: "2025-01-30",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop023",
    name: "Challenge Bungalow",
    price: "35000000",
    rentRate: undefined,
    description: "Compact bungalow with garden",
    beds: 3,
    size: 170,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "used",
    status: "sold",
    location: "Ibadan",
    category: "sale",
    type: "bungalow",
    dateCreated: "2024-11-25",
    dateUpdated: "2025-03-20",
  },
  {
    id: "prop024",
    name: "Lekki Phase 1 Land",
    price: "60000000",
    rentRate: undefined,
    description: "800sqm land in prime residential area",
    beds: 1,
    size: 800,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "sale",
    type: "land",
    dateCreated: "2025-02-15",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop025",
    name: "Utako Warehouse",
    price: "110000000",
    rentRate: undefined,
    description: "Large warehouse for industrial use",
    beds: 1,
    size: 600,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1586528116311-01c1d9b6c2f8",
      "https://images.unsplash.com/photo-1586528116022-ecd215db6b62",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "used",
    status: "available",
    location: "Abuja",
    category: "sale",
    type: "warehouse",
    dateCreated: "2024-12-01",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop026",
    name: "Woji Apartment",
    price: "45000000",
    rentRate: undefined,
    description: "2-bed apartment in quiet neighborhood",
    beds: 2,
    size: 120,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "sale",
    type: "apartment",
    dateCreated: "2025-01-10",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop027",
    name: "Agodi Land",
    price: "25000000",
    rentRate: undefined,
    description: "700sqm land for residential use",
    beds: 1,
    size: 700,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "sale",
    type: "land",
    dateCreated: "2025-02-20",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop028",
    name: "Ajah Duplex",
    price: "70000000",
    rentRate: undefined,
    description: "4-bed duplex with modern finishes",
    beds: 4,
    size: 250,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "sale",
    type: "duplex",
    dateCreated: "2025-01-05",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop029",
    name: "Kubwa Bungalow",
    price: "38000000",
    rentRate: undefined,
    description: "3-bed bungalow with spacious compound",
    beds: 3,
    size: 190,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "used",
    status: "available",
    location: "Abuja",
    category: "sale",
    type: "bungalow",
    dateCreated: "2024-10-25",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop030",
    name: "D-Line Office",
    price: "90000000",
    rentRate: undefined,
    description: "Office space in commercial hub",
    beds: 1,
    size: 300,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "sale",
    type: "office-space",
    dateCreated: "2025-02-25",
    dateUpdated: "2025-03-15",
  },

  // Luxury Listings (10)
  {
    id: "prop031",
    name: "Banana Island Mansion",
    price: "250000000",
    rentRate: undefined,
    description:
      "450sqm luxury duplex with high ceilings, marble finishes, smart home tech, infinity pool, and home theater",
    beds: 5,
    size: 450,
    baths: 6,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1600566753376-77c1c81a071d",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "luxury",
    type: "duplex",
    dateCreated: "2025-01-15",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop032",
    name: "Maitama Luxury Apartment",
    price: undefined,
    rentRate: "7500000", // per month
    description:
      "350sqm penthouse with custom finishes, premium appliances, rooftop terrace, and wine cellar",
    beds: 4,
    size: 350,
    baths: 5,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "luxury",
    type: "apartment",
    dateCreated: "2025-02-01",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop033",
    name: "GRA Luxury Bungalow",
    price: "180000000",
    rentRate: undefined,
    description:
      "400sqm bungalow with expansive layout, high-end finishes, outdoor kitchen, and smart home features",
    beds: 5,
    size: 400,
    baths: 5,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "luxury",
    type: "bungalow",
    dateCreated: "2025-01-20",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop034",
    name: "Jericho Luxury Duplex",
    price: undefined,
    rentRate: "6000000", // per month
    description:
      "420sqm duplex with marble floors, premium appliances, pool, and home gym",
    beds: 5,
    size: 420,
    baths: 6,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "luxury",
    type: "duplex",
    dateCreated: "2025-02-10",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop035",
    name: "Lekki Luxury Short-Let",
    price: undefined,
    rentRate: "50000", // per day
    description:
      "300sqm short-let with high ceilings, designer finishes, private pool, and smart tech",
    beds: 4,
    size: 300,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "luxury",
    type: "short-let",
    dateCreated: "2025-02-15",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop036",
    name: "Asokoro Executive Office",
    price: "200000000",
    rentRate: undefined,
    description:
      "500sqm office with premium finishes, smart systems, and expansive conference rooms",
    beds: 1,
    size: 500,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "luxury",
    type: "office-space",
    dateCreated: "2025-01-25",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop037",
    name: "Trans Amadi Luxury Duplex",
    price: "220000000",
    rentRate: undefined,
    description:
      "480sqm duplex with custom millwork, infinity pool, outdoor kitchen, and home theater",
    beds: 6,
    size: 480,
    baths: 6,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "luxury",
    type: "duplex",
    dateCreated: "2025-02-05",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop038",
    name: "Bodija Luxury Bungalow",
    price: undefined,
    rentRate: "5500000", // per month
    description:
      "380sqm bungalow with high-end finishes, smart home tech, and landscaped gardens",
    beds: 4,
    size: 380,
    baths: 5,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600607688969-585cc83532ea",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "luxury",
    type: "bungalow",
    dateCreated: "2025-01-30",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop039",
    name: "Ikoyi Luxury Apartment",
    price: "150000000",
    rentRate: undefined,
    description:
      "320sqm apartment with marble finishes, premium appliances, and rooftop terrace",
    beds: 4,
    size: 320,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "luxury",
    type: "apartment",
    dateCreated: "2025-02-20",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop040",
    name: "Wuse Luxury Short-Let",
    price: undefined,
    rentRate: "45000", // per day
    description:
      "310sqm short-let with designer interiors, private pool, and smart home features",
    beds: 4,
    size: 310,
    baths: 4,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1618221195710-dd2d1738fa46",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "luxury",
    type: "short-let",
    dateCreated: "2025-02-25",
    dateUpdated: "2025-03-25",
  },

  // Commercial (10)
  {
    id: "prop041",
    name: "Lekki Commercial Land",
    price: "80000000",
    rentRate: undefined,
    description: "1000sqm land for commercial development",
    beds: 1,
    size: 1000,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "commercial",
    type: "land",
    dateCreated: "2025-01-10",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop042",
    name: "Garki Office Complex",
    price: undefined,
    rentRate: "3500000", // per month
    description: "300sqm office space with modern facilities",
    beds: 1,
    size: 300,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "commercial",
    type: "office-space",
    dateCreated: "2025-02-01",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop043",
    name: "GRA Shop Space",
    price: "45000000",
    rentRate: undefined,
    description: "120sqm retail space in high-traffic area",
    beds: 1,
    size: 120,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1444201983204-c043fb9e6a84",
      "https://images.unsplash.com/photo-1507089947368-19c1af1cb8af",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "commercial",
    type: "shop",
    dateCreated: "2025-01-15",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop044",
    name: "Iwo Road Warehouse",
    price: undefined,
    rentRate: "2500000", // per month
    description: "400sqm warehouse with loading bay",
    beds: 1,
    size: 400,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1586528116311-01c1d9b6c2f8",
      "https://images.unsplash.com/photo-1586528116022-ecd215db6b62",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "used",
    status: "available",
    location: "Ibadan",
    category: "commercial",
    type: "warehouse",
    dateCreated: "2025-02-10",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop045",
    name: "Victoria Island Office",
    price: "130000000",
    rentRate: undefined,
    description: "350sqm office in prime business district",
    beds: 1,
    size: 350,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "commercial",
    type: "office-space",
    dateCreated: "2025-02-15",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop046",
    name: "Wuse Commercial Land",
    price: "70000000",
    rentRate: undefined,
    description: "900sqm land for commercial use",
    beds: 1,
    size: 900,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "commercial",
    type: "land",
    dateCreated: "2025-01-20",
    dateUpdated: "2025-03-25",
  },
  {
    id: "prop047",
    name: "Rumuola Shop",
    price: undefined,
    rentRate: "1200000", // per month
    description: "100sqm retail space in commercial area",
    beds: 1,
    size: 100,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1444201983204-c043fb9e6a84",
      "https://images.unsplash.com/photo-1507089947368-19c1af1cb8af",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Port Harcourt",
    category: "commercial",
    type: "shop",
    dateCreated: "2025-02-05",
    dateUpdated: "2025-03-15",
  },
  {
    id: "prop048",
    name: "Bashorun Warehouse",
    price: "95000000",
    rentRate: undefined,
    description: "450sqm warehouse with high ceilings",
    beds: 1,
    size: 450,
    baths: 2,
    images: [
      "https://images.unsplash.com/photo-1586528116311-01c1d9b6c2f8",
      "https://images.unsplash.com/photo-1586528116022-ecd215db6b62",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Ibadan",
    category: "commercial",
    type: "warehouse",
    dateCreated: "2025-01-25",
    dateUpdated: "2025-03-28",
  },
  {
    id: "prop049",
    name: "Ajah Office Space",
    price: undefined,
    rentRate: "2800000", // per month
    description: "320sqm office with modern amenities",
    beds: 1,
    size: 320,
    baths: 3,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366754035-f50d2cf42e0b",
      "https://images.unsplash.com/photo-1549638441-b78d2f225435",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1528238166466-65b7f2b69349",
    ],
    condition: "new",
    status: "available",
    location: "Lagos",
    category: "commercial",
    type: "office-space",
    dateCreated: "2025-02-20",
    dateUpdated: "2025-03-30",
  },
  {
    id: "prop050",
    name: "Mabushi Commercial Land",
    price: "65000000",
    rentRate: undefined,
    description: "850sqm land for commercial development",
    beds: 1,
    size: 850,
    baths: 1,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1433838554216-8e14d2258a84",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1509114397022-ed747465a0f2",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
    ],
    condition: "new",
    status: "available",
    location: "Abuja",
    category: "commercial",
    type: "land",
    dateCreated: "2025-02-25",
    dateUpdated: "2025-03-25",
  },
];

export default mockProperties;
