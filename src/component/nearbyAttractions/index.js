import React from "react";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import "./index.css";


export default function NearbyAttractions({ attractions }) {
  return (
    <Box className="nearby">
      <div className="heading--border">
        <Heading>Пам'ятки поблизу</Heading>
      </div>
      <List attractions={attractions} />
    </Box>
  );
}

function List({ attractions }) {
  return (
    <ul className="nearby__name">
      {attractions.map(({ id, name, link }) => (
        <ListItem key={id} title={getLinkedTitle(name, link)} />
      ))}
    </ul>
  );
}

function getLinkedTitle(name, link) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="nearby__name" 
    >
      {name}
    </a>
  );
}