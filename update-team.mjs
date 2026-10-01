import fs from 'fs';

const dataPath = 'app/data/data.json';
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const members = data.team.members;
const teamDetailsMap = {};

members.forEach(m => {
  const slug = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const firstName = m.name.split(' ')[0];
  
  teamDetailsMap[slug] = {
    subheading: "TEAM MEMBER",
    titleLine1: "Meet Our",
    titleLine2: "Team Member",
    description: "Passionate people. Professional service. Cleaner tomorrow.",
    member: {
      image: {
        src: m.image.src,
        alt: m.name
      },
      imageQuote: "Clean clothes create a brighter, more confident you.",
      name: m.name,
      role: m.role,
      bio: `${m.name} is our dedicated ${m.role} at FreshFold, ensuring smooth service delivery, high quality standards and complete customer satisfaction. With a strong passion for excellence, ${firstName} makes sure every garment is handled with care and delivered on time.`,
      stats: [
        { label: "Experience", value: "5+ Years" },
        { label: "Location", value: "Noida, India" },
        { label: "Email", value: `${firstName.toLowerCase()}@freshfold.com` }
      ],
      skills: [
        { name: "Service Excellence", percentage: 95 },
        { name: "Team Leadership", percentage: 90 },
        { name: "Customer Support", percentage: 85 },
        { name: "Process Improvement", percentage: 80 }
      ],
      about: {
        title: `About ${firstName}`,
        paragraphs: [
          `${firstName} brings years of experience in fabric care and customer service to FreshFold. With a firm belief in maintaining high standards, ${firstName} continuously works to improve our processes to give customers the best laundry experience.`,
          `Their dedication, problem-solving mindset and people-first approach play a key role in our success. ${firstName} ensures that every service runs efficiently so our customers can enjoy fresh, clean and perfectly cared-for clothes.`
        ]
      },
      message: {
        title: `${firstName}'s Message`,
        quote: "At FreshFold, our goal is simple - to make your life easier with reliable, high-quality laundry and dry cleaning services. We are committed to delivering freshness, care and convenience in every order.",
        name: m.name,
        role: m.role
      },
      experience: {
        title: "Work Experience",
        items: [
          {
            period: "2022 - Present",
            role: m.role,
            company: "FreshFold Laundry & Dry Cleaning",
            description: "Managing daily operations, leading the team and ensuring customer satisfaction."
          },
          {
            period: "2019 - 2022",
            role: `Assistant ${m.role}`,
            company: "CleanPro Services",
            description: "Supported operations, improved workflow and handled customer queries."
          },
          {
            period: "2017 - 2019",
            role: "Service Supervisor",
            company: "QuickWash Laundry",
            description: "Supervised service quality and coordinated with the team."
          },
          {
            period: "2015 - 2017",
            role: "Support Executive",
            company: "BrightClean Solutions",
            description: "Handled enquiries and ensured smooth service experience."
          }
        ],
        image: {
          src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
          alt: "Washing machine"
        },
        imageOverlayText: "People Behind a Cleaner Tomorrow"
      }
    }
  };
});

data.teamDetails = teamDetailsMap;

// Write back WITHOUT BOM
const output = JSON.stringify(data, null, 2);
fs.writeFileSync(dataPath, output, 'utf8');

console.log('Updated data.json successfully.');
