import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function ReviewList({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <ReviewItem {...rest} />
          </Fragment>
        ))}
      </div>
      {list.length === 0 && <div>No reviews available</div>}
    </div>
  );
}

function ReviewItem({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="guest">
        <span className="review__guest">{guestName}</span>
        <span className="review__rating">Рейтинг {rating}</span>
      </div>
      <span className="review__info">{review}</span>
    </Box>
  );
}
