import "./index.css";
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading";

const propertyTranslations = {
  house_rules: "Правила дому",
  cancellation_policy: "Політика скасування",
  local_transportation: "Місцевий транспорт",
  host_languages: "Мови господаря",
  special_offers: "Спеціальні пропозиції",
  check_in_instructions: "Інструкції з реєстрації заїзду",
};
// import test from "./test.svg"
//якщо треба змінити оформлення списка с картинкой: <ListItem imageSrc={test}>
// для заголовка <ListItem title="ваше название">

export default function PropertyAdd( {additional_properties}) {
 
    return (
        <Box className="property-add">
            <div className="property-add__header heading--border">
               <Heading>Додадкові властивості</Heading>
             </div>
           <List additional_properties={additional_properties} translations={propertyTranslations} />
        </Box>
    );
}

 function List({ additional_properties }) {
  return (
    <ul className="property-add__list">
      {Object.entries(additional_properties).map(([key, value]) => (
        <ListItem
          key={key}
          title={<span className="property-add__title">{propertyTranslations[key]}</span>}
        >
          <span className="property-add__value">{value}</span>
        </ListItem>
      ))}
    </ul>
  );
}