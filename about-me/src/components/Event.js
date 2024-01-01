import React from 'react';

const Event = ({ event }) => {
  const { title, date, description, image, link } = event;

  return (
    <div className="timeline-event">
      <div className="event-details">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <a href={link}>More Info</a>
      </div>
      {image && <img src={image} alt={title} />}
    </div>
  );
};

export default Event;