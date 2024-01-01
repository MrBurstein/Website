import React from 'react';
import Event from './Event';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
};

export default Timeline;