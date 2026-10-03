const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// We have teams images: /teams/team1.jpg to /teams/team8.jpg
let teamIndex = 1;
function getTeamImage() {
  const img = `/teams/team${teamIndex}.jpg`;
  teamIndex = (teamIndex % 8) + 1;
  return img;
}

// We have award/certificate images: /award/awd1.png..awd3.png, /certificate/c1.png..c4.png
let awardIndex = 1;
function getAwardImage() {
  const img = `/award/awd${awardIndex}.png`;
  awardIndex = (awardIndex % 3) + 1;
  return img;
}

let certIndex = 1;
function getCertImage() {
  const img = `/certificate/c${certIndex}.png`;
  certIndex = (certIndex % 4) + 1;
  return img;
}

// General images
const generalImages = [
  '/freshly-washed-towels-stacked-wooden-floor.jpg',
  '/housewife-woman-holds-stack-clean-colored-clothes-hands-after-washing-drying.jpg',
  '/laundromat-worker.jpg',
  '/laundry-basket-washing-machine-blurred-background-with-space-text-placement.jpg',
  '/laundry-basket-with-colorful-towels-background.jpg',
  '/man-is-organizing-cleaning-house-stack-clean-terry-towels-hand-concept.jpg',
  '/no-stains-are-safe-shot-beautiful-young-woman-doing-laundry-home.jpg',
  '/person-inside-laundromat-with-washing-machines.jpg',
  '/stack-colorful-folded-clothes-blue-background-cozy-vibrant-knitwear-fabrics.jpg',
  '/stack-laundry-are-stacked-top-each-other-laundry-room.jpg',
  '/towels-neatly-stacked-stylish-organized-laundry-room-maximum-efficiency-aesthetics.jpg',
  '/wicker-laundry-basket-overflowing-with-colorful-clothes-sits-wooden-table-outside-sunny-day.jpg',
  '/young-latin-woman-holding-laundry-basket-screaming-proud-celebrating-victory-success-very-excited-with-raised-arms.jpg'
];
let genIndex = 0;
function getGeneralImage() {
  const img = generalImages[genIndex];
  genIndex = (genIndex + 1) % generalImages.length;
  return img;
}

function traverse(obj, pathKey = '') {
  if (typeof obj === 'string') {
    if (obj.startsWith('http://') || obj.startsWith('https://')) {
      // Determine which image to use based on pathKey or context
      if (pathKey.includes('team') || pathKey.includes('author') || pathKey.includes('avatar') || pathKey.includes('testimonial')) {
        return getTeamImage();
      } else if (pathKey.includes('award')) {
        return getAwardImage();
      } else if (pathKey.includes('certificate')) {
        return getCertImage();
      } else {
        return getGeneralImage();
      }
    }
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((item, idx) => traverse(item, `${pathKey}[${idx}]`));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (let k in obj) {
      newObj[k] = traverse(obj[k], `${pathKey}.${k}`);
    }
    return newObj;
  }
  return obj;
}

data = traverse(data, 'root');

// Make sure to write it nicely formatted
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully replaced all external links with local ones.');
