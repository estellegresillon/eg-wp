import StripeMenu from "components/StripeMenu";
import PricingComparator from "components/PricingComparator";
import GamePadWrapper from "components/GamePad";
import CreditCardForm from "components/CreditCardForm";
import HeroScene from "components/HeroScene";
import HeroScene3D from "components/3DHeroScene";

export const FRONT_END_CHALLENGES = [
  { name: "Stripe Menu", link: "/stripe-menu", component: StripeMenu },
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
    name: "Hero Scene",
    link: "/hero-scene",
    component: HeroScene,
  },
  {
    name: "3D Hero Scene",
    link: "/3d-hero-scene",
    component: HeroScene3D,
  },
];
