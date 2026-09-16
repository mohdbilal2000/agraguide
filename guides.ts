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
  }
];
