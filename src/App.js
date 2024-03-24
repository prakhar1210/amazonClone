// import logo from './logo.svg';
import Navigation from "./Navigation/Navigation";
import "./App.css";
import SlideBar from "./SlideBar/SlideBar";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import FourImageCard from "./FourImageCard/FourImageCard";
import Image from "./ImageArray/ImageArray";
import BestSeller from "./BestSeller/BestSeller";
import TodaysDeal from "./TodaysDeal/TodaysDeal";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";
import Grocery1 from "./Albums/magento-grocery-website-1200x894.png";
import Grocery2 from "./Albums/Online-Grocery-website-design-and-development-agency-in-UK.jpg";
import Laptop from "./Albums/d53a7d37095353.573443ff6e8a8.png";

const data = {
  first: {
    title: "Samsung Appliances are at 50% discount",
    items: [
      {
        id: 1,
        src: "https://images.samsung.com/is/image/samsung/p6pim/in/rr20c1723s8-hl/gallery/in-httpsamsungcominrefrigerators1-door-449508-rr20c1723s8-hl-535095991?$1300_1038_PNG$",
        alt: "Fridge",
        heading: "Refrigrators",
      },
      {
        id: 2,
        src: "https://www.daikinindia.com/sites/default/files/styles/300_140/public/mnemonics/product-split-ac.png",
        alt: "AC image",
        heading: "Air Conditioners",
      },
      {
        id: 3,
        src: "https://images.samsung.com/is/image/samsung/p6pim/in/mc28a6036qk-tl/gallery/in-mw6000m-mc28a6036qk-tl-531750670?$1300_1038_PNG$",
        alt: "Microwave image",
        heading: "Microwave",
      },
      {
        id: 4,
        src: "https://images.samsung.com/is/image/samsung/p6pim/in/ww70t502nan-tl/gallery/in-front-loading-washer-ww10t534daws1-374545-ww70t502nan-tl-383435845?$684_547_PNG$",
        alt: "Washing Machine",
        heading: "Washing Machine",
      },
    ],
  },
  second: {
    title: "Revamp your home in style",
    items: [
      {
        id: 1,
        src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
        alt: "cushion",
        heading: "Cushion Covers, badsheets",
      },
      {
        id: 2,
        src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
        alt: "vases",
        heading: "Figurines and vases and more",
      },
      {
        id: 3,
        src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
        alt: "storage",
        heading: "Home Storage",
      },
      {
        id: 4,
        src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
        alt: "Lights",
        heading: "Lighting Solutions",
      },
    ],
  },
};

const images = [Grocery1, Grocery2, Laptop];

function App() {
  return (
    <div className="App">
      <Navigation />
      <SlideBar />
      <Carousel images={images} />
      {/* <HeroCarousel /> */}
      <FourImageCard data={data} />
      <BestSeller />
      <TodaysDeal />
      <Footer />
    </div>
  );
}

export default App;
