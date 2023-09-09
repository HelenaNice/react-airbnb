import React from "react";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import "./index.css";

const amenityTranslations = {
  hasPool: "Басейн",
  hasGym: "Спортивний зал",
  hasFreeBreakfast: "Безкоштовний сніданок",
  hasFreeWiFi: "Безкоштовний Wi-Fi",
  hasParking: "Безкоштовний вуличний паркінг",
  hasPetsAllowed: "Дозволено розміщення з домашніми тваринами",
  hasAirportShuttle: "Трансфер до/з аеропорту",
  hasConciergeService: "Консьєрж-сервіс",
  hasRoomService: "Обслуговування номерів",
  hasChildFriendly: "Підходить для дітей",
};

export default function Amenities({ amenities }) {
  return (
    <Box className="amenities">
      <div className="amenities__header">
        <Heading>Зручності</Heading>
      </div>
      <ul className="amenities__list">
         {Object.entries(amenities).map(([key, value]) => (
          <ListItem
          imageSrc={require(`./icons/${key}.svg`)}
          key={key}
          title={<span className={value ? "amenities_yes" : "amenities_no"}>{amenityTranslations[key]}</span>}
  />
        ))}
      </ul>
    </Box>
  );
}
