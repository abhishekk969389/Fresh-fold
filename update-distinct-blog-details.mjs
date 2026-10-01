import fs from 'fs';

const dataPath = 'app/data/data.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const blogContents = {
  b1: {
    content1: [
      "Keeping clothes fresh doesn't just mean washing them often; it involves proper care, storage, and handling. The first rule is to always read the care labels. These tiny tags hold the secrets to prolonging the life of your favorite garments.",
      "Another major factor is avoiding overloading your washing machine. When clothes are packed too tightly, water and detergent can't circulate properly, leaving residue that can cause odors over time."
    ],
    expertise: {
      title: "The Science of Freshness",
      content: [
        "Different fabrics require different approaches. Cotton is breathable and easy to wash, but synthetic fabrics can trap odors and require specialized detergents.",
        "Using natural deodorizers like baking soda or white vinegar during the rinse cycle can work wonders for neutralizing stubborn smells without relying on harsh chemicals."
      ],
      images: [
        { src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600", alt: "Washing machine" },
        { src: "https://images.unsplash.com/photo-1626806787426-5910811b6325?auto=format&fit=crop&q=80&w=600", alt: "Clean clothes" }
      ]
    },
    tips: {
      title: "Top 5 Tips for Lasting Freshness",
      description: "Follow these simple steps to ensure your wardrobe stays smelling great all year round:",
      list: [
        "Store clothes in a dry, well-ventilated area.",
        "Use cedar blocks or lavender sachets in your closet.",
        "Don't leave damp clothes in the hamper for too long.",
        "Wash with cold water to preserve fabric integrity.",
        "Air dry outside when possible to naturally disinfect."
      ]
    },
    why: {
      title: "Why Routine Matters",
      content: [
        "Establishing a good laundry routine saves time, money, and stress. By consistently applying these practices, you'll reduce wear and tear on your garments and enjoy that fresh-out-of-the-dryer scent every time you get dressed."
      ]
    }
  },
  b2: {
    content1: [
      "Choosing the right wash cycle is crucial for maintaining the quality and longevity of your clothes. With so many settings on modern washing machines, it can be overwhelming to know which one to pick.",
      "The 'Normal' cycle is great for heavily soiled cottons and linens, but it uses fast agitation and fast spinning, which can be too rough for delicate items."
    ],
    expertise: {
      title: "Understanding Fabric Types",
      content: [
        "Delicates like silk, lace, and thin knits require the 'Delicate' or 'Gentle' cycle. This cycle uses slow agitation and a slow spin to prevent stretching and tearing.",
        "For items like jeans and towels, the 'Heavy Duty' cycle provides the vigorous cleaning needed to remove tough dirt and grime."
      ],
      images: [
        { src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600", alt: "Folded fabrics" },
        { src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=600", alt: "Laundry detergent" }
      ]
    },
    tips: {
      title: "Quick Guide to Wash Cycles",
      description: "Here is a quick cheat sheet for matching fabrics to the right cycle:",
      list: [
        "Normal/Regular: Cottons, linens, everyday wear.",
        "Permanent Press: Synthetics, blends, wrinkle-prone clothes.",
        "Delicate/Gentle: Lingerie, silk, wool, sheer fabrics.",
        "Heavy Duty: Towels, jeans, heavily soiled work clothes.",
        "Quick Wash: Lightly soiled items you need in a hurry."
      ]
    },
    why: {
      title: "The Cost of the Wrong Cycle",
      content: [
        "Using the wrong cycle can lead to faded colors, shrunken sweaters, and pilling. Taking an extra moment to sort your laundry and select the correct setting is an investment in your wardrobe's future."
      ]
    }
  },
  b3: {
    content1: [
      "Daily laundry habits play a surprisingly large role in maintaining a clean and healthy home environment. We often don't think about laundry until the hamper is overflowing, but small daily actions make a big difference.",
      "Leaving wet towels on the floor or tossing sweaty gym clothes into a dark hamper creates the perfect breeding ground for mold and mildew."
    ],
    expertise: {
      title: "Hygiene and Health",
      content: [
        "Bed sheets and pillowcases accumulate sweat, dead skin cells, and dust mites over time. Washing them weekly in hot water is essential for allergy sufferers and overall skin health.",
        "Similarly, kitchen towels should be washed frequently as they can harbor dangerous food-borne bacteria if left damp."
      ],
      images: [
        { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600", alt: "Clean towels" },
        { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600", alt: "Fresh bedroom" }
      ]
    },
    tips: {
      title: "Healthy Laundry Habits",
      description: "Incorporate these habits into your daily routine for a healthier home:",
      list: [
        "Hang up wet towels immediately after use.",
        "Let sweaty workout clothes dry before putting them in the hamper.",
        "Wash bedding weekly in hot water (at least 130°F / 54°C).",
        "Clean your washing machine regularly to prevent mold buildup.",
        "Don't let clean clothes sit in the basket; fold them right away."
      ]
    },
    why: {
      title: "A Cleaner Lifestyle",
      content: [
        "By staying on top of your laundry with good daily habits, you not only ensure your clothes are clean, but you also contribute to a fresher, more organized, and healthier living space for you and your family."
      ]
    }
  }
};

data.blog.posts.forEach(post => {
  // Use the base ID (e.g., "b1" for "b1_copy")
  const baseId = post.id.replace('_copy', '');
  const specificContent = blogContents[baseId];
  
  if (specificContent) {
    data.blogDetails[post.id] = {
      ...data.blogDetails[post.id],
      author: post.author.name,
      commentsCount: Math.floor(Math.random() * 10) + 1 + " Comments",
      content1: specificContent.content1,
      expertise: specificContent.expertise,
      tips: specificContent.tips,
      why: specificContent.why
    };
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Distinct blog details successfully updated.');
