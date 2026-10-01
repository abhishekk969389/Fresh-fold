import fs from 'fs';

let content = fs.readFileSync('app/data/index.ts', 'utf8');

if (!content.includes('serviceDetails: Record<string, ServiceDetailsData>')) {
  content = content.replace(
    'sitemap: SitemapData;',
    'sitemap: SitemapData;\n  blogDetails: Record<string, BlogDetailsData>;\n  serviceDetails: Record<string, ServiceDetailsData>;'
  );
}

const serviceDetailsType = `
export interface ServiceDetailsData {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  badge: {
    icon: string;
    textLine1: string;
    textLine2: string;
  };
  features: {
    icon: string;
    label: string;
    subLabel: string;
  }[];
  about: {
    title: string;
    description: string;
    list: string[];
    circularText: string;
    circularIcon: string;
  };
  subbanner: {
    title: string;
    bgImage: string;
    breadcrumbs: { label: string; href: string }[];
  };
}
`;

if (!content.includes('export interface ServiceDetailsData')) {
  content = content.replace(
    '// ─── Blog Types ───────────────────────────────────────────────────────────────',
    serviceDetailsType + '\n// ─── Blog Types ───────────────────────────────────────────────────────────────'
  );
}

fs.writeFileSync('app/data/index.ts', content, 'utf8');
console.log('Updated index.ts types!');
