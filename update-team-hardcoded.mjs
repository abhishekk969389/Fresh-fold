import fs from 'fs';

const dataPath = 'app/data/data.json';
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const members = Object.keys(data.teamDetails);

members.forEach(slug => {
  const m = data.teamDetails[slug].member;
  
  // Add skillsTitle
  m.skillsTitle = "Core Skills";
  
  // Add about.image
  m.about.image = {
    src: "/teamdetail1.png",
    alt: "Towels decoration"
  };
  
  // Update experience image and text (to allow HTML/breaks if they want, but let's keep it simple)
  m.experience.image = {
    src: "/teamdet.png",
    alt: "Washing machine and towels"
  };
  m.experience.imageOverlayText = "People<br/>Behind<br/>a Cleaner<br/>Tomorrow";
});

// Write back WITHOUT BOM
const output = JSON.stringify(data, null, 2);
fs.writeFileSync(dataPath, output, 'utf8');

console.log('Updated data.json successfully.');
