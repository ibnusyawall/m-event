import React from 'react';

const Event = ({ event, deleteEvent }) => ((
  <div className="card my-3">
    <div className="card-body">
      <h4 className="card-title">{event.title}</h4>
      <p className="card-text">
        Start date: 
        <span className="text-muted"> { new Date(event.start_date).toUTCString()}</span>
      </p>
      <p className="card-text">
        End date: 
        <span className="text-muted"> { new Date (event.end_date).toUTCString()}</span>
      </p>
      <p className="card-text">
        Location: 
        <span className="text-muted">{event.location}</span>
      </p>
      ${event.price}
      <button className="btn btn-danger float-right btn-sm" onClick={() => deleteEvent(event.id)}>Delete</button>
    </div>
  </div>
))

export default Event
