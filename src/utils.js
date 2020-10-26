import StripeMenu from "components/StripeMenu";
import PricingComparator from "components/PricingComparator";
import GamePadWrapper from "components/GamePad";
import CreditCardForm from "components/CreditCardForm";
import NewPortfolioHome from "components/NewPortfolio/Home";
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
    name: "New Portfolio Home",
    link: "/new-portfolio-home",
    component: NewPortfolioHome,
  },
  {
    name: "3D Hero Scene",
    link: "/3d-hero-scene",
    component: HeroScene3D,
  },
];
