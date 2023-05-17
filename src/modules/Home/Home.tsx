import Card from "@components/Card/Card";
import Header from "@components/Header/Header";
import Slider from "@components/Slider/Slider";
import TextPart from "@components/Text/TextPart";
import VideoPlay from "@components/VideoPlay/VideoPlay";
import Maps from "@components/map/Map";
import PopularCart from "@modules/Home/components/Popular/PopularCart";
import Services from "@modules/Home/components/Services/Services";
import { NextPage } from "next";
import { homeLocaleEn } from "./locale";

const maps =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5687.889101795378!2d71.59133464284177!3d40.924543097714505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1676886250121!5m2!1sen!2sru";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Header
        image="images/Namangan1.jpg"
        title={homeLocaleEn.welcome}
        titleTwo={homeLocaleEn.titleTwo}
        p={homeLocaleEn.textMore}
      />
      <TextPart
        title={homeLocaleEn.popularTitle}
        titleTwo={homeLocaleEn.popularTitleTwo}
      />
      <PopularCart />
      <VideoPlay />
      <TextPart
        title={homeLocaleEn.servicesTitle}
        titleTwo={homeLocaleEn.servicesTitleTwo}
      />
      <Services />
      <TextPart
        title={homeLocaleEn.mapTitle}
        titleTwo={homeLocaleEn.mapTitleTwo}
      />
      <Maps width={600} height={500} please={maps} />
      <TextPart
        title={homeLocaleEn.gitTitle}
        titleTwo={homeLocaleEn.gitTitleTwo}
      />
      <Slider />
      <TextPart
        title={homeLocaleEn.cilentTitle}
        titleTwo={homeLocaleEn.cilentTitleTwo}
      />
      <Card />
    </div>
  );
};
export default Home;
