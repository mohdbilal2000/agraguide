
import { Tour, Destination, Review, BlogPost, GuidePackage } from './types';

export const GUIDE_PACKAGES: GuidePackage[] = [
  {
    id: 'guide-only',
    name: 'Guide Only',
    price: '$25',
    color: 'gray',
    features: ['Approved Govt. Guide', 'Monument History', 'Shopping Assistance', 'Local Hidden Gems'],
    icon: 'Users'
  },
  {
    id: 'guide-taxi',
    name: 'Guide + Taxi',
    price: '$65',
    color: 'blue',
    features: ['Private AC Vehicle', 'Professional Guide', 'Fuel & Parking Included', 'Hotel Pickup/Drop'],
    icon: 'Car'
  },
  {
    id: 'guide-taxi-meals',
    name: 'Guide + Taxi + Meals',
    price: '$85',
    color: 'amber',
    features: ['Everything in G+T', 'Authentic Indian Lunch', 'Bottled Mineral Water', 'Evening Tea/Coffee'],
    icon: 'Utensils'
  },
  {
    id: 'all-inclusive',
    name: 'All-Inclusive',
    price: '$120',
    color: 'maroon',
    features: ['Everything in G+T+M', 'Monument Entry Fees', 'Traditional Welcome', 'Personal Souvenir'],
    icon: 'Crown'
  }
];

export const TOURS: Tour[] = [
  {
    id: 'sunrise-taj',
    title: 'Sunrise Taj Mahal & Agra Fort Private Tour',
    description: 'Experience the crown of Mughal architecture in the ethereal morning light. Our heritage experts guide you through the hidden details of the Taj Mahal and the mighty Agra Fort, followed by an authentic breakfast.',
    duration: '8 Hours',
    price: 45,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80',
    category: 'Full Day',
    rating: 4.9,
    reviewsCount: 1240,
    highlights: ['Skip-the-line sunrise access', 'Professional photography assistance', 'Gourmet breakfast at luxury hotel', 'Private AC luxury transport'],
    itinerary: [
      { time: '05:15 AM', activity: 'Hotel Pickup by Private AC Sedan' },
      { time: '05:45 AM', activity: 'Sunrise View of Taj Mahal' },
      { time: '08:30 AM', activity: 'Breakfast at 5-Star Heritage Hotel' },
      { time: '10:00 AM', activity: 'Agra Fort Historical Exploration' },
      { time: '12:00 PM', activity: 'Visit to Mehtab Bagh for Rear View' },
      { time: '01:30 PM', activity: 'Drop-off at Hotel or Station' }
    ],
    isMostBooked: true
  },
  {
    id: 'delhi-agra-express',
    title: 'Same Day Agra Tour from Delhi by Gatimaan Express',
    description: 'The fastest and most comfortable way to see Agra from Delhi. Travel in India\'s premier train and enjoy a fully guided experience including monuments and luxury dining.',
    duration: '12 Hours',
    price: 85,
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=1200&q=80',
    category: 'Same Day Delhi',
    rating: 4.8,
    reviewsCount: 850,
    highlights: ['First-class round-trip train tickets', 'Lunch at 5-star hotel included', 'Skip-the-line entry to all sites', 'All-day private vehicle in Agra'],
    itinerary: [
      { time: '07:00 AM', activity: 'Delhi Hotel Pickup' },
      { time: '08:10 AM', activity: 'Departure by Gatimaan Express' },
      { time: '09:50 AM', activity: 'Arrival in Agra & Meet Guide' },
      { time: '10:30 AM', activity: 'Taj Mahal In-depth Tour' },
      { time: '01:00 PM', activity: 'Luxury Buffet Lunch' },
      { time: '05:45 PM', activity: 'Return Train to Delhi' }
    ]
  },
  {
    id: 'golden-triangle-4d',
    title: 'Golden Triangle Classic: Delhi, Agra & Jaipur',
    description: 'The ultimate journey through India\'s cultural heart. Discover the political power of Delhi, the romance of Agra, and the royal splendor of the Pink City.',
    duration: '4 Days',
    price: 320,
    image: 'https://images.unsplash.com/photo-1477584264176-51fa4e89f40c?auto=format&fit=crop&w=1200&q=80',
    category: 'Multi-Day',
    rating: 4.9,
    reviewsCount: 560,
    highlights: ['Stay in authentic heritage palaces', 'Private historian guides in each city', 'Elephant ride/Jeep to Amer Fort', 'All state taxes and fuel included'],
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'agra',
    name: 'Agra',
    description: 'City of the Taj Mahal and three UNESCO World Heritage sites.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=800&q=80',
    toursCount: 12
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    description: 'The Pink City, known for royal architecture and vibrant bazaars.',
    image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=80',
    toursCount: 8
  },
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'A vibrant metropolis blending modern India with ancient history.',
    image: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=800&q=80',
    toursCount: 10
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'taj-mahal-timing-guide',
    title: 'Insider Guide: The Best Time to Visit Taj Mahal in 2024',
    excerpt: 'Avoid the crowds and find the perfect light. Learn our secret tips for the ultimate Taj experience.',
    content: 'The Taj Mahal is best visited during the cooler months between October and March. Sunrise is the absolute prime time for photography, as the white marble reflects the soft morning glow...',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1598333331911-3e8455b1f22d?auto=format&fit=crop&w=800&q=80',
    date: 'June 15, 2024',
    author: 'Raj Kumar'
  },
  {
    id: 'b2',
    slug: 'agra-food-guide',
    title: 'Top 5 Local Food Delicacies in Agra',
    excerpt: 'Beyond the monuments, Agra offers a culinary journey you cannot miss. Try Petha, Bedai, and Mughlai Parathas.',
    content: 'Agra is a paradise for street food lovers. The legendary Agra Petha, made from ash gourd, comes in dozens of varieties like Pan Petha and Saffron Petha...',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1601050638917-3d9197176192?auto=format&fit=crop&w=800&q=80',
    date: 'June 10, 2024',
    author: 'Anita Singh'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    location: 'United Kingdom',
    rating: 5,
    text: 'An absolute dream! Our guide Raj knew exactly when to get us to the Taj for the best photos without the crowds. Highly recommended for anyone wanting a stress-free Agra experience.',
    date: '2024-05-12'
  },
  {
    id: 'r2',
    author: 'Marco Rossi',
    location: 'Italy',
    rating: 5,
    text: 'The logistics were perfect. Coming from Delhi by train was easy and efficient. The heritage walk in Agra Fort was the highlight of our trip.',
    date: '2024-05-10'
  }
];

export const FAQS = [
  {
    question: "Is the Taj Mahal closed on any days?",
    answer: "Yes, the Taj Mahal is closed every Friday for prayers. It is open on all other days, including weekends and public holidays."
  },
  {
    question: "What is the best time for photography?",
    answer: "Sunrise and sunset offer the most dramatic lighting. We recommend the sunrise tour to beat both the midday heat and the large crowds."
  },
  {
    question: "Do you provide female heritage guides?",
    answer: "Yes, we have a collective of professional female heritage guides available upon request to ensure comfort and safety for solo female travelers."
  }
];
