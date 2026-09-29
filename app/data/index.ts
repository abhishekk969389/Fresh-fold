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

export interface AppData {
  navbar: NavbarData;
}

// ─── Exports ───────────────────────────────────────────────────────────────────

export { default as data } from "./data.json";
