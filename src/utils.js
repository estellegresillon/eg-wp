import StripeMenu from "components/StripeMenu";
import PricingComparator from "components/PricingComparator";
import GamePadWrapper from "components/GamePad";
import CreditCardForm from "components/CreditCardForm";
import WavesCanvas from "components/WavesCanvas";

export const FRONT_END_CHALLENGES = [
  {
    name: "School project - Foodlab",
    link: "https://foodlab.space",
    component: null,
  },
  {
    name: "Shopify Site - Otaku Market",
    link: "https://www.otaku-market.com",
    component: null,
  },
  { name: "Stripe Menu", link: "/stripe-menu", component: StripeMenu },
  {
    name: "One Page Love - I",
    link: "https://santorini.estellegresillon.fr",
    component: null,
  },
  {
    name: "Pricing Comparator",
    link: "/pricing-comparator",
    component: PricingComparator,
  },
  {
    name: "3D Gamepad",
    link: "/3d-gamepad",
    component: GamePadWrapper,
  },
  {
    name: "Credit Card Form",
    link: "/credit-card-form",
    component: CreditCardForm,
  },
  {
    name: "Waves with Canvas",
    link: "/waves-canvas",
    component: WavesCanvas,
  },
  {
    name: "One Page Love - II",
    link: "https://zest.estellegresillon.fr",
    component: null,
  },
];
