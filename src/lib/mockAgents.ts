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
  image: string;
  phone?: string;
  isVerified?: boolean;
  email?: string;
}

const mockAgents: Agent[] = [
  {
    id: "20",
    name: "John Doe",
    location: "Lagos",
    rating: 4.5,
    reviewCount: 120,
    specialties: ["Residential", "Luxury", "House"],
    properties: mockProperties.slice(45, 50),
    image: "https://www.example.com/agent1.jpg",
    phone: "08012345678",
    isVerified: true,
  },
  {
    id: "19",
    name: "Jane Smith",
    location: "Abuja",
    rating: 4.7,
    reviewCount: 90,
    specialties: ["Commercial", "Rentals", "Apartments"],
    properties: [mockProperties[45]],
    image: "https://www.example.com/agent2.jpg",
    phone: "07098765432",
  },
  {
    id: "18",
    name: "Michael Johnson",
    location: "Port Harcourt",
    rating: 4.2,
    reviewCount: 75,
    specialties: ["Land", "Sale", "Investment Properties"],
    properties: mockProperties.slice(42, 44),
    image: "https://www.example.com/agent3.jpg",
    phone: "08123456789",
  },
  {
    id: "17",
    name: "Sarah Williams",
    location: "Ibadan",
    rating: 4.8,
    reviewCount: 150,
    specialties: ["Luxury", "Residential"],
    properties: mockProperties.slice(40, 42),
    image: "https://www.example.com/agent4.jpg",
    phone: "09012345678",
  },
  {
    id: "16",
    name: "David White",
    location: "Lagos",
    rating: 3.9,
    reviewCount: 60,
    specialties: ["Commercial", "Retail"],
    properties: mockProperties.slice(30, 35),
    image: "https://www.example.com/agent5.jpg",
    phone: "08023456789",
  },
  {
    id: "1",
    name: "John Doe",
    location: "Lagos",
    rating: 4.8,
    reviewCount: 120,
    specialties: ["Residential", "Luxury", "Rentals"],
    properties: mockProperties.slice(0, 5),
    image: "https://www.example.com/agent1.jpg",
    phone: "08012345678",
  },
  {
    id: "2",
    name: "Jane Smith",
    location: "Abuja",
    rating: 4.5,
    reviewCount: 75,
    specialties: ["Commercial", "Luxury", "Sales"],
    properties: mockProperties.slice(5, 10),
    image: "https://www.example.com/agent2.jpg",
    phone: "08123456789",
  },
  {
    id: "3",
    name: "Samuel Nwachukwu",
    location: "Port Harcourt",
    rating: 4.7,
    reviewCount: 200,
    specialties: ["Sales", "Residential", "Luxury"],
    properties: mockProperties.slice(10, 15),
    image: "https://www.example.com/agent3.jpg",
    phone: "07012345678",
  },
  {
    id: "4",
    name: "Chinonso Okafor",
    location: "Ibadan",
    rating: 4.3,
    reviewCount: 95,
    specialties: ["Rentals", "Residential", "First-Time Buyers"],
    properties: mockProperties.slice(15, 20),
    image: "https://www.example.com/agent4.jpg",
    phone: "09012345678",
  },
  {
    id: "5",
    name: "Ngozi Eze",
    location: "Lagos",
    rating: 4.6,
    reviewCount: 180,
    specialties: ["Luxury", "Commercial", "Investment Properties"],
    properties: mockProperties.slice(20, 25),
    image: "https://www.example.com/agent5.jpg",
    phone: "08023456789",
  },
  {
    id: "6",
    name: "Umar Bello",
    location: "Abuja",
    rating: 4.9,
    reviewCount: 220,
    specialties: ["Commercial", "Luxury", "Sales"],
    properties: mockProperties.slice(25, 30),
    image: "https://www.example.com/agent6.jpg",
    phone: "08098765432",
  },
  {
    id: "7",
    name: "Abiola Adebayo",
    location: "Port Harcourt",
    rating: 4.4,
    reviewCount: 130,
    specialties: ["Residential", "Rentals", "Property Management"],
    properties: mockProperties.slice(30, 35),
    image: "https://www.example.com/agent7.jpg",
    phone: "08123456789",
  },
  {
    id: "8",
    name: "Olumide Ilesanmi",
    location: "Ibadan",
    rating: 4.2,
    reviewCount: 60,
    specialties: ["Commercial", "Rentals", "Land"],
    properties: mockProperties.slice(35, 40),
    image: "https://www.example.com/agent8.jpg",
    phone: "07023456789",
  },
  {
    id: "9",
    name: "Chinedu Obasi",
    location: "Lagos",
    rating: 5.0,
    reviewCount: 50,
    specialties: ["Luxury", "Sales", "Land"],
    properties: mockProperties.slice(40, 45),
    image: "https://www.example.com/agent9.jpg",
    phone: "08034567890",
  },
  {
    id: "10",
    name: "Emeka Chukwu",
    location: "Abuja",
    rating: 4.6,
    reviewCount: 180,
    specialties: ["Residential", "Commercial", "Rentals"],
    properties: mockProperties.slice(0, 5),
    image: "https://www.example.com/agent10.jpg",
    phone: "08134567890",
  },
  {
    id: "11",
    name: "Kehinde Durojaiye",
    location: "Port Harcourt",
    rating: 4.3,
    reviewCount: 100,
    specialties: ["Luxury", "Rentals", "Sales"],
    properties: mockProperties.slice(5, 10),
    image: "https://www.example.com/agent11.jpg",
    phone: "09034567890",
  },
  {
    id: "12",
    name: "Oluwaseun Akinyemi",
    location: "Ibadan",
    rating: 4.8,
    reviewCount: 150,
    specialties: ["Residential", "Luxury", "Land"],
    properties: mockProperties.slice(10, 15),
    image: "https://www.example.com/agent12.jpg",
    phone: "08045678901",
  },
  {
    id: "13",
    name: "Tunde Alabi",
    location: "Lagos",
    rating: 4.4,
    reviewCount: 130,
    specialties: ["Commercial", "Luxury", "Property Development"],
    properties: mockProperties.slice(15, 20),
    image: "https://www.example.com/agent13.jpg",
    phone: "07056789012",
  },
  {
    id: "14",
    name: "Ruth Olayemi",
    location: "Abuja",
    rating: 4.7,
    reviewCount: 210,
    specialties: ["Residential", "Land", "Rentals"],
    properties: mockProperties.slice(20, 25),
    image: "https://www.example.com/agent14.jpg",
    phone: "08156789012",
  },
  {
    id: "15",
    name: "Michael Johnson",
    location: "Port Harcourt",
    rating: 4.5,
    reviewCount: 110,
    specialties: ["Commercial", "Sales", "Luxury"],
    properties: mockProperties.slice(25, 30),
    image: "https://www.example.com/agent15.jpg",
    phone: "09067890123",
  },
  // More agent objects...
];
export default mockAgents;
