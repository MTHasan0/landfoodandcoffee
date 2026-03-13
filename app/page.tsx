import Image from "next/image";
import Hero from "./component/hero";
import ItemsLogo from "./component/itemsLogo";
import FeaturedMenu from "./component/FeaturedMenu";
import MenuExplore from "./component/menuExplore";
import { SingleOriginSection } from "./component/SingleOriginSection";
import { Homemade_Apple } from "next/font/google";
import { HandmadeSection } from "./component/HandmadeSection";

export default function Home() {
  return (
    <div className=" flex-col min-h-screen items-center justify-center font-sans  ">
      <Hero />
      <ItemsLogo />
      <FeaturedMenu />
      <SingleOriginSection />
      <HandmadeSection />
    </div>
  );
}
