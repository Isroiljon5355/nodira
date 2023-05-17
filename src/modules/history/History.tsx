import React from "react";
import historyLocaleUz from "./locale";
import Header from "@components/Header/Header";
import TextPart from "@components/Text/TextPart";
import HistoryTextMore from "./components/HistoryTextMore";
import Maps from "@components/map/Map";
import OldCart from "./components/OldCart";

type Props = {};
const maps =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96400.1236573009!2d71.57458269966689!3d40.970446406753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2sNamangan%2C%20Uzbekistan!5e0!3m2!1sen!2sru!4v1679151939723!5m2!1sen!2sru";

const History = (props: Props) => {
  return (
    <div>
      <Header
        image="/images/mapUzb.png"
        title={historyLocaleUz.title}
        titleTwo=""
        p={historyLocaleUz.p}
      />
      <TextPart
        title={historyLocaleUz.historyTitle}
        titleTwo={historyLocaleUz.historyTitleTwo}
      />
      <HistoryTextMore />
      <TextPart
        title={historyLocaleUz.oldTitle}
        titleTwo={historyLocaleUz.oldTitleTwo}
      />
      <OldCart />
      <TextPart
        title={historyLocaleUz.mapTitle}
        titleTwo={historyLocaleUz.mapTitleTwo}
      />
      <Maps width={100} height={100} please={maps} />
    </div>
  );
};

export default History;
