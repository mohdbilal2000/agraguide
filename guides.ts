import { Guide } from './types';

/**
 * Evergreen reference content served at /guides.
 *
 * Facts here are time-sensitive. Each guide carries an `updated` date that is
 * shown to readers and emitted in schema — when you revise a figure, move the
 * date. Monument timings and fees are set by the Archaeological Survey of
 * India and change without much notice; the official source is
 * tajmahal.gov.in.
 */

export const GUIDES: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'taj-mahal-sunrise',
    metaTitle: 'Taj Mahal Sunrise: What Time to Arrive, Which Gate, What to Expect',
    metaDescription:
      'The Taj Mahal opens 30 minutes before sunrise, so the gate time moves through the year. Month-by-month arrival times, which gate to use, and what the first hour is actually like.',
    h1: 'Taj Mahal at Sunrise: Timing, Gates and What Actually Happens',
    cardTitle: 'Taj Mahal Sunrise Guide',
    cardSummary:
      'The gate time changes every month. Here is when to arrive, which gate to choose, and an honest account of the first hour.',
    image: '/taj-mahal-dawn.webp',
    updated: '2026-09-16',
    intro: [
      'The Taj Mahal does not open at a fixed clock time. It opens roughly 30 minutes before sunrise and closes 30 minutes before sunset, which means the gate time shifts by almost two hours between June and December. Most guides quoting a flat "6 AM" are wrong for half the year.',
      'That single fact drives everything else — when to leave Delhi, which gate to use, and whether a sunrise visit in your travel month is even worth the alarm clock. This page covers all three.'
    ],
    sections: [
      {
        heading: 'What time does the Taj Mahal actually open?',
        id: 'opening-time',
        body: [
          'The Archaeological Survey of India sets opening at 30 minutes before sunrise. Ticket counters at the East and West gates open an hour before sunrise. Because sunrise in Agra moves from about 5:20 AM in late June to about 7:10 AM in late December, so does everything else.',
          'The table below is approximate — sunrise shifts a few minutes each week, and you should check your exact date. Treat it as a planning guide, not a timetable.'
        ],
        table: {
          caption: 'Approximate Agra sunrise and gate-opening times by month',
          headers: ['Month', 'Sunrise (approx.)', 'Gate opens (approx.)', 'Be in the queue by'],
          rows: [
            ['January', '7:10 AM', '6:40 AM', '6:20 AM'],
            ['February', '7:00 AM', '6:30 AM', '6:10 AM'],
            ['March', '6:30 AM', '6:00 AM', '5:40 AM'],
            ['April', '6:05 AM', '5:35 AM', '5:15 AM'],
            ['May', '5:40 AM', '5:10 AM', '4:50 AM'],
            ['June', '5:25 AM', '4:55 AM', '4:35 AM'],
            ['July', '5:35 AM', '5:05 AM', '4:45 AM'],
            ['August', '5:50 AM', '5:20 AM', '5:00 AM'],
            ['September', '6:10 AM', '5:40 AM', '5:20 AM'],
            ['October', '6:25 AM', '5:55 AM', '5:35 AM'],
            ['November', '6:45 AM', '6:15 AM', '5:55 AM'],
            ['December', '7:05 AM', '6:35 AM', '6:15 AM']
          ]
        },
        callout: {
          title: 'The 20 minutes that decide your morning',
          text: 'Security screening is the bottleneck, not the ticket counter. Being twenty minutes ahead of the gate opening usually puts you in the first group through — which is the difference between a clear forecourt and two hundred people in your photographs.'
        }
      },
      {
        heading: 'East Gate or West Gate?',
        id: 'which-gate',
        body: [
          'There are three entrances. The South Gate no longer sells tickets and is used mainly as an exit. That leaves a real choice between East and West.',
          'The East Gate is the quieter of the two at dawn and is the side most Delhi arrivals use. The West Gate sits closer to Agra\'s old city and Taj Ganj, so it draws more of the local hotel traffic and more coach groups. Neither gets you inside faster once you are through screening — both funnel into the same forecourt — but the queue at East is usually shorter before opening.',
          'One practical note: the walk from the ticket counter to the actual entrance at the East Gate is about a kilometre. Battery buses cover it, but in the dark, with a queue forming, it is worth allowing the extra ten minutes rather than assuming a short stroll.'
        ]
      },
      {
        heading: 'Leaving from Delhi: the honest arithmetic',
        id: 'from-delhi',
        body: [
          'Delhi to Agra on the Yamuna Expressway takes three to three and a half hours in light traffic. Before dawn the road is genuinely clear, which is the one advantage of the pre-dawn start.',
          'Working backwards from the table above: a December sunrise visit means leaving a Delhi hotel around 3:00 AM. A June visit means leaving around 1:30 AM — which is why we rarely recommend a Delhi-based sunrise trip in high summer. In those months an overnight in Agra makes far more sense than a night without sleep.',
          'The Gatimaan Express cannot do sunrise. It leaves Hazrat Nizamuddin at 8:10 AM and reaches Agra at 9:50 AM, well after the light has gone flat. The train is an excellent way to see the Taj Mahal — just not at dawn.'
        ]
      },
      {
        heading: 'What the first hour is actually like',
        id: 'first-hour',
        body: [
          'The marble does not turn pink on cue. What happens is subtler and, honestly, better: for about twenty minutes the dome shifts through grey, then a soft apricot, then white, and the change is fast enough that you notice it happening.',
          'The forecourt in front of the main gateway fills first, because everyone stops at the classic framed view. If you walk straight through and turn right along the watercourse, you will usually have two or three minutes of near-empty foreground before the crowd catches up.',
          'By around forty minutes after opening the central path is busy. By ninety minutes it is shoulder to shoulder in front of the platform. The mausoleum interior — the part your ₹200 supplement pays for — is coolest and quietest in that first hour, and stifling by mid-morning.'
        ],
        list: [
          'Shoe covers are handed out at the platform steps; you do not need to buy your own',
          'Photography is permitted in the gardens and forecourt, not inside the mausoleum chamber',
          'Tripods and drones are not allowed through security',
          'Your ticket is valid for three hours from entry — ample for sunrise, and worth knowing if you plan to linger'
        ]
      },
      {
        heading: 'When sunrise is not worth it',
        id: 'when-to-skip',
        body: [
          'December and January mornings in Agra carry real fog risk. On a bad morning the monument is invisible until nine or ten o\'clock, and a 3:00 AM departure buys you a view of white mist. There is no way to know the night before with any confidence.',
          'If your travel dates fall in deep winter and you only have one shot, a mid-morning visit is the safer bet. If you have two days, go at sunrise and keep the following morning in reserve.',
          'In May and June the heat argues the other way: sunrise is the only comfortable time to be there at all, but the departure time from Delhi becomes punishing. An overnight in Agra solves it.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Taj Mahal open at sunrise every day?',
        answer:
          'Every day except Friday, when the monument is closed for congregational prayers at the mosque inside the complex. There are no exceptions, including public holidays.'
      },
      {
        question: 'Can I buy sunrise tickets at the gate?',
        answer:
          'Yes, counters open about an hour before sunrise — but the gates are digital-payment only, so carry a card or a working UPI app rather than cash. Booking ahead removes the queue entirely, which matters more at dawn than at any other hour.'
      },
      {
        question: 'How long should I allow for a sunrise visit?',
        answer:
          'Ninety minutes inside is comfortable for the gardens, the platform and the mausoleum interior. Your ticket allows three hours. Add thirty minutes either side for parking, screening and the walk from the gate.'
      },
      {
        question: 'Is sunrise better than sunset at the Taj Mahal?',
        answer:
          'For photographs and for crowds, yes. Sunrise gives softer light, far fewer people and a chance of reflections in the still watercourse. Sunset is warmer and more dramatic but considerably busier, and the closing time is 30 minutes before sunset — so you never quite see the sun go down from inside.'
      }
    ],
    related: [
      {
        label: 'Sunrise Taj Mahal Private Tour',
        to: '/plans/sunrise-taj-tour',
        note: 'Pickup timed to your travel month, tickets pre-booked, and a licensed guide who knows where the light lands first.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'The sensible option in summer and deep winter — sleep in Agra, walk to the gate, and keep a second morning in reserve if the fog rolls in.'
      }
    ],
    seeAlso: [
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' },
      { label: 'Is the Taj Mahal closed on Friday?', to: '/guides/taj-mahal-friday-closed' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'delhi-to-agra',
    metaTitle: 'Delhi to Agra: Train, Car or Bus — Times, Costs and Which to Choose',
    metaDescription:
      'Delhi to Agra is about 230 km and three hours by road, or 100 minutes on the Gatimaan Express. A straight comparison of every option, including the return journey most guides forget.',
    h1: 'Delhi to Agra: Every Way to Get There, Compared',
    cardTitle: 'Delhi to Agra Travel Guide',
    cardSummary:
      'Train, private car, bus and self-drive — with real timings, honest costs, and the return-leg problem nobody mentions.',
    image: '/chai-stop-with-driver.webp',
    updated: '2026-09-16',
    intro: [
      'Agra sits about 230 km south of Delhi. The Yamuna Expressway covers it in three to three and a half hours by road; the Gatimaan Express does it in one hour forty. Both are good options, and which one suits you depends almost entirely on what time you want to be standing in front of the Taj Mahal.',
      'The part that catches people out is not the outbound journey. It is the return.'
    ],
    sections: [
      {
        heading: 'The options at a glance',
        id: 'at-a-glance',
        table: {
          caption: 'Delhi to Agra — journey comparison',
          headers: ['Option', 'Journey time', 'Departure control', 'Sunrise possible?', 'Best for'],
          rows: [
            ['Private car', '3–3.5 hrs', 'Any time you like', 'Yes', 'Sunrise visits, families, door-to-door'],
            ['Gatimaan Express', '1 hr 40 min', 'Fixed: 8:10 AM out', 'No', 'Comfort, speed, a relaxed late start'],
            ['Other trains', '2–4 hrs', 'Several daily', 'Some', 'Budget travel, flexible timing'],
            ['Bus', '4–6 hrs', 'Frequent', 'No', 'Lowest cost, no fixed schedule needed'],
            ['Self-drive', '3–3.5 hrs', 'Any time', 'Yes', 'Confident drivers only — see below']
          ]
        }
      },
      {
        heading: 'The Gatimaan Express',
        id: 'gatimaan',
        body: [
          'India\'s fastest train runs as 12050 out of Hazrat Nizamuddin at 8:10 AM, reaching Agra Cantt at about 9:50 AM. The return, 12049, leaves Agra at roughly 5:50 PM and is back in Delhi by about 7:30 PM. It does not run every day of the week, so check your date before building a plan around it.',
          'Two seating classes: Chair Car and Executive Chair Car, both air-conditioned with a meal served. Fares vary with demand, and seats on popular dates sell out two to four weeks ahead.',
          'What the train gives you is a genuinely comfortable ninety minutes instead of three hours in traffic, and no dependence on road conditions. What it takes away is control: you arrive at 9:50 AM whether or not that is when you wanted to be at the monument, and you must be back at Agra Cantt by early evening.'
        ],
        callout: {
          title: 'The return-leg problem',
          text: 'The 5:50 PM return sounds generous until you map it against a full day. Taj Mahal, Agra Fort and lunch fit comfortably. Add Fatehpur Sikri — 40 km west of Agra — and you will be watching the clock all afternoon. If Fatehpur Sikri matters to you, take the car.'
        }
      },
      {
        heading: 'By private car',
        id: 'by-car',
        body: [
          'The Yamuna Expressway is a good road: six lanes, tolled, and genuinely fast outside of peak Delhi traffic. Three hours is realistic; three and a half is honest if you are leaving mid-morning from central Delhi.',
          'The advantage is not speed — it is that you choose the departure time. A 3:00 AM start for sunrise is only possible by road. So is stopping where you like, staying at the monument as long as you want, and being collected from the exit rather than finding your way back to a station.',
          'Costs to expect beyond the vehicle itself: expressway tolls in both directions, parking at the monument, and driver allowance on a long day. A reputable operator includes all of these in the quoted price — ask directly, because the ones who do not will present them at the end of the day.'
        ]
      },
      {
        heading: 'Other trains, and the bus',
        id: 'other-options',
        body: [
          'Beyond the Gatimaan, several Shatabdi and Vande Bharat services run the route, along with slower expresses. Journey times range from about two hours to four. They are cheaper, more frequent and less predictable in terms of punctuality.',
          'Buses run frequently from Delhi\'s ISBT terminals and from private operators, taking four to six hours depending on traffic and stops. It is the cheapest way to reach Agra, and a reasonable choice if the journey itself is not part of what you are paying for. It is not a sensible base for a same-day return trip.'
        ]
      },
      {
        heading: 'A word on self-driving',
        id: 'self-drive',
        body: [
          'Self-drive rentals exist and the expressway itself is straightforward. Delhi and Agra city traffic are not. Lane discipline, unlit vehicles at night and unfamiliar junction behaviour make the last few kilometres at either end harder than the 200 km in between.',
          'If you are an experienced driver in India, it is fine. If your driving experience is European or North American, the honest recommendation is a car with a driver — it usually costs less than the rental plus fuel plus tolls, and you arrive unfrazzled.'
        ]
      },
      {
        heading: 'Which should you choose?',
        id: 'recommendation',
        list: [
          'Want sunrise at the Taj Mahal — private car, no alternative',
          'Want a comfortable, relaxed day with a 10 AM start — Gatimaan Express',
          'Want Taj Mahal plus Fatehpur Sikri in one day — private car',
          'Travelling with young children or elderly parents — private car, for the door-to-door',
          'Budget is the deciding factor — a slower train, or the bus',
          'Two days in Agra rather than one — either; the train is pleasanter if you are not chasing sunrise'
        ]
      }
    ],
    faqs: [
      {
        question: 'How far is Agra from Delhi?',
        answer:
          'About 230 km by the Yamuna Expressway. Road journey time is three to three and a half hours each way in normal conditions.'
      },
      {
        question: 'Can I do Delhi to Agra and back in one day?',
        answer:
          'Yes, and thousands of people do. By car it is roughly a twelve-hour day door to door; by Gatimaan Express, closer to eleven. It is a long day either way, but a well-planned one is not a rushed one — the driving happens while you would otherwise be asleep or tired.'
      },
      {
        question: 'What time does the Gatimaan Express leave Delhi?',
        answer:
          'Train 12050 departs Hazrat Nizamuddin at about 8:10 AM and arrives at Agra Cantt around 9:50 AM. The return service, 12049, leaves Agra at roughly 5:50 PM. It does not run daily — confirm your travel date before booking around it.'
      },
      {
        question: 'Is the Yamuna Expressway safe at night?',
        answer:
          'It is well surfaced and well used, and pre-dawn departures for sunrise trips are routine. The risks are the ordinary ones of night driving in India — unlit slow vehicles, and fatigue. With a professional driver who does the route regularly, it is a normal working journey.'
      }
    ],
    related: [
      {
        label: 'Same Day Taj Mahal Tour by Car',
        to: '/plans/same-day-taj-car',
        note: 'Private air-conditioned car with driver, door to door from your Delhi hotel, with tolls and parking included.'
      },
      {
        label: 'Same Day Taj Mahal Tour by Express Train',
        to: '/plans/same-day-taj-train',
        note: 'Gatimaan Express both ways, with a licensed guide and a private vehicle waiting at Agra Cantt.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'If a twelve-hour day sounds like too much — sunrise and sunset in Agra, with a night in between.'
      }
    ],
    seeAlso: [
      { label: 'Taj Mahal at sunrise: timing and gates', to: '/guides/taj-mahal-sunrise' },
      { label: 'Is the Taj Mahal closed on Friday?', to: '/guides/taj-mahal-friday-closed' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'taj-mahal-friday-closed',
    metaTitle: 'Is the Taj Mahal Closed on Friday? Yes — Here Is What to Do Instead',
    metaDescription:
      'The Taj Mahal is closed every Friday for prayers, with no exceptions. What is still open in Agra that day, and how to reshuffle a one- or two-day itinerary around it.',
    h1: 'Is the Taj Mahal Closed on Friday?',
    cardTitle: 'Taj Mahal on Fridays',
    cardSummary:
      'Yes, every Friday, no exceptions. Here is what is still worth doing in Agra that day — including the view most visitors never see.',
    image: '/taj-mahal-reflection.webp',
    updated: '2026-09-16',
    intro: [
      'Yes. The Taj Mahal is closed to visitors every Friday, without exception, including public holidays and peak season. The mosque inside the complex holds congregational prayers that day and the monument is not open for general viewing.',
      'If Friday is the only day your itinerary allows in Agra, you have two options: move the day, or spend it on the rest of Agra — which is more rewarding than most people expect.'
    ],
    sections: [
      {
        heading: 'Why it closes',
        id: 'why',
        body: [
          'The Taj Mahal complex contains a working mosque on its western side. Friday is the day of congregational prayer, and the complex is reserved for worshippers rather than ticketed visitors.',
          'This is not a seasonal arrangement or a rule that flexes for busy periods. It has been in place for years and applies every Friday of the year. Any operator offering you a Friday Taj Mahal visit is either mistaken or selling you something they cannot deliver.'
        ]
      },
      {
        heading: 'What is open in Agra on a Friday',
        id: 'what-is-open',
        body: [
          'Agra has three UNESCO World Heritage sites. Only one of them closes on Friday.'
        ],
        table: {
          headers: ['Site', 'Open on Friday?', 'Time to allow'],
          rows: [
            ['Taj Mahal', 'No', '—'],
            ['Agra Fort', 'Yes', '2 hours'],
            ['Fatehpur Sikri', 'Yes', '2–3 hours'],
            ['Mehtab Bagh', 'Yes', '45 minutes'],
            ['Itimad-ud-Daulah (Baby Taj)', 'Yes', '1 hour'],
            ['Akbar\'s Tomb, Sikandra', 'Yes', '1 hour']
          ]
        },
        callout: {
          title: 'The view almost nobody plans for',
          text: 'Mehtab Bagh sits directly across the Yamuna from the Taj Mahal, on axis with the dome. You cannot enter the monument on a Friday, but you can stand in a Mughal garden and look straight at it across the river — and at sunset, with the marble catching the last light and almost no one around, it is arguably the better photograph.'
        }
      },
      {
        heading: 'Fatehpur Sikri: the strongest Friday option',
        id: 'fatehpur-sikri',
        body: [
          'Forty kilometres west of Agra stands a complete Mughal capital, built by Akbar in the 1570s and abandoned within about fifteen years. Red sandstone courtyards, the Diwan-i-Khas with its extraordinary central pillar, Panch Mahal, and the Buland Darwaza — at 54 metres, one of the tallest gateways in the world.',
          'It is open on Fridays. It takes about ninety minutes to reach from Agra city, and two to three hours to see properly. Paired with Agra Fort in the morning, it makes a full and genuinely excellent day that does not feel like a consolation prize.',
          'One practical note: the Jama Masjid within the Fatehpur Sikri complex is also an active mosque, and Friday prayers take place there too. The palace complex remains open; expect the mosque courtyard to be busy around midday.'
        ]
      },
      {
        heading: 'How to reshuffle your itinerary',
        id: 'reshuffle',
        body: [
          'If you have two days in Agra and one is a Friday, the fix is simple: do Agra Fort, Fatehpur Sikri and Mehtab Bagh on the Friday, and keep the Taj Mahal for the Saturday sunrise. This is a better sequence than the usual one anyway — you arrive at the Taj having already understood the Mughal architecture that leads up to it.',
          'If you have only one day and it is a Friday, you have a decision to make. Moving the day by twenty-four hours is almost always worth it. If that is genuinely impossible, spend the day on the other two World Heritage sites and see the Taj from Mehtab Bagh at sunset — it is a real experience, not a substitute one.',
          'If you are on a Golden Triangle circuit, the fix is usually to swap the Agra and Jaipur legs rather than to lose a day.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Taj Mahal ever open on a Friday?',
        answer:
          'No. The closure applies every Friday of the year, including during peak tourist season and on public holidays that fall on a Friday.'
      },
      {
        question: 'Is Agra Fort open on Friday?',
        answer:
          'Yes. Agra Fort, Fatehpur Sikri, Mehtab Bagh, Itimad-ud-Daulah and Akbar\'s Tomb are all open on Fridays. Only the Taj Mahal closes.'
      },
      {
        question: 'Can I see the Taj Mahal from outside on a Friday?',
        answer:
          'Yes. Mehtab Bagh, the Mughal garden directly across the Yamuna, gives an unobstructed view of the mausoleum on axis with the dome. It is open on Fridays and is at its best in the hour before sunset.'
      },
      {
        question: 'Does Taj Mahal night viewing run on Fridays?',
        answer:
          'No. Night viewing is available on five nights per lunar cycle — the full moon and the two nights either side — but not on Fridays, and not during Ramadan.'
      }
    ],
    related: [
      {
        label: 'Agra & Fatehpur Sikri Heritage Tour',
        to: '/plans/agra-fatehpur-sikri',
        note: 'Built for exactly this problem: Agra Fort and Fatehpur Sikri on one day, the Taj Mahal at sunrise on the next.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'Two days in Agra gives you the flexibility to work around a Friday without losing the monument.'
      }
    ],
    seeAlso: [
      { label: 'Taj Mahal at sunrise: timing and gates', to: '/guides/taj-mahal-sunrise' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'is-delhi-safe-for-tourists',
    metaTitle: 'Is Delhi Safe for Tourists? An Honest Answer from Local Guides',
    metaDescription:
      'Delhi is safe for most visitors who take ordinary precautions — but the honest answer has detail in it. What actually goes wrong, what does not, and what solo women should know.',
    h1: 'Is Delhi Safe for Tourists?',
    cardTitle: 'Is Delhi Safe for Tourists?',
    cardSummary:
      'The honest version — what actually goes wrong in Delhi, what is exaggerated, and what solo female travellers should plan for.',
    image: '/india-gate-group.webp',
    updated: '2026-09-17',
    intro: [
      'Mostly, yes. Millions of foreign visitors come through Delhi every year and the overwhelming majority have an ordinary, uneventful trip. The real risks are not the ones most people worry about — violent crime against tourists is rare. What is common is being overcharged, misdirected, or steered towards a shop that pays commission.',
      'That said, "it is safe" is a lazy answer, and so is "it is dangerous". Below is what actually tends to go wrong, what solo women should plan for, and what we do differently on our own tours. We run these streets every week, and we would rather you arrive prepared than reassured.'
    ],
    sections: [
      {
        heading: 'What actually goes wrong',
        id: 'what-goes-wrong',
        body: [
          'Almost every bad story that comes out of Delhi is a commercial one, not a violent one. It follows a pattern, and the pattern is worth knowing because it is easy to spot once you have seen it written down.'
        ],
        list: [
          'The taxi that says your hotel is "closed", "burnt down" or "full", and offers to take you to a better one — where he earns a commission',
          'The helpful stranger outside a monument who says the entrance is elsewhere, and walks you towards a travel agency',
          'The auto-rickshaw that will not use the meter, then quotes four times the fare at the end of the ride',
          'The "government tourist office" near Connaught Place that is nothing of the sort',
          'The shopping stop your driver insists on, where prices are doubled and he takes a cut'
        ],
        callout: {
          title: 'The one rule that prevents most of it',
          text: 'Never let a stranger redirect a plan you already made. If someone tells you your hotel is closed, your monument is shut, or your route has changed, assume it is untrue until you have checked it yourself. Every version of this scam depends on you changing your plan on someone else\'s word.'
        }
      },
      {
        heading: 'Solo female travellers',
        id: 'solo-women',
        body: [
          'This deserves a straight answer rather than a reassuring one. Delhi has a poor reputation on women\'s safety, and it is not entirely undeserved — staring is common, and crowded public transport can be uncomfortable. Most solo women who visit have no serious problem, but "most" is doing real work in that sentence and it would be dishonest to pretend otherwise.',
          'What changes the experience is structure: knowing where you are going, having transport you did not arrange on the street, and not being alone in unfamiliar areas after dark. None of that requires being fearful. It requires planning the parts that are easy to plan.'
        ],
        list: [
          'The Delhi Metro has a women-only carriage at the front of every train — it is well used and worth using at busy hours',
          'Use a booked cab (app or hotel) rather than flagging one down, particularly at night',
          'Dress is not about rules — shoulders and knees covered simply attracts less attention, which is the practical point',
          'Trust the instinct to leave a situation. You owe no one a polite exit',
          'Share your day\'s plan with someone — a hotel, a friend at home, or your guide'
        ]
      },
      {
        heading: 'Areas, and times of day',
        id: 'areas',
        body: [
          'Delhi is not one place. Central Delhi around India Gate, Lodhi Road and Khan Market is calm and green. Old Delhi around Chandni Chowk is dense, loud and completely absorbing — and entirely fine in daylight, though it is easy to get lost and hard to move quickly.',
          'Paharganj, the backpacker area near New Delhi railway station, is where most touts operate. It is not dangerous so much as relentless. If your hotel is there, that is fine, but expect to be approached constantly.',
          'After dark, the calculation changes in the way it does in any large city: stay in well-lit, busy areas, and take a booked cab rather than walking unfamiliar routes. Delhi at night is not a no-go zone — Connaught Place, Khan Market and Hauz Khas are busy and normal well into the evening.'
        ]
      },
      {
        heading: 'Food and water',
        id: 'food-water',
        body: [
          'The stomach is the thing most likely to interrupt your trip, not crime. Tap water is not drinkable — use sealed bottles, and check the seal. Ice in smaller places is worth avoiding.',
          'Street food is not the enemy. A busy stall with high turnover, cooking in front of you, is usually safer than a quiet restaurant with a fridge you cannot see. The rule is freshly cooked and hot, eaten where locals are eating.',
          'If your stomach is unaccustomed to Indian food, give it a couple of days before the ambitious eating. Carry oral rehydration salts; they are cheap at any pharmacy and make a bad day considerably shorter.'
        ]
      },
      {
        heading: 'Air quality — the real seasonal risk',
        id: 'air-quality',
        body: [
          'This is the health issue most visitors underestimate, and unlike everything else on this page it is seasonal and measurable. Delhi\'s air is at its worst from late October through January, when crop burning, cooler air and winter smog combine. Readings during that period are regularly in the unhealthy range.',
          'For most healthy adults on a short visit it means irritated eyes and a cough. For anyone with asthma or a respiratory condition, or travelling with young children or elderly parents, it is worth taking seriously — check the current AQI before you travel, carry an N95 mask, and plan indoor mornings on the worst days.',
          'February to April and September to early October are considerably better, and pleasant to walk in.'
        ]
      },
      {
        heading: 'What we do about it',
        id: 'how-we-work',
        body: [
          'Most of the risks above come from the gaps — the walk from the station, the taxi you did not arrange, the stranger at the gate. A guided day removes the gaps rather than the city.',
          'On our tours you are with a Ministry of Tourism licensed guide and a driver we work with regularly, for the whole day. Pickup and drop are at your hotel door, not a public meeting point. You have a direct WhatsApp line to us throughout, and female guides can be requested at booking with no extra charge.',
          'We do not run commission shopping stops. If you want to shop, tell us and we will take you somewhere good — but it will not appear in your itinerary uninvited.',
          'If you would like your itinerary, vehicle number and guide details shared with someone at home before the tour, ask. We do this often and think more people should.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is Delhi safe for solo female travellers?',
        answer:
          'For most visitors, yes, with ordinary precautions — booked transport rather than street-hailed, the women-only Metro carriage at busy hours, and avoiding unfamiliar areas alone after dark. Staring is common and can be wearing; serious incidents involving foreign visitors are rare. Travelling with a guide removes most of the situations where problems start.'
      },
      {
        question: 'Is it safe to eat street food in Delhi?',
        answer:
          'Generally yes, if you choose well. Busy stalls with fast turnover, cooked fresh in front of you, are the safest bet. Avoid anything sitting out, raw salads washed in tap water, and ice in smaller places. Drink only sealed bottled water.'
      },
      {
        question: 'What is the most common scam in Delhi?',
        answer:
          'Being told your hotel is closed, full or burnt down, and being taken to a different one that pays commission. The variants all work the same way — a stranger changes a plan you already had. Verify anything like this yourself before acting on it.'
      },
      {
        question: 'When is Delhi air pollution at its worst?',
        answer:
          'Late October through January, with November usually the worst month. If you have a respiratory condition or are travelling with children or older parents, check the AQI before booking those dates and carry an N95 mask.'
      },
      {
        question: 'Is the Delhi Metro safe for tourists?',
        answer:
          'Yes. It is clean, cheap, air-conditioned and heavily used by locals and visitors alike, with security screening at every station. The front carriage of each train is reserved for women. It is crowded at rush hour, which is a comfort issue rather than a safety one.'
      }
    ],
    related: [
      {
        label: 'Delhi Photography Tour',
        to: '/plans/delhi-photography-tour',
        note: 'A full day across Old and New Delhi with a licensed guide — the simplest way to see the city without arranging anything on the street.'
      },
      {
        label: 'Hire a Licensed Guide',
        to: '/guide-booking',
        note: 'Guide only, if you have your own transport and just want someone who knows the city with you.'
      }
    ],
    seeAlso: [
      { label: 'Getting around Delhi: metro, taxi or car', to: '/guides/getting-around-delhi' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'getting-around-delhi',
    metaTitle: 'Getting Around Delhi: Metro, Taxi, Auto or Private Car',
    metaDescription:
      'Delhi is large and the right transport changes by time of day. Metro, app cabs, autos and private cars compared — costs, when each works, and what to avoid.',
    h1: 'Getting Around Delhi: Metro, Taxi, Auto or Car',
    cardTitle: 'Getting Around Delhi',
    cardSummary:
      'The Metro is excellent and the traffic is not. When to use which, what things cost, and the mistakes that cost visitors time.',
    image: '/red-fort-delhi.webp',
    updated: '2026-09-17',
    intro: [
      'Delhi covers roughly 1,500 square kilometres, and the distance between two things you want to see is usually further than it looks on a map. Getting this right is the difference between seeing four monuments in a day and seeing two.',
      'The short version: the Metro is genuinely excellent and beats road transport at rush hour; app cabs are cheap and remove all negotiation; autos are useful for short hops if you agree the fare first; and a private car earns its cost on a day with several stops or in the heat.'
    ],
    sections: [
      {
        heading: 'The options, compared',
        id: 'compare',
        table: {
          caption: 'Delhi transport at a glance',
          headers: ['Option', 'Cost', 'Best for', 'Watch out for'],
          rows: [
            ['Metro', 'Very low', 'Rush hour, long distances, airport run', 'Crowds 8–10am and 5–8pm; not every monument is near a station'],
            ['App cab (Uber / Ola)', 'Low', 'Door to door, at night, with luggage', 'Surge pricing; drivers cancelling short trips'],
            ['Auto-rickshaw', 'Low', 'Short hops, last mile from a Metro station', 'Meters often refused — agree the fare before you sit'],
            ['Private car with driver', 'Higher', 'Full sightseeing days, families, summer heat', 'Unsolicited shopping stops with commission operators'],
            ['Walking', 'Free', 'Old Delhi lanes, Lodhi Garden, Khan Market', 'Distances between areas are much longer than they look']
          ]
        }
      },
      {
        heading: 'The Metro',
        id: 'metro',
        body: [
          'Delhi\'s Metro is one of the best in Asia — clean, air-conditioned, cheap and fast. Trains run roughly from early morning until about 11pm, and every station has security screening on entry, which takes a minute or two.',
          'Pay with a travel card or a QR ticket bought at the station or in the DMRC app. A card is worth it if you plan more than a couple of journeys.',
          'The Airport Express Line connects Terminal 3 with New Delhi railway station in about twenty minutes. At rush hour it comfortably beats a taxi, which can take an hour or more for the same journey.',
          'The front carriage of every train is reserved for women. Bulky luggage is allowed on the Airport Express but awkward on the regular lines during peak hours.'
        ],
        callout: {
          title: 'Where the Metro stops being the answer',
          text: 'Several of the places you have come to see — Humayun\'s Tomb, Lodhi Garden, parts of Old Delhi — are a further ten to twenty minutes from the nearest station. The Metro gets you across the city; something else gets you the last kilometre. Plan for both rather than assuming one covers the day.'
        }
      },
      {
        heading: 'App cabs and autos',
        id: 'cabs-autos',
        body: [
          'Uber and Ola both work across Delhi and are inexpensive by international standards. The advantage is not only price — it is that the fare is fixed in advance and there is nothing to negotiate. Both also offer auto-rickshaws in the app, which solves the meter problem entirely.',
          'Flagged-down autos are still useful for short distances. The meter is frequently refused; agree a price before getting in, and expect to be quoted high initially. A short hop across a neighbourhood should be modest — if the number sounds like a taxi fare, it is one.',
          'At the airport, use the official prepaid taxi counter or an app pickup from the designated zone. Do not accept an offer from someone approaching you in the arrivals hall.'
        ]
      },
      {
        heading: 'Private car with driver',
        id: 'private-car',
        body: [
          'For a sightseeing day this is usually the right answer, and not mainly for comfort. Delhi\'s monuments are spread across the city; with a car the vehicle waits while you go in, your bags stay with you, and you are not renegotiating transport five times a day in 40-degree heat.',
          'It matters more with children, with elderly parents, in May and June, and on any day where you want to see more than three places.',
          'One thing to settle before you start: shopping stops. Many drivers earn commission from emporiums and will build them into your day. A reputable operator does not. Say at the start that you do not want unplanned stops — and if you do want to shop, say that too, so it is on your terms.'
        ]
      },
      {
        heading: 'Traffic, and how to plan around it',
        id: 'traffic',
        body: [
          'Delhi traffic is heaviest roughly 8–10am and 5–8pm on weekdays. In those windows a journey can take three times as long as the map suggests, and the Metro will usually win outright.',
          'Old Delhi is its own case. Around Chandni Chowk, vehicles barely move and the lanes are too narrow for cars anyway. Arrive by Metro or drop at the edge and walk in — a cycle-rickshaw through the bazaar is slow, but it is also one of the better twenty minutes of a Delhi trip.',
          'Sunday morning is the quietest the city gets. If your itinerary has one day with a lot of ground to cover, make it that one.'
        ],
        list: [
          'Allow 45–60 minutes between areas during peak hours, not the 20 minutes the map shows',
          'Group sights by area rather than by interest — Old Delhi together, central Delhi together, south Delhi together',
          'Monument entry closes well before sunset; the last hour of the day is better spent somewhere open in the evening'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Delhi Metro good for tourists?',
        answer:
          'Yes — it is cheap, air-conditioned, clean and far faster than road transport at rush hour. Buy a travel card or a QR ticket at the station. Bear in mind that several major monuments sit some distance from the nearest station, so you will often still need an auto or cab for the last stretch.'
      },
      {
        question: 'How do I get from Delhi airport to the city?',
        answer:
          'The Airport Express Metro reaches New Delhi station from Terminal 3 in about twenty minutes and is the fastest option at busy times. Otherwise use the official prepaid taxi counter or book an app cab from the designated pickup zone. Do not accept rides offered by people approaching you inside arrivals.'
      },
      {
        question: 'Should I use Uber or an auto-rickshaw in Delhi?',
        answer:
          'Uber and Ola remove the negotiation and fix the fare in advance, which makes them the simpler choice for most visitors. Autos are good for short hops and are cheaper — just agree the fare before getting in, since meters are frequently refused. Both apps also let you book an auto with a fixed fare.'
      },
      {
        question: 'Do I need a private car for a day of sightseeing in Delhi?',
        answer:
          'Not strictly, but it saves a great deal of time if you plan to see more than three places, and it matters in the summer heat or with children or older parents. The vehicle waits at each stop and your luggage stays with you, which the Metro and cabs cannot offer.'
      }
    ],
    related: [
      {
        label: 'Delhi Photography Tour',
        to: '/plans/delhi-photography-tour',
        note: 'Private vehicle and a licensed guide for the day, timed around the light and the traffic rather than against them.'
      },
      {
        label: 'Same Day Taj Mahal Tour by Car',
        to: '/plans/same-day-taj-car',
        note: 'If Agra is on the plan — door to door from your Delhi hotel, with tolls and parking included.'
      }
    ],
    seeAlso: [
      { label: 'Is Delhi safe for tourists?', to: '/guides/is-delhi-safe-for-tourists' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  }
];
