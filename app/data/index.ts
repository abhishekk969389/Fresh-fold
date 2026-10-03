// ─── Navbar Types ──────────────────────────────────────────────────────────────

export interface NavbarLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TopBarInfoItem {
  id: string;
  /** Name of the react-icons icon component (e.g. "FiClock") */
  icon: string;
  primary: string;
  secondary: string;
}

export interface SocialLink {
  id: string;
  /** Name of the react-icons icon component (e.g. "FaFacebookF") */
  icon: string;
  href: string;
  label: string;
}

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdown?: DropdownItem[];
}

export interface NavbarCta {
  label: string;
  href: string;
  /** Name of the react-icons icon component (e.g. "BsCalendarCheck") */
  icon: string;
}

export interface TopBar {
  info: TopBarInfoItem[];
  socials: SocialLink[];
}

export interface NavbarData {
  logo: NavbarLogo;
  topBar: TopBar;
  navLinks: NavLink[];
  cta: NavbarCta;
}

// ─── Banner Types ──────────────────────────────────────────────────────────────

export interface BannerIconItem {
  id: string;
  /** Name of the react-icons icon component (e.g. "LuLeaf") */
  icon: string;
  label: string;
}

export interface BannerLink {
  label: string;
  href: string;
  videoUrl?: string;
}

export interface BannerData {
  image: { src: string; alt: string };
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: BannerIconItem[];
  primaryCta: BannerLink;
  secondaryCta: BannerLink;
  highlights: BannerIconItem[];
  tagText: string;
  bottomFeatures: BannerIconItem[];
  tagline: string;
}

export interface AppData {
  navbar: NavbarData;
  banner: BannerData;
  footer: FooterData;
  about: AboutData;
  services: ServicesData;
  works: WorksData;
  whyChoose: WhyChooseData;
  testimonial: TestimonialData;
  counting: CountingData;
  blog: BlogData;
  cta: CtaData;
  missionVision: MissionVisionData;
  teamDetails: Record<string, TeamDetailsData>;
  subbanners: Record<string, SubbannerData>;
  sitemap: SitemapData;
  blogDetails: Record<string, BlogDetailsData>;
  serviceDetails: Record<string, ServiceDetailsData>;
}

// ─── Team Details Types ────────────────────────────────────────────────────────

export interface TeamMemberSkill {
  name: string;
  percentage: number;
}

export interface TeamMemberStat {
  label: string;
  value: string;
}

export interface TeamMemberExperience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface TeamDetailsData {
  subheading: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  member: {
    image: { src: string; alt: string };
    imageQuote: string;
    name: string;
    role: string;
    bio: string;
    stats: TeamMemberStat[];
    skillsTitle?: string;
    skills: TeamMemberSkill[];
    about: {
      title: string;
      paragraphs: string[];
      image?: { src: string; alt: string };
    };
    message: {
      title: string;
      quote: string;
      name: string;
      role: string;
    };
    experience: {
      title: string;
      items: TeamMemberExperience[];
      image: { src: string; alt: string };
      imageOverlayText: string;
    };
  };
}

// ─── Footer Types ──────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactItem {
  id: string;
  icon: string;
  lines: string[];
}

export interface FooterData {
  logo: { src: string; alt: string; width: number; height: number };
  description: string;
  socials: SocialLink[];
  quickLinks: FooterLink[];
  ourServices: FooterLink[];
  helpSupport: FooterLink[];
  contactInfo: FooterContactItem[];
  bottomText: string;
  bottomLinks: FooterLink[];
  sideImage: { src: string; alt: string; width: number; height: number };
}

// ─── About Types ───────────────────────────────────────────────────────────────

export interface AboutData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description1: string;
  description2: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  images: {
    main: { src: string; alt: string };
    small: { src: string; alt: string };
  };
  satisfactionRate: string;
  satisfactionText: string;
  stickerText: string[];
  videoUrl?: string;
}

// ─── Services Types ────────────────────────────────────────────────────────────

export interface ServicesTab {
  id: string;
  icon: string;
  label: string;
}

export interface ServicesFeature {
  icon: string;
  labelLine1: string;
  labelLine2: string;
}

export interface ServicesData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  tabs: ServicesTab[];
  activeService: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    features: ServicesFeature[];
    ctaText: string;
    ctaLink: string;
    image: {
      src: string;
      alt: string;
    };
    stickerText: string[];
    qualityBadge: {
      icon: string;
      textLine1: string;
      textLine2: string;
    };
  };
}

// ─── Works Types ───────────────────────────────────────────────────────────────

export interface WorksStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  paragraph?: string;
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
  };
  badge?: {
    icon: string;
    textLine1: string;
    textLine2?: string;
  };
}

export interface WorksData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  leftSticker: string[];
  rightSticker: string[];
  steps: WorksStep[];
}

// ─── Why Choose Us Types ───────────────────────────────────────────────────────

export interface WhyChooseFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleLine4: string;
  subtitle: string;
  featuresLeft: WhyChooseFeature[];
  featuresRight: WhyChooseFeature[];
  centerImage: {
    src: string;
    alt: string;
    stickerText: string[];
    badge: {
      icon: string;
      line1: string;
      line2: string;
    };
  };
}

// ─── Testimonial Types ─────────────────────────────────────────────────────────

export interface TestimonialReview {
  id: string;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

export interface TestimonialData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  leftSection: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    avatars: string[];
    happyCustomersText: string;
    happyCustomersCount: string;
  };
  reviews: TestimonialReview[];
}

// ─── Counting Types ────────────────────────────────────────────────────────────

export interface CountingStat {
  id: string;
  icon: string;
  number: string;
  label: string;
}

export interface CountingData {
  videoImage: string;
  videoUrl?: string;
  stats: CountingStat[];
}


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

// ─── Blog Types ────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  image: string;
  date: { day: string; month: string; year: string };
  category: string;
  title: string;
  description: string;
  author: { name: string; avatar: string };
  readTime: string;
}

export interface BlogData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  categories: string[];
  posts: BlogPost[];
}

export interface BlogDetailsData {
  id: string;
  subbanner: SubbannerData;
  author: string;
  commentsCount: string;
  content1: string[];
  expertise: {
    title: string;
    content: string[];
    images: { src: string; alt: string }[];
  };
  tips: {
    title: string;
    description: string;
    list: string[];
  };
  why: {
    title: string;
    content: string[];
  };
}

// ─── CTA Types ─────────────────────────────────────────────────────────────────

export interface CtaData {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: string;
  mainIcon: string;
}

// ─── Subbanner Types ───────────────────────────────────────────────────────────

export interface SubbannerData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  bgImage: string;
}

// ─── Mission & Vision Types ────────────────────────────────────────────────────

export interface MissionFeature {
  id: string;
  icon: string;
  label: string;
}

export interface MissionSection {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: MissionFeature[];
  image: {
    src: string;
    alt: string;
    stickerText?: string[];
    badge?: {
      icon?: string;
      line1: string;
      line2: string;
    };
  };
}

export interface MissionVisionData {
  mission: MissionSection;
  vision: MissionSection;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface TeamData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  members: TeamMember[];
}

// ─── Exports ───────────────────────────────────────────────────────────────────


import rawData from "./data.json";

// ─── Service Item Interfaces ──────────────────────────────────────────────────

export interface ServiceFeature {
  id: string;
  icon: string;
  titleLine1: string;
  titleLine2: string;
}

export interface ServiceBadge {
  icon: string;
  line1: string;
  line2: string;
}

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  imagePosition: "left" | "right";
  image: ServiceImage;
  badge: ServiceBadge;
  features: ServiceFeature[];
  ctaText: string;
  ctaLink: string;
}

export interface ServicesSectionData {
  services: ServiceItem[];
}


export interface AppData {
  servicesSection: ServicesSectionData;
  blogDetails: Record<string, BlogDetailsData>;
}


export interface TabCategory {
  id: string;
  name: string;
  icon: string;
}

export interface HighlightFeature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface PriceItem {
  id: string;
  item: string;
  regularPrice: number;
  premiumPrice: number;
  notes: string;
}

export interface PricingData {
  categories: TabCategory[];
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  badge: {
    icon: string;
    line1: string;
    line2: string;
  };
  features: HighlightFeature[];
  pricingTable: PriceItem[];
}

export interface AppPricingData {
  pricingSection: PricingData;
}


export interface StepBadge {
  icon: string;
  title: string;
  subtitle?: string;
}

export interface StepImage {
  src: string;
  alt: string;
  badge?: StepBadge;
}

export interface TestimonialUser {
  name: string;
  location: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export interface TestimonialItem {
  id: string;
  quoteIcon: string;
  rating: number;
  ratingIcon: string;
  locationIcon: string;
  comment: string;
  user: TestimonialUser;
  theme: "light" | "dark";
}

export interface TestimonialsSectionData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface AppTestimonialsData {
  testimonialsSection: TestimonialsSectionData;
}


export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  required: boolean;
  icon?: string;
  options?: FormFieldOption[];
  colSpan?: 1 | 2;
}

export interface FeaturePoint {
  id: string;
  icon: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface HelpSection {
  icon: string;
  title: string;
  subtitle: string;
  contacts: ContactInfoItem[];
}

export interface BookingSectionData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  descriptionLine1: string;
  descriptionLine2: string;
  formCard: {
    headerIcon: string;
    headerTitle: string;
    headerSubtitle: string;
    fields: FormField[];
    termsText: string;
    termsLinkText: string;
    termsLinkHref: string;
    submitButton: {
      text: string;
      icon: string;
    };
  };
  banner: {
    image: {
      src: string;
      alt: string;
    };
    floatingSloganLine1: string;
    floatingSloganLine2: string;
    floatingSloganLine3: string;
    features: FeaturePoint[];
  };
  helpSection: HelpSection;
}

export interface AppBookingData {
  bookingSection: BookingSectionData;
}

export interface RecognitionImage {
  src: string;
  alt: string;
}

export interface RecognitionCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: RecognitionImage;
}

export interface RecognitionGroup {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  items: RecognitionCardItem[];
}

export interface AppCertificationsData {
  certificationsSection: RecognitionGroup;
}

export interface AppAwardsData {
  awardsSection: RecognitionGroup;
}


export interface GalleryMediaItem {
  id: string;
  type: "photo" | "video";
  categoryId: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  videoUrl?: string;
  duration?: string;
}

export interface GalleryCategoryTab {
  id: string;
  name: string;
}

export interface GalleryMediaTypeTab {
  id: "photo" | "video";
  label: string;
  count: number;
  icon: string;
}

export interface GallerySectionData {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  mediaTypeTabs: GalleryMediaTypeTab[];
  categories: GalleryCategoryTab[];
  items: GalleryMediaItem[];
}

export interface AppGalleryData {
  gallerySection: GallerySectionData;
}

export interface FaqHighlightBadge {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionData {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  badges: FaqHighlightBadge[];
  leftColumnFaqs: FaqItem[];
  rightColumnFaqs: FaqItem[];
}

export interface AppFaqData {
  faqSection: FaqSectionData;
}

export interface ContactSocialLink {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export interface FormFieldItem {
  id: string;
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  icon: string;
  options?: string[];
}

export interface ContactDetailItem {
  id: string;
  icon: string;
  title: string;
  line1: string;
  line2: string;
}

export interface MapCardInfo {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ContactSectionData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  sloganLine1: string;
  sloganLine2: string;
  socials: ContactSocialLink[];
  form: {
    titlePrefix: string;
    titleHighlight: string;
    badgeText: string;
    description: string;
    fields: FormFieldItem[];
    submitButtonText: string;
    securityText: string;
    securityIcon: string;
  };
  contactDetails: ContactDetailItem[];
  mapCard: MapCardInfo;
}

export interface AppContactData {
  contactSection: ContactSectionData;
}

export interface PolicySectionItem {
  id: string;
  orderNumber: number;
  title: string;
  content: string;
}

export interface PolicyDocument {
  id: string;
  pageTitle: string;
  lastUpdated: string;
  contactNote: string;
  contactLinkText: string;
  contactLinkHref: string;
  sections: PolicySectionItem[];
}

export interface LegalPoliciesData {
  privacyPolicy: PolicyDocument;
  refundPolicy: PolicyDocument;
  termsAndConditions: PolicyDocument;
}

export interface AppLegalData {
  legalPolicies: LegalPoliciesData;
}

export const data: AppData = rawData as AppData;

// ─── Sitemap Types ─────────────────────────────────────────────────────────────

export interface SitemapLink {
  label: string;
  href: string;
}

export interface SitemapSection {
  id: string;
  icon: string;
  title: string;
  theme: "blue" | "teal" | "yellow" | "red" | "purple" | "green" | "gray" | "slate" | string;
  links: SitemapLink[];
}

export interface SitemapPromoCard {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface SitemapHeader {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  subtitle: string;
}

export interface SitemapData {
  header: SitemapHeader;
  sections: SitemapSection[];
  promoCard: SitemapPromoCard;
}

export const sitemapData: SitemapData = data.sitemap;
