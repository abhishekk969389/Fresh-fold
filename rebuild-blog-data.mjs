import fs from 'fs';

const dataPath = 'app/data/data.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const categories = [
  "House Cleaning", "Office Cleaning", "Commercial Cleaning", "Residential Cleaning",
  "Window Cleaning", "Carpet Cleaning", "Floor Cleaning", "Car Cleaning"
];

// Images corresponding to the categories
const images = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600", // House
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", // Office
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600", // Commercial
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600", // Residential
  "https://images.unsplash.com/photo-1528150244670-388a183577d3?auto=format&fit=crop&q=80&w=600", // Window
  "https://images.unsplash.com/photo-1558384462-8e3b3334208a?auto=format&fit=crop&q=80&w=600", // Carpet
  "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600", // Floor
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600"  // Car
];

const titles = [
  "Top House Cleaning Tips for a Spotless Home",
  "Why Regular Office Cleaning Boosts Productivity",
  "The Benefits of Hiring Commercial Cleaners",
  "A Complete Guide to Deep Residential Cleaning",
  "Streak-Free Window Cleaning Techniques",
  "How to Keep Your Carpets Looking Brand New",
  "Ultimate Floor Cleaning Strategies for Every Surface",
  "Professional Car Cleaning Hacks You Should Know"
];

// Rebuild Posts Array
data.blog.posts = categories.map((cat, i) => {
  const id = `cat-${cat.toLowerCase().replace(' ', '-')}`;
  return {
    id,
    image: images[i],
    date: { day: `${10 + i}`, month: "SEP", year: "2026" },
    category: cat,
    title: titles[i],
    description: `Discover everything you need to know about ${cat.toLowerCase()} in this comprehensive guide. We share our expert tips and tricks.`,
    author: {
      name: i % 2 === 0 ? "Admin" : "Sarah Smith",
      avatar: i % 2 === 0 
        ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
        : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    readTime: "5 Min Read"
  };
});

// Rebuild BlogDetails
data.blogDetails = {};

data.blog.posts.forEach((post, i) => {
  data.blogDetails[post.id] = {
    id: post.id,
    author: post.author.name,
    commentsCount: `${Math.floor(Math.random() * 10) + 1} Comments`,
    content1: [
      `Welcome to our definitive guide on ${post.category.toLowerCase()}. Whether you are a professional or just looking to improve your space, these insights will help you achieve the best results.`,
      `Over the years, we've gathered the most effective strategies and tools to make ${post.category.toLowerCase()} efficient and hassle-free. Let's dive into the details.`
    ],
    expertise: {
      title: `Expertise in ${post.category}`,
      content: [
        `Our team has spent countless hours perfecting the art of ${post.category.toLowerCase()}. Using the right equipment and environmentally friendly products is the key to our success.`,
        `We believe that a clean environment contributes significantly to overall well-being and productivity. That's why we take our methods so seriously.`
      ],
      images: [
        images[(i + 1) % images.length],
        images[(i + 2) % images.length]
      ]
    },
    tips: {
      title: `Top Tips For ${post.category}`,
      description: `Follow these essential tips to master ${post.category.toLowerCase()}:`,
      list: [
        "Always start from top to bottom.",
        "Use microfiber cloths for dusting and wiping.",
        "Don't mix chemical cleaning products.",
        "Let your products sit for a few minutes before wiping.",
        "Maintain a regular schedule to prevent buildup."
      ]
    },
    why: {
      title: `Why ${post.category} Matters`,
      content: [
        `Ignoring ${post.category.toLowerCase()} can lead to a buildup of dirt, allergens, and bacteria. Maintaining cleanliness is crucial for health and safety.`,
        `By investing time or resources into proper ${post.category.toLowerCase()}, you ensure a pristine environment that welcomes guests and protects your health.`
      ]
    },
    subbanner: {
      title: "Blogs Details",
      bgImage: "/subbanner.png",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Our Blogs", href: "/blog" },
        { label: "Blogs Details", href: `/blogdetails/${post.id}` }
      ]
    }
  };
});

// Make categories exact match in Sidebar Component by updating index.ts or data
// Wait, the sidebar uses `blogData.categories`.
data.blog.categories = categories;

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully rebuilt blog posts and details!');
