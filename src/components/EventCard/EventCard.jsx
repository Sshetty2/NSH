import React from 'react';
import { Link } from 'react-router-dom';

// each event card is rendered with a link to it's own path which will be handled by the router in the App components
const EventCard = ({ id, name, image, city, state, date, pathname }) => {
  return (
    <Link to={pathname === '/' ? `/event/${id}` : `${pathname}/event/${id}`}>
      <div className="EventCard" style={{ backgroundImage: `url(${image})` }}>
        <div className="text-container">
          <h3 className="card-name">{name}</h3>
          <h5 className="card-location">
            {city}, {state}
          </h5>
          <h5 className="card-date">{date}</h5>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
