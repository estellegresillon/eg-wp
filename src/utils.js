import StripeMenu from "components/StripeMenu";
import PricingComparator from "components/PricingComparator";
import GamePadWrapper from "components/GamePad";
import CreditCardForm from "components/CreditCardForm";
import WavesCanvas from "components/WavesCanvas";

export const PAGES = [
  {
    name: "Website",
    url: "https://www.estellegresillon.fr",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/estellegresillon/",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/estellegresillon",
  },
  {
    name: "GitHub",
    url: "ttps://github.com/estellegresillon",
  },
];

export const SOCIAL_LINKS = [
  {
    url: "https://www.estellegresillon.fr",
    icon: "fas fa-globe-europe",
  },
  {
    url: "https://www.linkedin.com/in/estellegresillon/",
    icon: "fab fa-linkedin",
  },
  {
    url: "https://dribbble.com/estellegresillon",
    icon: "fab fa-dribbble",
  },
  {
    url: "https://github.com/estellegresillon",
    icon: "fab fa-github-alt",
  },
  {
    url: "mailto:estelle.gresillon@gmail.com",
    icon: "far fa-paper-plane",
  },
];

export const WEBSITES = [
  {
    name: "Foodlab",
    subtitle: "School Project",
    link: "https://foodlab.estellegresillon.fr/",
    component: null,
  },
  {
    name: "Zest Neobank",
    subtitle: "One Page Love",
    link: "https://zest.estellegresillon.fr",
    component: null,
  },
  {
    name: "Otaku Market",
    subtitle: "Shopify Site",
    link: "https://www.otaku-market.com",
    component: null,
  },
  {
    name: "Love for Greece",
    subtitle: "One Page Love",
    link: "https://santorini.estellegresillon.fr",
    component: null,
  },
  {
    name: "That's My Rock",
    subtitle: "School Project",
    link: "https://thatsmyrock.com",
    component: null,
  },
];

export const FRONT_END_CHALLENGES = [
  {
    name: "Stripe Menu",
    subtitle: "UI Challenge",
    link: "/stripe-menu",
    component: StripeMenu,
  },
  {
    name: "Pricing Comparator",
    subtitle: "UI Challenge",
    link: "/pricing-comparator",
    component: PricingComparator,
  },
  {
    name: "3D Gamepad",
    subtitle: "UI Challenge",
    link: "/3d-gamepad",
    component: GamePadWrapper,
  },
  {
    name: "Credit Card Form",
    subtitle: "UI Challenge",
    link: "/credit-card-form",
    component: CreditCardForm,
  },
  {
    name: "Waves with Canvas",
    subtitle: "UI Challenge",
    link: "/waves-canvas",
    component: WavesCanvas,
  },
];
