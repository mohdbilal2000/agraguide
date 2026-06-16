
import { Tour, Destination, Review, BlogPost, GuidePackage } from './types';

// Shown wherever a price appears. Prices are indicative starting points only —
// monument entry fees and optional add-ons are extra, and the final quote
// varies by group size and season. Keeps us from being held to a fixed number.
export const PRICE_DISCLAIMER =
  'Indicative starting price per person. Monument entry fees and optional add-ons are extra; the final price varies by group size and season. You’ll get an exact quote before you pay.';

export const PRICE_DISCLAIMER_SHORT = 'From price, per person · entry fees & add-ons extra';

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
  // ─── SAME DAY TOURS ───
  {
    id: 'sunrise-taj-tour',
    title: 'Sunrise Taj Mahal Private Tour',
    description: 'Witness the breathtaking sunrise at the Taj Mahal. Depart from Delhi early morning and experience the iconic monument bathed in golden light, followed by a guided tour of Agra Fort.',
    duration: '12 Hours',
    price: 40,
    originalPrice: 58,
    discount: '31% OFF',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80',
    category: 'Same Day Tours',
    rating: 4.9,
    reviewsCount: 1420,
    highlights: ['Sunrise at Taj Mahal', 'Agra Fort guided visit', 'Private AC car from Delhi', 'Expert heritage guide'],
    itinerary: [
      { time: '03:00 AM', activity: 'Early morning pickup from Delhi hotel' },
      { time: '05:30 AM', activity: 'Arrive at Taj Mahal East Gate' },
      { time: '05:45 AM', activity: 'Sunrise viewing at Taj Mahal with guided tour' },
      { time: '08:30 AM', activity: 'Breakfast at local heritage restaurant' },
      { time: '09:30 AM', activity: 'Agra Fort historical exploration' },
      { time: '11:30 AM', activity: 'Visit Mehtab Bagh for panoramic Taj view' },
      { time: '12:30 PM', activity: 'Lunch at authentic Mughlai restaurant' },
      { time: '01:30 PM', activity: 'Departure for Delhi' },
      { time: '04:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ],
    isMostBooked: true
  },
  {
    id: 'same-day-taj-car',
    title: 'Same Day Taj Mahal Tour by Car',
    description: 'A comfortable day trip to the Taj Mahal from Delhi by private AC car with an expert guide. Visit the Taj Mahal, Agra Fort, and enjoy local cuisine.',
    duration: '12 Hours',
    price: 40,
    originalPrice: 58,
    discount: '31% OFF',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=1200&q=80',
    category: 'Same Day Tours',
    rating: 4.8,
    reviewsCount: 980,
    highlights: ['Private AC car from Delhi', 'Taj Mahal & Agra Fort', 'Lunch at local restaurant', 'Flexible pickup time'],
    itinerary: [
      { time: '06:00 AM', activity: 'Pickup from Delhi hotel by private AC sedan' },
      { time: '09:30 AM', activity: 'Arrive in Agra, meet your heritage guide' },
      { time: '10:00 AM', activity: 'Guided tour of the Taj Mahal' },
      { time: '12:30 PM', activity: 'Authentic Mughlai lunch at local restaurant' },
      { time: '01:30 PM', activity: 'Agra Fort guided exploration' },
      { time: '03:00 PM', activity: 'Optional visit to Itimad-ud-Daulah (Baby Taj)' },
      { time: '04:00 PM', activity: 'Depart for Delhi' },
      { time: '07:30 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ]
  },
  {
    id: 'same-day-taj-train',
    title: 'Same Day Taj Mahal Tour by Express Train',
    description: 'Travel to Agra by Gatimaan Express from Delhi for a hassle-free day trip to the Taj Mahal. The fastest and most scenic route to experience Agra\'s heritage.',
    duration: '13 Hours',
    price: 55,
    originalPrice: 79,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=1200&q=80',
    category: 'Same Day Tours',
    rating: 4.8,
    reviewsCount: 870,
    highlights: ['Gatimaan Express train tickets', 'Taj Mahal guided tour', 'Agra Fort visit', 'Private AC vehicle in Agra'],
    itinerary: [
      { time: '07:00 AM', activity: 'Pickup from Delhi hotel to Hazrat Nizamuddin Station' },
      { time: '08:10 AM', activity: 'Board Gatimaan Express (India\'s fastest train)' },
      { time: '09:50 AM', activity: 'Arrive Agra Cantt, meet your guide' },
      { time: '10:15 AM', activity: 'Taj Mahal in-depth guided tour' },
      { time: '01:00 PM', activity: 'Lunch at heritage restaurant' },
      { time: '02:00 PM', activity: 'Agra Fort guided exploration' },
      { time: '04:00 PM', activity: 'Visit local marble craft workshop' },
      { time: '05:00 PM', activity: 'Transfer to Agra Cantt station' },
      { time: '05:45 PM', activity: 'Return by Gatimaan Express to Delhi' },
      { time: '07:30 PM', activity: 'Arrive Delhi, drop-off at hotel' }
    ]
  },
  {
    id: 'same-day-jaipur',
    title: 'Same Day Jaipur Tour from Delhi',
    description: 'Explore the Pink City of Jaipur in a single day, visiting its majestic forts, vibrant bazaars, and stunning palaces — all with a private guide and AC transport.',
    duration: '14 Hours',
    price: 50,
    originalPrice: 72,
    discount: '31% OFF',
    image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=1200&q=80',
    category: 'Same Day Tours',
    rating: 4.7,
    reviewsCount: 640,
    highlights: ['Amber Fort Jeep ride', 'Hawa Mahal photo stop', 'City Palace museum', 'Local bazaar shopping time'],
    itinerary: [
      { time: '05:00 AM', activity: 'Early morning pickup from Delhi hotel' },
      { time: '09:30 AM', activity: 'Arrive Jaipur, meet your local guide' },
      { time: '10:00 AM', activity: 'Amber Fort with Jeep ride up the hill' },
      { time: '12:00 PM', activity: 'Photo stop at Jal Mahal (Water Palace)' },
      { time: '12:30 PM', activity: 'Lunch at traditional Rajasthani restaurant' },
      { time: '01:30 PM', activity: 'City Palace museum tour' },
      { time: '03:00 PM', activity: 'Hawa Mahal & Jantar Mantar visit' },
      { time: '04:30 PM', activity: 'Free time at Johari Bazaar for shopping' },
      { time: '05:30 PM', activity: 'Depart for Delhi' },
      { time: '10:00 PM', activity: 'Drop-off at Delhi hotel' }
    ]
  },

  // ─── TWO DAY TOURS ───
  {
    id: 'overnight-taj-tour',
    title: 'Delhi Overnight Taj Mahal Tour',
    description: 'An overnight tour from Delhi to Agra, giving you ample time to explore the Taj Mahal at both sunrise and sunset, plus surrounding heritage attractions.',
    duration: '2 Days / 1 Night',
    price: 84,
    originalPrice: 120,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1598333331911-3e8455b1f22d?auto=format&fit=crop&w=1200&q=80',
    category: 'Two Day Tours',
    rating: 4.9,
    reviewsCount: 520,
    highlights: ['Overnight stay in heritage hotel', 'Taj Mahal at sunrise & sunset', 'Mehtab Bagh evening views', 'All meals included'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi hotel, drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Taj Mahal guided morning tour' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at heritage restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort historical exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Sunset at Mehtab Bagh with Taj view' },
      { time: 'Day 1 — 07:00 PM', activity: 'Dinner & overnight stay at heritage hotel' },
      { time: 'Day 2 — 05:30 AM', activity: 'Sunrise at Taj Mahal (second visit)' },
      { time: 'Day 2 — 08:30 AM', activity: 'Breakfast at hotel, check out' },
      { time: 'Day 2 — 09:30 AM', activity: 'Visit Itimad-ud-Daulah (Baby Taj)' },
      { time: 'Day 2 — 11:00 AM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ]
  },
  {
    id: 'agra-wildlife-sos',
    title: 'Agra Heritage & Wildlife SOS Tour',
    description: 'Combine the Taj Mahal visit with a heartwarming trip to the Wildlife SOS Elephant Conservation Center. A unique blend of heritage and wildlife.',
    duration: '2 Days / 1 Night',
    price: 130,
    originalPrice: 198,
    discount: '34% OFF',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    category: 'Two Day Tours',
    rating: 4.8,
    reviewsCount: 340,
    highlights: ['Taj Mahal guided tour', 'Wildlife SOS elephant center', 'Elephant conservation experience', 'Heritage hotel stay'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi, drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Taj Mahal in-depth guided tour' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at local restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Check-in at heritage hotel, evening free' },
      { time: 'Day 2 — 08:00 AM', activity: 'Breakfast and check out' },
      { time: 'Day 2 — 09:00 AM', activity: 'Visit Wildlife SOS Elephant Conservation Center' },
      { time: 'Day 2 — 11:30 AM', activity: 'Interactive session with caretakers' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, then depart for Delhi' },
      { time: 'Day 2 — 05:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ]
  },
  {
    id: 'agra-fatehpur-sikri',
    title: 'Agra & Fatehpur Sikri Heritage Tour',
    description: 'Explore the Taj Mahal and the abandoned Mughal city of Fatehpur Sikri over two leisurely days. Walk through centuries of Mughal grandeur.',
    duration: '2 Days / 1 Night',
    price: 75,
    originalPrice: 120,
    discount: '38% OFF',
    image: 'https://images.unsplash.com/photo-1585135497273-1a86d9d43495?auto=format&fit=crop&w=1200&q=80',
    category: 'Two Day Tours',
    rating: 4.7,
    reviewsCount: 420,
    highlights: ['Taj Mahal guided tour', 'Fatehpur Sikri ghost city', 'Buland Darwaza (tallest gateway)', 'Heritage hotel accommodation'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi, scenic drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Guided tour of the Taj Mahal' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at Mughlai restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort guided exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Evening walk through Agra markets' },
      { time: 'Day 1 — 07:00 PM', activity: 'Dinner & overnight at heritage hotel' },
      { time: 'Day 2 — 08:00 AM', activity: 'Breakfast and check out' },
      { time: 'Day 2 — 09:00 AM', activity: 'Drive to Fatehpur Sikri (45 min)' },
      { time: 'Day 2 — 09:45 AM', activity: 'Guided tour of Fatehpur Sikri complex' },
      { time: 'Day 2 — 11:30 AM', activity: 'Visit Buland Darwaza & Salim Chishti Tomb' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, then depart for Delhi' },
      { time: 'Day 2 — 05:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ]
  },

  // ─── GOLDEN TRIANGLE ───
  {
    id: 'golden-triangle-3d',
    title: '3 Day Golden Triangle Express',
    description: 'The classic Delhi-Agra-Jaipur circuit in 3 action-packed days covering India\'s most iconic landmarks. Perfect for travelers short on time.',
    duration: '3 Days / 2 Nights',
    price: 200,
    originalPrice: 300,
    discount: '33% OFF',
    image: 'https://images.unsplash.com/photo-1477584264176-51fa4e89f40c?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 780,
    highlights: ['Delhi heritage sightseeing', 'Taj Mahal guided tour', 'Jaipur forts & palaces', 'Heritage hotel stays'],
    itinerary: [
      { time: 'Day 1 — 08:00 AM', activity: 'Delhi sightseeing: Red Fort, Jama Masjid, Chandni Chowk' },
      { time: 'Day 1 — 12:00 PM', activity: 'Lunch at Old Delhi restaurant' },
      { time: 'Day 1 — 01:30 PM', activity: 'India Gate, Rashtrapati Bhavan drive-past' },
      { time: 'Day 1 — 03:00 PM', activity: 'Humayun\'s Tomb & Qutub Minar' },
      { time: 'Day 1 — 06:00 PM', activity: 'Drive to Agra (3.5 hrs), overnight at hotel' },
      { time: 'Day 2 — 06:00 AM', activity: 'Sunrise at the Taj Mahal' },
      { time: 'Day 2 — 09:00 AM', activity: 'Breakfast, then Agra Fort tour' },
      { time: 'Day 2 — 12:00 PM', activity: 'Lunch, drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 2 — 02:00 PM', activity: 'Quick stop at Fatehpur Sikri' },
      { time: 'Day 2 — 07:00 PM', activity: 'Arrive Jaipur, overnight at heritage hotel' },
      { time: 'Day 3 — 09:00 AM', activity: 'Amber Fort with Jeep ride' },
      { time: 'Day 3 — 11:30 AM', activity: 'City Palace & Jantar Mantar' },
      { time: 'Day 3 — 01:00 PM', activity: 'Lunch, Hawa Mahal photo stop' },
      { time: 'Day 3 — 03:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ]
  },
  {
    id: 'golden-triangle-4d',
    title: '4 Day Golden Triangle Tour',
    description: 'A relaxed pace through the Golden Triangle with more time at each destination. Explore Delhi, Agra, and Jaipur without rushing.',
    duration: '4 Days / 3 Nights',
    price: 150,
    originalPrice: 215,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 620,
    highlights: ['Old & New Delhi sightseeing', 'Taj Mahal & Agra Fort', 'Amber Fort & City Palace', 'All meals & heritage stays'],
    itinerary: [
      { time: 'Day 1 — 09:00 AM', activity: 'Delhi tour: Red Fort, Jama Masjid, Raj Ghat' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch, then New Delhi: India Gate, Parliament' },
      { time: 'Day 1 — 04:00 PM', activity: 'Humayun\'s Tomb, evening at Dilli Haat' },
      { time: 'Day 2 — 06:00 AM', activity: 'Drive to Agra (3.5 hrs)' },
      { time: 'Day 2 — 10:00 AM', activity: 'Taj Mahal guided tour' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, Agra Fort exploration' },
      { time: 'Day 2 — 05:00 PM', activity: 'Sunset at Mehtab Bagh' },
      { time: 'Day 3 — 08:00 AM', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 3 — 12:00 PM', activity: 'Arrive Jaipur, lunch at local restaurant' },
      { time: 'Day 3 — 02:00 PM', activity: 'Amber Fort & Jal Mahal' },
      { time: 'Day 3 — 05:00 PM', activity: 'Hawa Mahal & local bazaar shopping' },
      { time: 'Day 4 — 09:00 AM', activity: 'City Palace & Jantar Mantar' },
      { time: 'Day 4 — 12:00 PM', activity: 'Lunch, then Nahargarh Fort for panoramic views' },
      { time: 'Day 4 — 03:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ]
  },
  {
    id: 'golden-triangle-5d',
    title: '5 Day Golden Triangle Tour',
    description: 'The most comprehensive Golden Triangle experience with hidden gems, local experiences, and time to truly absorb each city\'s unique character.',
    duration: '5 Days / 4 Nights',
    price: 250,
    originalPrice: 358,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 490,
    highlights: ['Comprehensive Delhi tour', 'Fatehpur Sikri UNESCO site', 'Jaipur shopping experience', 'All meals & luxury stays'],
    itinerary: [
      { time: 'Day 1 — 09:00 AM', activity: 'Old Delhi: Red Fort, Jama Masjid, rickshaw ride' },
      { time: 'Day 1 — 02:00 PM', activity: 'New Delhi: India Gate, Qutub Minar' },
      { time: 'Day 2 — 08:00 AM', activity: 'Humayun\'s Tomb, Lotus Temple, Akshardham' },
      { time: 'Day 2 — 02:00 PM', activity: 'Drive to Agra, evening at leisure' },
      { time: 'Day 3 — 06:00 AM', activity: 'Sunrise at Taj Mahal' },
      { time: 'Day 3 — 10:00 AM', activity: 'Agra Fort, Itimad-ud-Daulah' },
      { time: 'Day 3 — 02:00 PM', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 4 — 09:00 AM', activity: 'Amber Fort, City Palace, Jantar Mantar' },
      { time: 'Day 4 — 02:00 PM', activity: 'Hawa Mahal, Johari Bazaar shopping' },
      { time: 'Day 4 — 05:00 PM', activity: 'Sunset at Nahargarh Fort' },
      { time: 'Day 5 — 09:00 AM', activity: 'Jaipur textile & gem workshop visits' },
      { time: 'Day 5 — 12:00 PM', activity: 'Depart for Delhi, drop-off at airport/hotel' }
    ]
  },
  {
    id: 'golden-triangle-tiger',
    title: '5 Day Golden Triangle with Tiger Safari',
    description: 'Combine the Golden Triangle with a thrilling tiger safari at Ranthambore National Park. Heritage, history, and wildlife all in one epic journey.',
    duration: '5 Days / 4 Nights',
    price: 250,
    originalPrice: 358,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.8,
    reviewsCount: 380,
    highlights: ['Ranthambore tiger safari', 'Taj Mahal guided tour', 'Jaipur forts & palaces', 'Wildlife & heritage combined'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Delhi to Agra, Taj Mahal & Agra Fort' },
      { time: 'Day 1 — 06:00 PM', activity: 'Overnight at Agra heritage hotel' },
      { time: 'Day 2 — 08:00 AM', activity: 'Drive to Ranthambore (5 hrs)' },
      { time: 'Day 2 — 03:00 PM', activity: 'Evening safari at Ranthambore National Park' },
      { time: 'Day 3 — 06:00 AM', activity: 'Morning safari — tiger tracking' },
      { time: 'Day 3 — 02:00 PM', activity: 'Ranthambore Fort visit, afternoon at leisure' },
      { time: 'Day 4 — 08:00 AM', activity: 'Drive to Jaipur (3.5 hrs)' },
      { time: 'Day 4 — 12:00 PM', activity: 'Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 5 — 09:00 AM', activity: 'Jaipur markets & Nahargarh Fort' },
      { time: 'Day 5 — 01:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ]
  },
  {
    id: 'golden-triangle-udaipur',
    title: '6 Day Golden Triangle with Udaipur',
    description: 'Extend the Golden Triangle to include the romantic city of Udaipur — the Venice of the East. Palaces, lakes, and timeless beauty await.',
    duration: '6 Days / 5 Nights',
    price: 300,
    originalPrice: 430,
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1602301100442-6bf6663db72f?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 350,
    highlights: ['Lake Pichola boat ride', 'City Palace Udaipur', 'Taj Mahal at sunrise', 'Heritage hotel stays throughout'],
    itinerary: [
      { time: 'Day 1', activity: 'Delhi sightseeing: Old Delhi, New Delhi landmarks' },
      { time: 'Day 2', activity: 'Drive to Agra, Taj Mahal & Agra Fort tours' },
      { time: 'Day 3', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 4', activity: 'Jaipur: Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 5', activity: 'Fly/drive to Udaipur, Lake Pichola, City Palace' },
      { time: 'Day 6', activity: 'Sahelion-ki-Bari, Jagdish Temple, depart for Delhi' }
    ]
  },

  // ─── ROYAL RAJASTHAN ───
  {
    id: 'rajasthan-7d',
    title: '7 Day Royal Rajasthan Tour',
    description: 'Explore the royal state of Rajasthan — majestic forts, colorful bazaars, and desert landscapes across Jaipur, Jodhpur, and Udaipur.',
    duration: '7 Days / 6 Nights',
    price: 200,
    originalPrice: 300,
    discount: '33% OFF',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 290,
    highlights: ['Jaipur, Jodhpur & Udaipur', 'Desert cultural experience', 'Palace hotel stays', 'All meals & transport included'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, transfer to heritage hotel, welcome dinner' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, City Palace' },
      { time: 'Day 3', activity: 'Jaipur: Hawa Mahal, Nahargarh Fort, bazaar shopping' },
      { time: 'Day 4', activity: 'Drive to Jodhpur, Mehrangarh Fort, blue city walk' },
      { time: 'Day 5', activity: 'Jodhpur: Umaid Bhawan Palace, spice markets' },
      { time: 'Day 6', activity: 'Drive to Udaipur, City Palace, Lake Pichola sunset' },
      { time: 'Day 7', activity: 'Udaipur: Sahelion-ki-Bari, departure transfer' }
    ]
  },
  {
    id: 'rajasthan-8d',
    title: '8 Day Royal Rajasthan Tour',
    description: 'A deeper dive into Rajasthan\'s royal heritage with Pushkar and Jaisalmer included. Desert safaris, sacred lakes, and mighty fortresses.',
    duration: '8 Days / 7 Nights',
    price: 200,
    originalPrice: 300,
    discount: '33% OFF',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.8,
    reviewsCount: 240,
    highlights: ['Jaisalmer desert safari', 'Pushkar sacred lake', 'Mehrangarh Fort', 'Camel ride in Thar Desert'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, overnight at luxury hotel' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, evening bazaar walk' },
      { time: 'Day 3', activity: 'Jaipur sightseeing, drive to Pushkar' },
      { time: 'Day 4', activity: 'Pushkar Lake, Brahma Temple, drive to Jodhpur' },
      { time: 'Day 5', activity: 'Jodhpur: Mehrangarh Fort, blue city heritage walk' },
      { time: 'Day 6', activity: 'Drive to Jaisalmer, Golden Fort exploration' },
      { time: 'Day 7', activity: 'Jaisalmer: Desert safari, camel ride, dune sunset' },
      { time: 'Day 8', activity: 'Fly from Jaisalmer/Jodhpur to Delhi, departure' }
    ]
  },
  {
    id: 'rajasthan-9d',
    title: '9 Day Royal Rajasthan Tour',
    description: 'The complete Rajasthan experience covering all major cities and hidden gems. From desert dunes to lake palaces, see it all.',
    duration: '9 Days / 8 Nights',
    price: 200,
    originalPrice: 300,
    discount: '33% OFF',
    image: 'https://images.unsplash.com/photo-1586612438666-ffd98e7eff1b?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 210,
    highlights: ['Mount Abu hill station', 'Ranakpur Jain temples', 'Desert camel safari', 'Complete Rajasthan circuit'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, welcome dinner at heritage hotel' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, City Palace' },
      { time: 'Day 3', activity: 'Jaipur: Hawa Mahal, Nahargarh, local bazaars' },
      { time: 'Day 4', activity: 'Drive to Jodhpur via Ajmer & Pushkar' },
      { time: 'Day 5', activity: 'Jodhpur: Mehrangarh Fort, Umaid Bhawan, blue city' },
      { time: 'Day 6', activity: 'Drive to Jaisalmer, Golden Fort evening walk' },
      { time: 'Day 7', activity: 'Jaisalmer desert safari, camel ride, desert camping' },
      { time: 'Day 8', activity: 'Drive to Udaipur via Ranakpur Jain Temples' },
      { time: 'Day 9', activity: 'Udaipur: City Palace, Lake Pichola, departure' }
    ]
  },
  {
    id: 'rajasthan-12d',
    title: '12 Day Grand Rajasthan Tour',
    description: 'The ultimate Rajasthan journey — every palace, every fort, every experience across the golden desert state. The most comprehensive royal tour available.',
    duration: '12 Days / 11 Nights',
    price: 200,
    originalPrice: 300,
    discount: '33% OFF',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 180,
    highlights: ['All major Rajasthan cities', 'Desert camping under stars', 'Heritage palace hotels', 'Complete royal experience'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, city orientation tour' },
      { time: 'Day 2', activity: 'Delhi sightseeing: Old Delhi, New Delhi monuments' },
      { time: 'Day 3', activity: 'Drive to Agra, Taj Mahal & Agra Fort' },
      { time: 'Day 4', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 5', activity: 'Jaipur: Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 6', activity: 'Drive to Pushkar: Sacred lake, Brahma Temple' },
      { time: 'Day 7', activity: 'Drive to Jodhpur: Mehrangarh Fort, blue city walk' },
      { time: 'Day 8', activity: 'Drive to Jaisalmer: Golden Fort exploration' },
      { time: 'Day 9', activity: 'Jaisalmer desert safari & overnight desert camp' },
      { time: 'Day 10', activity: 'Drive to Mount Abu via Ranakpur temples' },
      { time: 'Day 11', activity: 'Drive to Udaipur: City Palace, Lake Pichola' },
      { time: 'Day 12', activity: 'Udaipur morning tour, fly to Delhi, departure' }
    ]
  },

  // ─── PHOTOGRAPHY TOURS ───
  {
    id: 'taj-photography-tour',
    title: 'Taj Mahal Photography Tour',
    description: 'A dedicated photography tour of the Taj Mahal with expert guides who know the best angles, timing, and hidden viewpoints for stunning shots.',
    duration: '12 Hours',
    price: 250,
    originalPrice: 360,
    discount: '31% OFF',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80',
    category: 'Photography Tours',
    rating: 4.9,
    reviewsCount: 310,
    highlights: ['Golden hour shots at sunrise', 'Hidden viewpoints access', 'Professional photography tips', 'All best angles covered'],
    itinerary: [
      { time: '04:00 AM', activity: 'Pickup from hotel, drive to Agra' },
      { time: '05:30 AM', activity: 'Pre-dawn setup at Mehtab Bagh for Taj reflections' },
      { time: '06:15 AM', activity: 'Sunrise golden hour shoot at Taj Mahal' },
      { time: '08:00 AM', activity: 'Breakfast break, review shots' },
      { time: '09:00 AM', activity: 'Interior details & architecture photography session' },
      { time: '11:00 AM', activity: 'Agra Fort photography — dramatic angles & shadows' },
      { time: '01:00 PM', activity: 'Lunch, then Yamuna riverside Taj shots' },
      { time: '03:00 PM', activity: 'Secret viewpoints & local neighborhood spots' },
      { time: '04:30 PM', activity: 'Depart for Delhi with your collection of shots' }
    ]
  },
  {
    id: 'delhi-photography-tour',
    title: 'Delhi Street & Heritage Photography Tour',
    description: 'Capture the vibrant streets, historic monuments, and hidden corners of Delhi with a local photography guide. Perfect for enthusiasts and pros.',
    duration: '10 Hours',
    price: 250,
    originalPrice: 360,
    discount: '31% OFF',
    image: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=1200&q=80',
    category: 'Photography Tours',
    rating: 4.8,
    reviewsCount: 260,
    highlights: ['Old Delhi street photography', 'Humayun\'s Tomb golden hour', 'Qutub Minar dramatic angles', 'Local life & culture shots'],
    itinerary: [
      { time: '06:00 AM', activity: 'Early morning at Jama Masjid — empty courtyards' },
      { time: '07:30 AM', activity: 'Old Delhi street photography — spice market, Chandni Chowk' },
      { time: '09:30 AM', activity: 'Breakfast at Paranthe Wali Gali' },
      { time: '10:30 AM', activity: 'Humayun\'s Tomb — Mughal architecture in morning light' },
      { time: '12:30 PM', activity: 'Lunch break, review and tips session' },
      { time: '02:00 PM', activity: 'Qutub Minar complex — shadows and geometry' },
      { time: '04:00 PM', activity: 'Lodhi Garden — nature and heritage blend' },
      { time: '05:30 PM', activity: 'India Gate golden hour, wrap up session' }
    ]
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
