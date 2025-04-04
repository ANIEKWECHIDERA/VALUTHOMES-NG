import mockProperties from "./mockProperties"; // Ensure this path is correct

// Define or import the Agent type
interface Agent {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  properties: (typeof mockProperties)[number][];
  address?: string;
  image?: string;
  phone?: string;
  isVerified: boolean;
  email?: string;
  about?: string;
  propertiesListed?: number;
  propertiesSold?: number;
  propertiesRented?: number;
  isOnline: boolean;
  testimonials?: { clientName: string; text: string }[];
  preferredContactMethod?: "chat" | "email" | "phone";
  businessHours?: string;
  socialMedia?: { platform: string; url: string }[];
}

const mockAgents: Agent[] = [
  {
    id: "agent001",
    name: "Amina Bello",
    location: "12 Marina Road, Lagos",
    rating: 4.2,
    reviewCount: 45,
    specialties: ["Residential", "Apartments"],
    properties: [],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    phone: "08023456789",
    isVerified: false,
    about:
      "Amina has over 10 years of experience helping clients find their dream homes in Lagos.",
    email: "amina.bello@example.com",
    propertiesListed: 25,
    propertiesSold: 15,
    propertiesRented: 8,
    isOnline: true,
    testimonials: [
      {
        clientName: "Tola Ade",
        text: "Amina was incredibly helpful and found me a perfect apartment!",
      },
      {
        clientName: "Chidi Obi",
        text: "Professional and responsive. Highly recommend.",
      },
    ],
    preferredContactMethod: "email",
    businessHours: "Mon-Fri, 9 AM - 5 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/amina_bello" },
      { platform: "Instagram", url: "https://instagram.com/amina.realtor" },
    ],
  },
  {
    id: "agent002",
    name: "Chukwudi Okeke",
    location: "15 Garki Street, Abuja",
    rating: 4.8,
    reviewCount: 92,
    specialties: ["Luxury", "Commercial"],
    properties: [],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    phone: "08134567890",
    isVerified: true,
    about:
      "Chukwudi specializes in high-end properties and commercial spaces in Abuja.",
    email: "chukwudi.okeke@example.com",
    propertiesListed: 40,
    propertiesSold: 28,
    propertiesRented: 10,
    isOnline: false,
    testimonials: [
      {
        clientName: "Bisi Lawal",
        text: "Sold my office space quickly and efficiently!",
      },
      { clientName: "Emeka Ugo", text: "A true expert in luxury real estate." },
      {
        clientName: "Shade Kola",
        text: "Great communication throughout the process.",
      },
    ],
    preferredContactMethod: "phone",
    businessHours: "Mon-Sat, 8 AM - 6 PM",
    socialMedia: [
      { platform: "Facebook", url: "https://facebook.com/chukwudi.realtor" },
    ],
  },
  {
    id: "agent003",
    name: "Fatima Yusuf",
    location: "8 Oil Mill Road, Port Harcourt",
    rating: 3.9,
    reviewCount: 30,
    specialties: ["Residential", "Land"],
    properties: [],
    image: "https://images.unsplash.com/photo-1573496359142-b8d877993ecb",
    phone: "07045678901",
    isVerified: false,
    about:
      "Fatima is passionate about helping clients secure affordable residential properties.",
    email: "fatima.yusuf@example.com",
    propertiesListed: 18,
    propertiesSold: 10,
    propertiesRented: 5,
    isOnline: true,
    testimonials: [
      {
        clientName: "Ngozi Eze",
        text: "Helped me buy a plot of land at a great price.",
      },
      { clientName: "Victor Amadi", text: "Very patient and knowledgeable." },
    ],
    preferredContactMethod: "chat",
    businessHours: "Mon-Fri, 10 AM - 4 PM",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/fatima_landlady" },
    ],
  },
  {
    id: "agent004",
    name: "Emeka Nwosu",
    location: "25 Victoria Island, Lagos",
    rating: 4.5,
    reviewCount: 78,
    specialties: ["Luxury", "House"],
    properties: [],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    phone: "08056789012",
    isVerified: true,
    about:
      "Emeka excels in finding luxury homes for discerning clients in Lagos.",
    email: "emeka.nwosu@example.com",
    propertiesListed: 35,
    propertiesSold: 22,
    propertiesRented: 12,
    isOnline: true,
    testimonials: [
      { clientName: "Lara Ojo", text: "Found my dream home in record time!" },
      { clientName: "Kunle Ade", text: "Top-notch service and expertise." },
    ],
    preferredContactMethod: "phone",
    businessHours: "Mon-Sat, 9 AM - 6 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/emeka_nwosu" },
      { platform: "Facebook", url: "https://facebook.com/emeka.realtor" },
    ],
  },
  {
    id: "agent005",
    name: "Grace Adebayo",
    location: "10 Ring Road, Ibadan",
    rating: 4.0,
    reviewCount: 52,
    specialties: ["Residential", "Self-Contain"],
    properties: [],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    phone: "08167890123",
    isVerified: false,
    about: "Grace focuses on affordable housing solutions in Ibadan.",
    email: "grace.adebayo@example.com",
    propertiesListed: 20,
    propertiesSold: 12,
    propertiesRented: 6,
    isOnline: false,
    testimonials: [
      {
        clientName: "Tunde Ola",
        text: "Great service for my self-contain rental.",
      },
      { clientName: "Funmi Ayo", text: "Reliable and friendly agent." },
    ],
    preferredContactMethod: "email",
    businessHours: "Mon-Fri, 8 AM - 4 PM",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/grace_homes" },
    ],
  },
  {
    id: "agent006",
    name: "Hassan Ibrahim",
    location: "7 Maitama Avenue, Abuja",
    rating: 4.3,
    reviewCount: 25,
    specialties: ["Commercial", "Office Space"],
    properties: [],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    phone: "07078901234",
    isVerified: false,
    about:
      "Hassan specializes in commercial real estate in Abuja’s business districts.",
    email: "hassan.ibrahim@example.com",
    propertiesListed: 15,
    propertiesSold: 8,
    propertiesRented: 4,
    isOnline: true,
    testimonials: [
      { clientName: "Aisha Musa", text: "Secured an office space quickly!" },
      { clientName: "Sani Bello", text: "Professional and thorough." },
    ],
    preferredContactMethod: "chat",
    businessHours: "Mon-Fri, 9 AM - 5 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/hassan_commercial" },
    ],
  },
  {
    id: "agent007",
    name: "Joy Okafor",
    location: "3 Lekki Phase 1, Lagos",
    rating: 4.7,
    reviewCount: 110,
    specialties: ["Residential", "Luxury"],
    properties: [],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    phone: "08089012345",
    isVerified: true,
    about: "Joy is a top agent for luxury residential properties in Lagos.",
    email: "joy.okafor@example.com",
    propertiesListed: 50,
    propertiesSold: 35,
    propertiesRented: 15,
    isOnline: true,
    testimonials: [
      { clientName: "Ada Eze", text: "Joy made buying my house a breeze!" },
      { clientName: "Obi Nwa", text: "Exceptional service and results." },
      { clientName: "Chioma Ude", text: "Highly skilled and trustworthy." },
    ],
    preferredContactMethod: "phone",
    businessHours: "Mon-Sat, 8 AM - 7 PM",
    socialMedia: [
      { platform: "Facebook", url: "https://facebook.com/joy.okafor.realtor" },
      { platform: "Instagram", url: "https://instagram.com/joy_luxuryhomes" },
    ],
  },
  {
    id: "agent008",
    name: "Kemi Adewale",
    location: "20 Trans Amadi, Port Harcourt",
    rating: 3.8,
    reviewCount: 40,
    specialties: ["Land", "Residential"],
    properties: [],
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    phone: "08190123456",
    isVerified: false,
    about: "Kemi helps clients invest in land and homes in Port Harcourt.",
    email: "kemi.adewale@example.com",
    propertiesListed: 22,
    propertiesSold: 13,
    propertiesRented: 7,
    isOnline: false,
    testimonials: [
      { clientName: "Ifeanyi Okoro", text: "Great deal on a plot of land!" },
      { clientName: "Blessing Eyo", text: "Friendly and reliable agent." },
    ],
    preferredContactMethod: "email",
    businessHours: "Mon-Fri, 9 AM - 3 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/kemi_landexpert" },
    ],
  },
  {
    id: "agent009",
    name: "Lanre Shittu",
    location: "5 Oba Akran Avenue, Ibadan",
    rating: 4.1,
    reviewCount: 60,
    specialties: ["House", "Apartments"],
    properties: [],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    phone: "07001234567",
    isVerified: false,
    about: "Lanre offers personalized service for homebuyers in Ibadan.",
    email: "lanre.shittu@example.com",
    propertiesListed: 28,
    propertiesSold: 18,
    propertiesRented: 9,
    isOnline: true,
    testimonials: [
      {
        clientName: "Yemi Alade",
        text: "Found a cozy apartment thanks to Lanre.",
      },
      { clientName: "Segun Olu", text: "Very attentive and helpful." },
    ],
    preferredContactMethod: "chat",
    businessHours: "Mon-Fri, 10 AM - 5 PM",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/lanre_homes" },
    ],
  },
  {
    id: "agent010",
    name: "Maryam Sani",
    location: "9 Wuse Zone 2, Abuja",
    rating: 4.6,
    reviewCount: 85,
    specialties: ["Luxury", "Commercial"],
    properties: [],
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
    phone: "08012345678",
    isVerified: true,
    about:
      "Maryam is a leading agent for luxury and commercial properties in Abuja.",
    email: "maryam.sani@example.com",
    propertiesListed: 45,
    propertiesSold: 30,
    propertiesRented: 14,
    isOnline: false,
    testimonials: [
      { clientName: "Zainab Ali", text: "Sold my property at a great price!" },
      { clientName: "Umar Dan", text: "Expert in luxury markets." },
      { clientName: "Hauwa Idris", text: "Fantastic service throughout." },
    ],
    preferredContactMethod: "phone",
    businessHours: "Mon-Sat, 9 AM - 6 PM",
    socialMedia: [
      { platform: "Facebook", url: "https://facebook.com/maryam.realtor" },
    ],
  },
  {
    id: "agent011",
    name: "Nnamdi Eze",
    location: "17 Ikoyi Crescent, Lagos",
    rating: 4.0,
    reviewCount: 35,
    specialties: ["Residential", "Short-Let"],
    properties: [],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    phone: "08123456789",
    isVerified: false,
    about:
      "Nnamdi specializes in short-term rentals and residential properties.",
    email: "nnamdi.eze@example.com",
    propertiesListed: 19,
    propertiesSold: 10,
    propertiesRented: 7,
    isOnline: true,
    testimonials: [
      { clientName: "Kelechi Ibe", text: "Perfect short-let for my vacation!" },
      { clientName: "Amaka Ony", text: "Quick and efficient service." },
    ],
    preferredContactMethod: "chat",
    businessHours: "Mon-Fri, 8 AM - 5 PM",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/nnamdi_shortlets" },
    ],
  },
  {
    id: "agent012",
    name: "Oluwaseun Afolabi",
    location: "14 Aba Road, Port Harcourt",
    rating: 4.4,
    reviewCount: 55,
    specialties: ["House", "Land"],
    properties: [],
    image: "https://images.unsplash.com/photo-1530268729831-4e723dfec259",
    phone: "07034567890",
    isVerified: false,
    about:
      "Oluwaseun helps clients buy and sell homes and land in Port Harcourt.",
    email: "oluwaseun.afolabi@example.com",
    propertiesListed: 23,
    propertiesSold: 14,
    propertiesRented: 8,
    isOnline: false,
    testimonials: [
      { clientName: "Efe Omo", text: "Great agent for land deals!" },
      { clientName: "Temi Bad", text: "Smooth home buying experience." },
    ],
    preferredContactMethod: "email",
    businessHours: "Mon-Fri, 9 AM - 4 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/oluwaseun_realtor" },
    ],
  },
  {
    id: "agent013",
    name: "Precious Umeh",
    location: "30 Banana Island, Lagos",
    rating: 4.9,
    reviewCount: 130,
    specialties: ["Luxury", "Residential"],
    properties: [],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    phone: "08045678901",
    isVerified: true,
    about:
      "Precious is renowned for her expertise in Lagos’ luxury real estate market.",
    email: "precious.umeh@example.com",
    propertiesListed: 60,
    propertiesSold: 42,
    propertiesRented: 18,
    isOnline: true,
    testimonials: [
      { clientName: "Dapo Aja", text: "Best agent I’ve ever worked with!" },
      { clientName: "Yetunde Oke", text: "Sold my mansion in days." },
      { clientName: "Femi Tai", text: "Unmatched professionalism." },
    ],
    preferredContactMethod: "phone",
    businessHours: "Mon-Sun, 8 AM - 8 PM",
    socialMedia: [
      { platform: "Facebook", url: "https://facebook.com/precious.realtor" },
      { platform: "Instagram", url: "https://instagram.com/precious_luxury" },
    ],
  },
  {
    id: "agent014",
    name: "Tunde Bakare",
    location: "6 Dugbe Street, Ibadan",
    rating: 3.7,
    reviewCount: 20,
    specialties: ["Commercial", "Warehouse"],
    properties: [],
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    phone: "08156789012",
    isVerified: false,
    about: "Tunde focuses on commercial properties and warehouses in Ibadan.",
    email: "tunde.bakare@example.com",
    propertiesListed: 12,
    propertiesSold: 6,
    propertiesRented: 3,
    isOnline: false,
    testimonials: [
      {
        clientName: "Bola Ade",
        text: "Found a great warehouse for my business.",
      },
      { clientName: "Seyi Olu", text: "Good service, reliable agent." },
    ],
    preferredContactMethod: "email",
    businessHours: "Mon-Fri, 9 AM - 3 PM",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/tunde_commercial" },
    ],
  },
  {
    id: "agent015",
    name: "Zainab Musa",
    location: "22 Asokoro Lane, Abuja",
    rating: 4.2,
    reviewCount: 48,
    specialties: ["Residential", "Apartments"],
    properties: [],
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    phone: "07067890123",
    isVerified: false,
    about: "Zainab assists clients in finding quality apartments in Abuja.",
    email: "zainab.musa@example.com",
    propertiesListed: 26,
    propertiesSold: 16,
    propertiesRented: 10,
    isOnline: true,
    testimonials: [
      {
        clientName: "Hassan Ali",
        text: "Zainab found me a perfect apartment!",
      },
      { clientName: "Amina Dan", text: "Very dedicated and friendly." },
    ],
    preferredContactMethod: "chat",
    businessHours: "Mon-Fri, 10 AM - 5 PM",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/zainab_apartments" },
    ],
  },
];
export default mockAgents;
