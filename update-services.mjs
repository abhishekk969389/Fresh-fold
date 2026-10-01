import fs from 'fs';

const dataPath = 'app/data/data.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// The 8 services currently in data.services.tabs
const servicesTabs = data.services.tabs; 

data.serviceDetails = {};

const serviceImages = [
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800", // laundry
  "https://images.unsplash.com/photo-1520696954213-90d6e61f28b7?auto=format&fit=crop&q=80&w=800", // dry cleaning
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", // steam ironing
  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800", // shoes
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", // curtain
  "https://images.unsplash.com/photo-1558384462-8e3b3334208a?auto=format&fit=crop&q=80&w=800", // carpet
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", // bag
  "https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&q=80&w=800"  // special care
];

servicesTabs.forEach((tab, i) => {
  data.serviceDetails[tab.id] = {
    id: tab.id,
    tag: tab.label.toUpperCase() + " SERVICE",
    title: "Fresh Clothes, A Brighter You",
    description: "Our " + tab.label.toLowerCase() + " service is designed to give your everyday items the care they deserve. We use premium products and advanced techniques to remove dirt, stains, and odours, keeping them fresh and long-lasting.",
    image: {
      src: serviceImages[i],
      alt: tab.label + " Main Image"
    },
    badge: {
      icon: "GiPoloShirt",
      textLine1: "Quality Cleaning",
      textLine2: "For A Better Tomorrow"
    },
    features: [
      {
        icon: "FaLeaf",
        label: "Eco-Friendly",
        subLabel: "Products"
      },
      {
        icon: "FaShieldAlt",
        label: "Safe for",
        subLabel: "All Fabrics"
      },
      {
        icon: "FaMagic",
        label: "Stain Removal",
        subLabel: "Expertise"
      },
      {
        icon: "FaClock",
        label: "On-Time",
        subLabel: "Delivery"
      }
    ],
    about: {
      title: tab.label + " Delivered to Your Home",
      description: "Get the very best in " + tab.label.toLowerCase() + " from the experts. We offer one-day or same-day service with a 100% satisfaction guarantee to customers, combining the excellence of premium care with ultimate convenience.",
      list: [
        "Salons & Spas",
        "Restaurants and Caterers",
        "Religious Organizations",
        "Daycare centers",
        "Assisted Living / Nursing Homes",
        "Hotels & Motels",
        "Nail Salons",
        "Athletic Facilities / Gyms"
      ],
      circularText: "More Time For What You Love",
      circularIcon: "MdLocalLaundryService"
    },
    subbanner: {
      title: "Service Details",
      bgImage: "/subbanner.png",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Service Details", href: "/servicedetails/" + tab.id }
      ]
    }
  };
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully created serviceDetails in data.json');
