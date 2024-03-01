import React from "react";
import { useLoaderData } from "react-router-dom";

export async function eventsLoader() {
  const res = await fetch("/api/v1/events");
  const events = await res.json();
  return events;
}

export default function Events() {
  const events = useLoaderData();
  console.log(events);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {events.length ? (
        events.map((event) => {
          return (
            <div className="card-body" key={event.id}>
              <h2 className="card-title">{event.name}</h2>
              <p>{event.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Event</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Events</p>
      )}
    </div>
  );
}
