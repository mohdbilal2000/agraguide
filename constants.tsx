
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
  // HERITAGE HIGHLIGHTS (One Day)
  {
    id: 'hh-1',
    title: 'Ellis-Hart Monument Discovery',
    description: 'Discover breathtaking landmarks on an immersive one-day adventure. Perfect for travelers looking to explore cultural gems in a short time.',
    duration: '11:33:16',
    price: 702.75,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage Highlights',
    rating: 3.7,
    reviewsCount: 11,
    pickup: 'N/A',
    highlights: ['Iconic Landmarks', 'Expert Narration']
  },
  {
    id: 'hh-2',
    title: 'Patel-Wheeler Cultural Gem',
    description: 'Explore the hidden gems of the city with our expert historical guides in a single immersive session.',
    duration: '08:52:39',
    price: 927.61,
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage Highlights',
    rating: 3.7,
    reviewsCount: 7,
    pickup: 'N/A',
    highlights: ['History Deep-dive', 'Photography stops']
  },
  {
    id: 'hh-3',
    title: 'Watkins Group Iconic Adventure',
    description: 'The most comprehensive group experience for one-day travelers focused on iconic Mughal architecture.',
    duration: '01:18:45',
    price: 379.55,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage Highlights',
    rating: 4.3,
    reviewsCount: 3,
    pickup: 'Available',
    highlights: ['Mughal Legacy', 'Priority Access']
  },

  // DELHI TOURS
  {
    id: 'd-1',
    title: 'Same Day Delhi Tour',
    description: 'Explore the best of Delhi in a single day with our comprehensive same-day tour covering major historical and cultural landmarks.',
    duration: 'Same Day',
    price: 89,
    image: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=800&q=80',
    category: 'Delhi',
    rating: 4.8,
    reviewsCount: 156,
    isMostBooked: true,
    highlights: ['Red Fort & Jama Masjid', 'Qutub Minar Complex', 'India Gate & Parliament']
  },
  {
    id: 'd-2',
    title: 'Same Day Delhi Luxury Tour',
    description: 'Experience Delhi in ultimate luxury with VIP access, premium dining, and exclusive experiences in a single day.',
    duration: 'Same Day',
    price: 199,
    image: 'https://images.unsplash.com/photo-1619543633800-8397a2411dec?auto=format&fit=crop&w=800&q=80',
    category: 'Delhi',
    rating: 5,
    reviewsCount: 67,
    highlights: ['VIP access to monuments', 'Private guide & luxury vehicle', 'Fine dining at heritage restaurant']
  },
  {
    id: 'd-3',
    title: 'Delhi Heritage Walk - 1 Night',
    description: 'Immerse yourself in Delhis rich heritage with a one-night stay, exploring both Old and New Delhis historical treasures.',
    duration: '1 Night / 2 Days',
    price: 149,
    image: 'https://images.unsplash.com/photo-1598333331911-3e8455b1f22d?auto=format&fit=crop&w=800&q=80',
    category: 'Delhi',
    rating: 4.7,
    reviewsCount: 98,
    highlights: ['Old Delhi heritage walk', 'Red Fort & Jama Masjid', 'Qutub Minar']
  },
  {
    id: 'd-4',
    title: 'Delhi Cultural Experience - 2 Nights',
    description: 'A comprehensive 2-night Delhi tour allowing you to explore the city at a relaxed pace with deeper cultural immersion.',
    duration: '2 Nights / 3 Days',
    price: 249,
    image: 'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?auto=format&fit=crop&w=800&q=80',
    category: 'Delhi',
    rating: 4.9,
    reviewsCount: 142,
    highlights: ['Complete Old & New Delhi tour', 'Heritage walk in Old Delhi', 'Qutub Minar & Humayun\'s Tomb']
  },

  // AGRA TOURS
  {
    id: 'a-1',
    title: 'Same Day Agra Tour by Train',
    description: 'Authentic Indian railway experience with same-day Agra tour. Travel like locals while visiting the magnificent Taj Mahal.',
    duration: '1 Day',
    price: 129,
    image: 'https://images.unsplash.com/photo-1477584264176-51fa4e89f40c?auto=format&fit=crop&w=800&q=80',
    category: 'Agra',
    rating: 4.5,
    reviewsCount: 64,
    highlights: ['Gatimaan Express train journey', 'Taj Mahal visit with expert guide', 'Agra Fort comprehensive tour']
  },
  {
    id: 'a-2',
    title: 'Same Day Agra Sunrise Tour',
    description: 'Witness the magical Taj Mahal at sunrise. Midnight pickup from Delhi ensures timely arrival for the golden hour.',
    duration: 'Same Day',
    price: 169,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80',
    category: 'Agra',
    rating: 4.9,
    reviewsCount: 287,
    isMostBooked: true,
    highlights: ['Midnight pickup from Delhi', 'Taj Mahal at sunrise', 'Agra Fort exploration']
  },
  {
    id: 'a-3',
    title: 'Same Day Agra Complete Heritage',
    description: 'Explore Agra\'s complete heritage in one day with visits to Taj Mahal, Agra Fort, Baby Taj, Mehtab Bagh, and Akbar\'s Tomb.',
    duration: 'Same Day',
    price: 189,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc183f27?auto=format&fit=crop&w=800&q=80',
    category: 'Agra',
    rating: 4.9,
    reviewsCount: 156,
    highlights: ['Midnight pickup from Delhi', 'Taj Mahal at sunrise', 'Agra Fort exploration', 'Baby Taj & Mehtab Bagh']
  },
  {
    id: 'a-4',
    title: 'Agra with Mathura & Vrindavan',
    description: 'Combine the architectural marvels of Agra with the spiritual heritage of Mathura and Vrindavan, the birthplace of Lord Krishna.',
    duration: '1 Night / 2 Days',
    price: 299,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
    category: 'Agra',
    rating: 4.8,
    reviewsCount: 145,
    highlights: ['Taj Mahal at sunrise', 'Mathura - Birthplace of Krishna', 'Vrindavan evening Aarti']
  },

  // JAIPUR TOURS
  {
    id: 'j-1',
    title: 'Jaipur Royal Heritage - 1 Night',
    description: 'Immerse yourself in Jaipurs royal heritage with a one-night stay, exploring the Pink Citys magnificent palaces.',
    duration: '1 Night / 2 Days',
    price: 249,
    image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=80',
    category: 'Jaipur',
    rating: 4.7,
    reviewsCount: 143,
    highlights: ['Amber Fort & City Palace', 'Hawa Mahal & Jantar Mantar', 'Nahargarh Fort sunset']
  },
  {
    id: 'j-2',
    title: 'Jaipur Cultural Experience - 2 Nights',
    description: 'A comprehensive 2-night Jaipur tour allowing you to explore all major attractions at a relaxed pace.',
    duration: '2 Nights / 3 Days',
    price: 399,
    image: 'https://images.unsplash.com/photo-1524230507669-e29a01769f80?auto=format&fit=crop&w=800&q=80',
    category: 'Jaipur',
    rating: 4.9,
    reviewsCount: 178,
    isMostBooked: true,
    highlights: ['Complete palace & fort tour', 'Amber Fort with elephant ride', 'City Palace & Hawa Mahal']
  },
  {
    id: 'j-3',
    title: 'Jaipur Luxury Heritage - 1 Night',
    description: 'Indulge in Jaipur\'s royal heritage with 5-star luxury accommodations, exclusive experiences, and personalized service.',
    duration: '1 Night / 2 Days',
    price: 499,
    image: 'https://images.unsplash.com/photo-1590050752117-23a97b62b423?auto=format&fit=crop&w=800&q=80',
    category: 'Jaipur',
    rating: 4.9,
    reviewsCount: 125,
    highlights: ['5-star palace hotel stay', 'Private palace experiences', 'VIP monument access']
  },

  // MULTI-DAY / SPECIAL
  {
    id: 'gt-1',
    title: 'Golden Triangle + Udaipur Luxury',
    description: 'Experience the Golden Triangle with Udaipur extension in ultimate luxury with VIP access and premium dining.',
    duration: '6 Days / 5 Nights',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
    category: 'Multi-Day',
    rating: 5,
    reviewsCount: 112,
    highlights: ['Complete Golden Triangle', 'VIP access to City Palace Udaipur', 'Private guide & luxury vehicle']
  },
  {
    id: 'gt-2',
    title: 'Premium Luxury Guide Services',
    description: 'The ultimate in luxury travel with exclusive Mercedes/BMW transport and expert multilingual guides.',
    duration: 'Flexible (3-21 Days)',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=800&q=80',
    category: 'Luxury',
    rating: 5,
    reviewsCount: 35,
    highlights: ['Luxury vehicles: BMW/Audi', 'Multilingual expert guides', 'Fast-track monument entry']
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
    question: "What is the best time to visit the Golden Triangle?",
    answer: "The ideal time to visit is from October to March when the weather is pleasant. Summer months (April to June) can be extremely hot."
  },
  {
    question: "How many days do I need for a Golden Triangle tour?",
    answer: "A minimum of 4 days is recommended to cover the basics of Delhi, Agra, and Jaipur. However, 5-7 days allow for a more relaxed pace."
  },
  {
    question: "Are meals included in your tour packages?",
    answer: "Most of our packages include daily breakfast at the hotels. Specific meal inclusions are listed in each tour package detail."
  },
  {
    question: "What's the booking and payment process?",
    answer: "After finalizing your itinerary, we require a 25% deposit to confirm. The balance is due 30 days before the tour starts."
  }
];
