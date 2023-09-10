import "./index.css";
import Box from "../box"
import ListItem from "../list-item"
import Heading from "../heading";

import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedrooms.svg";
import bedsIcon from "./beds.svg";
import bathsIcon from "./baths.svg";
// import test from "./test.svg"
//якщо треба змінити оформлення списка с картинкой: <ListItem imageSrc={test}>
// для заголовка <ListItem title="ваше название">

export default function Property( { guests, bedrooms, beds, baths
    }) {
 
    return (
        <Box className="property">
            <div className="property__header heading--border">
               <Heading>Деталі властивості</Heading>
                    </div>
{/* <img height="24" width="24" src={require("./guests.svg").default} alt="Icon" /> */}

           <List {...{ guests, bedrooms, beds, baths }} />
        </Box>
    );
}


 function List ({ guests, bedrooms, beds, baths}) {
     return (
    <ul className="property__list">
      <ListItem imageSrc={guestsIcon}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedroomsIcon}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={bedsIcon}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathsIcon}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}




