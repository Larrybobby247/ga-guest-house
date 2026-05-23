// Brand Data for GA Guest House

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export const brandData = {
  // 1. BRAND IDENTITY
  brandName: "GA Guest House",
  logo: "GA",
  colors: {
    primary: "#1B4332",
    secondary: "#F4F6F0",
    accent: "#D4AF37",
    button: "#1B4332"
  },

  // 2. HERO SECTION
  hero: {
    heading: "Your Perfect Home Away From Home in Ibadan",
    description: "Experience the ideal blend of residential privacy, comfort, and top-tier hospitality. A modern, fully equipped 3-bedroom sanctuary situated in a peaceful gated community along Olodo Road.",
    ctaPrimary: "Book Your Stay",
    ctaSecondary: "Explore Amenities"
  },

  // 3. ABOUT US
  about: {
    shortDescription: "GA Guest House is a newly renovated, premium residential lodge in Ibadan, designed specifically for families, travel groups, and corporate professionals seeking space, privacy, and modern comfort.",
    mission: "To provide a secure, serene, and fully self-sufficient living environment that mirrors the warmth and utility of a personal home.",
    values: ["Secure Privacy", "Homely Comfort", "Reliable Utilities", "Exceptional Service"],
    whyUs: "Unlike restrictive hotel rooms, we offer an entire, spacious 3-bedroom gated compound with a fully functional kitchen, 24/7 power, and dedicated local shuttle transit support."
  },

  // 4. SERVICES (5 items)
  services: [
    {
      id: 1,
      title: "Full House Group Booking",
      icon: "fa-house-user",
      desc: "Reserve the entire 3-bedroom, 3-bathroom residential layout for complete privacy and maximum comfort."
    },
    {
      id: 2,
      title: "Self-Catering Kitchen",
      icon: "fa-utensils",
      desc: "Cook your own meals using a fully equipped kitchen complete with a refrigerator, microwave, and essential cookware."
    },
    {
      id: 3,
      title: "Airport & Local Shuttles",
      icon: "fa-car",
      desc: "Seamless, paid pickup and drop-off transport services directly to and from Ibadan Airport and local destinations."
    },
    {
      id: 4,
      title: "Uninterrupted Utilities",
      icon: "fa-bolt",
      desc: "Enjoy peace of mind with 24/7 stable electricity, constant clean running water, and dedicated on-site security."
    },
    {
      id: 5,
      title: "Complimentary High-Speed Wi-Fi",
      icon: "fa-wifi",
      desc: "Stay productive and connected throughout the entire property with fast, reliable internet access."
    }
  ],

  // 5. APARTMENT LISTINGS (4 items)
  listings: [
    {
      id: 1,
      name: "Single Room with private bathroom",
      type: "Standard Single Room",
      price: "₦10,000 / night",
      features: ["1 Private Bathrooms", "Free Wi-Fi", "24/7 Power Supply"],
      image: img1,
      popular: true
    },
    {
      id: 2,
      name: "Two queen beds, private bathroom",
      type: "Family Room",
      price: "₦25,000 / night",
      features: ["King & Queen Bed", "Private Terrace", "Walk-in Shower", "Free Wi-Fi", "24/7 Power Supply"],
      image: img2,
      popular: false
    },
    {
      id: 3,
      name: "One queen bed, private bathroom",
      type: "Guest Room",
      price: "₦15,000 / night",
      features: ["Queen Bed", "Flat-Screen TV", "Free Wi-Fi", "24/7 Power Supply", "Cooling Fan"],
      image: img3,
      popular: false
    },
    {
      id: 4,
      name: " Two queen beds, private bathroom",
      type: "Family Room",
      price: "₦25,000 / night",
      features: ["Tiled Floors", "Shared Lounge Access", "Free Wi-Fi", "24/7 Power Supply", "Work Desk Area"],
      image: img4,
      popular: false
    }
  ],

  // 6. TESTIMONIALS (4 items)
  testimonials: [
    {
      id: 1,
      name: "Oluwaseun A.",
      initials: "OA",
      role: "Family Traveler",
      text: "Booking the entire villa for my family trip was the best decision. Having a functional kitchen saved us so much hassle, and the compound is incredibly secure.",
      rating: 5
    },
    {
      id: 2,
      name: "Chidi Nnamdi",
      initials: "CN",
      role: "Business Consultant",
      text: "The Wi-Fi was strong enough for all my remote video meetings, and the airport shuttle service was highly punctual. Definitely my new spot when visiting Ibadan.",
      rating: 5
    },
    {
      id: 3,
      name: "Abiodun Samuel",
      initials: "AS",
      role: "Weekend Guest",
      text: "Clean rooms, quiet environment, and constant light. The staff on-site respect your privacy while ensuring everything works flawlessly.",
      rating: 5
    },
    {
      id: 4,
      name: "Blessing I.",
      initials: "BI",
      role: "Holiday Maker",
      text: "Very peaceful neighborhood off Olodo Road. It truly felt like a home away from home, and the price is unbeatable for the space you get.",
      rating: 5
    }
  ],

  // 7. CONTACT & FOOTER
  contact: {
    phone: "+234 810 724 1441",
    email: "gaguesthouseibadan@gmail.com",
    address: "Zone 2 Oganla Street, Olodo Road, Ibadan 200111, Oyo State, Nigeria",
    whatsappLink: "https://wa.me/2348107241441",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    footerDescription: "GA Guest House: Delivering comfortable, private, and secure residential short-term stays in the heart of Ibadan."
  }
};
